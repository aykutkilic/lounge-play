import { joinRoom, selfId } from '@trystero-p2p/nostr';
import {
  ROOM_BY_ID, AVATARS, COLORS, EMOJIS, ITEMS, ITEM_LIFETIME, MAX_PER_ROOM, roomMenu, seatExists,
} from './shared.js';

// Serverless transport for static hosting (GitHub Pages). Browsers find each
// other through public Nostr relays and talk over WebRTC data channels.
// It speaks the same events as the WebSocket server, and since there's no
// server to trust, every browser validates what it receives against the same
// allowlists in shared.js — anything that isn't an approved emoji is dropped.

const APP_ID = 'lounge.aykutkilic.github.io/v1';
// Long-running public relays; peers only use them to find each other (ephemeral events, nothing stored).
const RELAYS = [
  'wss://nos.lol', 'wss://relay.damus.io', 'wss://relay.primal.net',
  'wss://nostr.mom', 'wss://offchain.pub', 'wss://0x-nostr-relay.fly.dev',
];
const EMOJI_SET = new Set(EMOJIS);
const AVATAR_SET = new Set(AVATARS);
const COLOR_SET = new Set(COLORS);

function clamp(room, x, z) {
  const hw = room.size.w / 2 - 0.7;
  const hd = room.size.d / 2 - 0.7;
  return [Math.max(-hw, Math.min(hw, x)), Math.max(-hd, Math.min(hd, z))];
}

function bucket(b, rate, burst) {
  const now = Date.now();
  b.tokens = Math.min(burst, b.tokens + ((now - b.at) / 1000) * rate);
  b.at = now;
  if (b.tokens < 1) return false;
  b.tokens -= 1;
  return true;
}

// Never trust a peer's state: rebuild it from known-good values only.
function sanitize(s) {
  if (!s || typeof s !== 'object') return null;
  const room = ROOM_BY_ID[s.room] ? s.room : null;
  const out = {
    room,
    avatar: AVATAR_SET.has(s.avatar) ? s.avatar : AVATARS[0],
    color: COLOR_SET.has(s.color) ? s.color : COLORS[0],
    x: 0, z: 0, seat: null, seatAt: 0, drink: null, snack: null, reading: false,
  };
  if (!room) return out;
  out.reading = s.reading === true;
  const def = ROOM_BY_ID[room];
  if (Number.isFinite(s.x) && Number.isFinite(s.z)) [out.x, out.z] = clamp(def, s.x, s.z);
  if (seatExists(def, s.seat)) {
    out.seat = s.seat;
    out.seatAt = Number.isFinite(s.seatAt) ? s.seatAt : 0;
  }
  const menu = roomMenu(def);
  for (const kind of ['drink', 'snack']) {
    const it = s[kind];
    if (it && ITEMS[it.item]?.kind === kind && menu.includes(it.item) && Number.isFinite(it.at)) out[kind] = { item: it.item, at: it.at };
  }
  return out;
}

export class P2PNet extends EventTarget {
  constructor() {
    super();
    this.id = selfId;
    this.me = null;
    this.peers = new Map(); // peerId -> { state, emoji: bucket, order: bucket }
    this.timers = { drink: 0, snack: 0 };
    this.emojiBucket = { tokens: 6, at: Date.now() };

    this.room = joinRoom({ appId: APP_ID, maxReceiveBytes: 4096, relayConfig: { urls: RELAYS } }, 'lounge');
    this.stateAction = this.room.makeAction('state');
    this.eventAction = this.room.makeAction('ev');
    this.room.onPeerJoin = (pid) => {
      console.info('[lounge] peer connected', pid);
      this.peerOf(pid);
      if (this.me) this.stateAction.send(this.me, { target: pid });
    };
    this.room.onPeerLeave = (pid) => {
      console.info('[lounge] peer left', pid);
      const p = this.peers.get(pid);
      this.peers.delete(pid);
      if (p?.state?.room && p.state.room === this.me?.room) this.emit('left', { id: pid });
    };
    this.stateAction.onMessage = (data, { peerId }) => this.onState(peerId, data);
    this.eventAction.onMessage = (data, { peerId }) => this.onEvent(peerId, data);
    queueMicrotask(() => this.emit('open'));
  }

  emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }));
  }

  on(type, fn) {
    this.addEventListener(type, (e) => fn(e.detail));
  }

  peerOf(pid) {
    let p = this.peers.get(pid);
    if (!p) {
      p = { state: null, emoji: { tokens: 8, at: Date.now() }, order: { tokens: 3, at: Date.now() } };
      this.peers.set(pid, p);
    }
    return p;
  }

  // Everyone shares one clock source: their (NTP-synced) system clock.
  serverNow(local = performance.timeOrigin + performance.now()) {
    return local;
  }

  async counts() {
    const counts = {};
    for (const p of this.peers.values()) if (p.state?.room) counts[p.state.room] = (counts[p.state.room] || 0) + 1;
    if (this.me?.room) counts[this.me.room] = (counts[this.me.room] || 0) + 1;
    return counts;
  }

  broadcast() {
    this.stateAction.send(this.me);
  }

  roommates() {
    return [...this.peers.entries()].filter(([, p]) => p.state?.room && p.state.room === this.me?.room);
  }

  publicPeer(id, s) {
    return { id, avatar: s.avatar, color: s.color, x: s.x, z: s.z, seat: s.seat, drink: s.drink, snack: s.snack, reading: s.reading };
  }

  // ---------------------------------------------------------------- outgoing

  send(msg) {
    const room = this.me?.room && ROOM_BY_ID[this.me.room];
    switch (msg.t) {
      case 'join': {
        const def = ROOM_BY_ID[msg.room];
        if (!def) return this.emit('error', { code: 'no-room' });
        const count = [...this.peers.values()].filter((p) => p.state?.room === msg.room).length;
        if (count >= MAX_PER_ROOM) return this.emit('error', { code: 'full' });
        this.clearItems();
        const [x, z] = clamp(def, (Math.random() - 0.5) * 4, def.size.d / 2 - 1.6 - Math.random());
        this.me = {
          room: msg.room,
          avatar: AVATAR_SET.has(msg.avatar) ? msg.avatar : AVATARS[0],
          color: COLOR_SET.has(msg.color) ? msg.color : COLORS[0],
          x, z, seat: null, seatAt: 0, drink: null, snack: null, reading: false,
        };
        this.broadcast();
        this.emit('welcome', {
          id: this.id, room: msg.room, now: Date.now(),
          peers: [this.publicPeer(this.id, this.me), ...this.roommates().map(([pid, p]) => this.publicPeer(pid, p.state))],
        });
        break;
      }
      case 'leave':
        if (!this.me) return;
        this.clearItems();
        this.me = { ...this.me, room: null, seat: null, drink: null, snack: null, reading: false };
        this.broadcast();
        break;
      case 'move': {
        if (!room || !Number.isFinite(msg.x) || !Number.isFinite(msg.z)) return;
        [this.me.x, this.me.z] = clamp(room, msg.x, msg.z);
        this.me.seat = null;
        this.broadcast();
        this.emit('moved', { id: this.id, x: this.me.x, z: this.me.z });
        break;
      }
      case 'sit': {
        if (!room || !seatExists(room, msg.seat)) return;
        if (this.roommates().some(([, p]) => p.state.seat === msg.seat)) return this.emit('error', { code: 'seat-taken', seat: msg.seat });
        this.me.seat = msg.seat;
        this.me.seatAt = Date.now();
        this.broadcast();
        this.emit('sat', { id: this.id, seat: msg.seat });
        break;
      }
      case 'reading': {
        const on = msg.on === true;
        if (!room || this.me.reading === on) return;
        this.me.reading = on;
        this.broadcast();
        this.emit('reading', { id: this.id, on });
        break;
      }
      case 'emoji': {
        if (!room || !EMOJI_SET.has(msg.e) || !bucket(this.emojiBucket, 2, 6)) return;
        this.eventAction.send({ t: 'emoji', e: msg.e });
        this.emit('emoji', { id: this.id, e: msg.e });
        break;
      }
      case 'order': {
        const info = ITEMS[msg.item];
        if (!room || !info || !roomMenu(room).includes(msg.item)) return;
        const now = Date.now();
        const prev = this.me[info.kind];
        if (prev && now - prev.at < 6000) return this.emit('error', { code: 'slow-down' });
        this.me[info.kind] = { item: msg.item, at: now };
        clearTimeout(this.timers[info.kind]);
        this.timers[info.kind] = setTimeout(() => {
          if (!this.me || this.me[info.kind]?.at !== now) return;
          this.me[info.kind] = null;
          this.broadcast();
          this.emit('finished', { id: this.id, kind: info.kind });
        }, ITEM_LIFETIME[info.kind]);
        this.eventAction.send({ t: 'order', item: msg.item });
        this.broadcast();
        this.emit('order', { id: this.id, item: msg.item, kind: info.kind, at: now });
        break;
      }
    }
  }

  clearItems() {
    clearTimeout(this.timers.drink);
    clearTimeout(this.timers.snack);
  }

  // ---------------------------------------------------------------- incoming

  onState(pid, data) {
    const next = sanitize(data);
    if (!next) return;
    const p = this.peerOf(pid);
    const prev = p.state;
    p.state = next;
    const mine = this.me?.room;
    if (!mine) return;

    const wasIn = prev?.room === mine;
    const isIn = next.room === mine;
    if (!wasIn && isIn) {
      this.emit('joined', { peer: this.publicPeer(pid, next) });
      if (next.seat) this.resolveSeat(pid, next);
      return;
    }
    if (wasIn && !isIn) return this.emit('left', { id: pid });
    if (!isIn) return;

    if (next.seat && next.seat !== prev.seat) {
      this.emit('sat', { id: pid, seat: next.seat });
      this.resolveSeat(pid, next);
    } else if (!next.seat && (prev.seat || next.x !== prev.x || next.z !== prev.z)) {
      this.emit('moved', { id: pid, x: next.x, z: next.z });
    }
    for (const kind of ['drink', 'snack']) {
      if (prev[kind] && !next[kind]) this.emit('finished', { id: pid, kind });
    }
    if (prev.reading !== next.reading) this.emit('reading', { id: pid, on: next.reading });
  }

  // Two people grabbed the same seat at once: the earlier claim keeps it.
  resolveSeat(pid, other) {
    if (!this.me.seat || this.me.seat !== other.seat) return;
    const theyWin = other.seatAt < this.me.seatAt || (other.seatAt === this.me.seatAt && pid < this.id);
    if (!theyWin) return;
    const seat = this.me.seat;
    this.me.seat = null;
    this.broadcast();
    this.emit('error', { code: 'seat-taken', seat });
  }

  onEvent(pid, data) {
    const p = this.peerOf(pid);
    if (!data || typeof data !== 'object' || !this.me?.room || p.state?.room !== this.me.room) return;
    if (data.t === 'emoji') {
      if (EMOJI_SET.has(data.e) && bucket(p.emoji, 3, 8)) this.emit('emoji', { id: pid, e: data.e });
    } else if (data.t === 'order') {
      const info = ITEMS[data.item];
      if (info && roomMenu(ROOM_BY_ID[this.me.room]).includes(data.item) && bucket(p.order, 0.5, 3)) {
        this.emit('order', { id: pid, item: data.item, kind: info.kind, at: Date.now() });
      }
    }
  }
}
