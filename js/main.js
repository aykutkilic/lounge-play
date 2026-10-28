import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ROOMS, ROOM_BY_ID, AVATARS, COLORS, EMOJIS, BURST_EMOJIS, roomMenu, maidPlan } from './shared.js';
import { THEMES } from './themes.js';
import { buildWorld } from './world.js';
import { Avatar, Waiter, Fx, Maid } from './avatar.js';
import { Music } from './music.js';
import { Net } from './net.js';
import { TRANSPORT } from './config.js';
import { Reader } from './reader.js';
import { FirstPerson } from './firstperson.js';
import { SKIN_TONES } from './hands.js';
import { listBooks, addFiles, removeBook, libraryBook } from './library.js';
import { CATALOG } from './catalog.js';
import { leftBookMesh } from './furniture.js';

const $ = (id) => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
};
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const QUICK = ['👋', '😊', '😂', '🥰', '👍', '👏', '❤️', '✨', '🎶', '☕', '😴', '🤔'];

// ---------------------------------------------------------------- renderer

const canvas = $('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false; // the furniture doesn't move: draw its shadows once (people get contact shadows)
renderer.toneMapping = THREE.ACESFilmicToneMapping; // filmic highlights: bulbs and flames roll off instead of clipping

// Resolution adapts to the machine: start sharp, and trade pixels for a
// steady frame rate if frames get slow (and back again when there's room).
const quality = { ratio: Math.min(devicePixelRatio, 1.5), max: Math.min(devicePixelRatio, 2), frames: 0, time: 0 };
renderer.setPixelRatio(quality.ratio);
function adaptQuality(dt) {
  quality.frames++;
  quality.time += dt;
  if (quality.time < 1.5) return;
  const ms = (quality.time / quality.frames) * 1000;
  quality.frames = 0;
  quality.time = 0;
  let next = quality.ratio;
  if (ms > 24) next = Math.max(0.75, quality.ratio - 0.25);
  else if (ms < 14 && quality.ratio < quality.max) next = Math.min(quality.max, quality.ratio + 0.25);
  if (next !== quality.ratio) {
    quality.ratio = next;
    renderer.setPixelRatio(next);
    renderer.setSize(innerWidth, innerHeight);
  }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 1200);
camera.userData.maxTexture = renderer.capabilities.maxTextureSize;
scene.add(camera); // the reader's book and hands hang off the camera
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 5;
controls.maxDistance = 34;
controls.minPolarAngle = 0.2;
controls.maxPolarAngle = 1.36;
controls.screenSpacePanning = false;
controls.autoRotateSpeed = 0.35;

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

function resetCamera() {
  const portrait = innerWidth < innerHeight;
  camera.position.set(11, portrait ? 17 : 11.5, portrait ? 22 : 15.5);
  controls.target.set(0, 0.6, 0);
  controls.update();
}

const cursorRing = new THREE.Mesh(
  new THREE.RingGeometry(0.3, 0.38, 36),
  new THREE.MeshBasicMaterial({ color: '#fff4e0', transparent: true, opacity: 0.7, depthWrite: false }),
);
cursorRing.rotation.x = -Math.PI / 2;
cursorRing.renderOrder = 5;
cursorRing.visible = false;
scene.add(cursorRing);

const clickPulse = cursorRing.clone();
clickPulse.material = cursorRing.material.clone();
clickPulse.visible = false;
scene.add(clickPulse);
let pulseT = 1;

// ---------------------------------------------------------------- state

// 'ws' talks to server.js; 'p2p' needs no server (used for the GitHub Pages build). ?net=p2p overrides.
const transport = new URLSearchParams(location.search).get('net') || TRANSPORT;
const net = transport === 'p2p' ? new (await import('./p2p.js')).P2PNet() : new Net();
const music = new Music();
const me = {
  avatar: AVATARS.includes(store.get('avatar')) ? store.get('avatar') : pick(AVATARS),
  color: COLORS.includes(store.get('color')) ? store.get('color') : pick(COLORS),
  skin: SKIN_TONES.includes(store.get('skin')) ? store.get('skin') : SKIN_TONES[1], // your own hands; never sent anywhere
};
let current = null; // the room we're in
let preview = null; // the room shown behind the lobby
let selectedRoom = ROOM_BY_ID[location.hash.slice(1)] ? location.hash.slice(1) : ROOMS[0].id;
let joining = null;
let view = 'first'; // 'first' = through your own eyes · 'overview' = the dollhouse view
const fp = new FirstPerson(camera);

function applyTheme(theme) {
  scene.background = new THREE.Color(theme.background);
  scene.fog = new THREE.Fog(...theme.fog);
  renderer.toneMappingExposure = theme.exposure;
}

const pmrem = new THREE.PMREMGenerator(renderer);

function showWorld(roomId) {
  const room = ROOM_BY_ID[roomId];
  const theme = THEMES[roomId];
  const world = buildWorld(room, theme);
  scene.add(world.root);
  applyTheme(theme);
  // image-based light: soft ambient and reflections from the room's own sky (or an indoor room)
  world.env = pmrem.fromScene(world.envScene, 0.04, 0.1, 1000);
  scene.environment = world.env.texture;
  scene.environmentIntensity = theme.envIntensity ?? 1;
  return { room, theme, world };
}

function hideWorld(entry) {
  if (!entry) return;
  scene.remove(entry.world.root);
  entry.world.env?.dispose();
  entry.world.dispose();
}

// ---------------------------------------------------------------- lobby

function renderLobby() {
  $('youPreview').textContent = me.avatar;
  $('youPreview').style.setProperty('--c', me.color);
  $('avatarPicker').replaceChildren(...AVATARS.map((a) => {
    const b = document.createElement('button');
    b.textContent = a;
    b.className = a === me.avatar ? 'on' : '';
    b.onclick = () => { me.avatar = a; store.set('avatar', a); renderLobby(); };
    return b;
  }));
  $('colorPicker').replaceChildren(...COLORS.map((c) => {
    const b = document.createElement('button');
    b.style.background = c;
    b.className = c === me.color ? 'on' : '';
    b.setAttribute('aria-label', c);
    b.onclick = () => { me.color = c; store.set('color', c); renderLobby(); };
    return b;
  }));
  $('tonePicker').replaceChildren(...SKIN_TONES.map((tone, i) => {
    const b = document.createElement('button');
    b.textContent = ['✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿'][i];
    b.className = tone === me.skin ? 'on' : '';
    b.title = 'Your hands, when reading';
    b.onclick = () => { me.skin = tone; store.set('skin', tone); renderLobby(); };
    return b;
  }));
}

function renderRooms(counts = {}) {
  $('roomList').replaceChildren(...ROOMS.map((r) => {
    const card = document.createElement('button');
    card.className = `room-card room-${r.id}${r.id === selectedRoom ? ' selected' : ''}`;
    card.innerHTML = `
      <span class="room-emoji">${r.emoji}</span>
      <span class="room-text"><b>${r.name}</b><small>${r.tagline}</small></span>
      <span class="room-count">👤 ${counts[r.id] ?? 0}</span>
      <span class="room-go">➜</span>`;
    card.onmouseenter = () => previewRoom(r.id);
    card.onfocus = () => previewRoom(r.id);
    card.onclick = () => joinRoom(r.id);
    return card;
  }));
}

async function refreshCounts() {
  if ($('lobby').hidden) return;
  try {
    renderRooms(await net.counts());
  } catch { /* server restarting */ }
}
setInterval(refreshCounts, 3000);

let previewTimer = 0;
function previewRoom(id) {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    if (preview?.room.id === id || current) return;
    selectedRoom = id;
    document.querySelectorAll('.room-card').forEach((c) => c.classList.toggle('selected', c.classList.contains(`room-${id}`)));
    hideWorld(preview);
    preview = showWorld(id);
  }, 180);
}

function showLobby() {
  $('hud').hidden = true;
  $('lobby').hidden = false;
  joining = null;
  renderLobby();
  renderRooms();
  refreshCounts();
  if (!preview) preview = showWorld(selectedRoom);
  resetCamera();
  controls.autoRotate = true;
  history.replaceState(null, '', location.pathname);
}

// ---------------------------------------------------------------- joining

function joinRoom(id) {
  music.ensure(); // must happen inside the click so the browser allows audio
  joining = id;
  document.body.classList.add('busy');
  net.send({ t: 'join', room: id, avatar: me.avatar, color: me.color });
}

net.on('open', () => {
  if (current) net.send({ t: 'join', room: current.room.id, avatar: me.avatar, color: me.color });
});

net.on('close', () => { if (current) toast('📡💤'); });

net.on('welcome', (msg) => {
  document.body.classList.remove('busy');
  const rejoin = current && current.room.id === msg.room;
  if (!rejoin) {
    teardownRoom();
    // the lobby was already showing this room: step straight into it
    let entry = preview?.room.id === msg.room ? preview : null;
    if (!entry) {
      hideWorld(preview);
      entry = showWorld(msg.room);
    }
    preview = null;
    current = {
      ...entry,
      avatars: new Map(),
      seatOwners: new Map(),
      fx: new Fx(entry.world.root),
      myId: msg.id,
    };
    if (entry.world.waiter) {
      current.waiter = new Waiter(entry.world.waiter, current.fx);
      entry.world.root.add(current.waiter.group);
    }
    current.books = new Map();
    current.leftMeshes = new Map();
    if (entry.world.door) {
      current.maid = new Maid(entry.world.door);
      entry.world.root.add(current.maid.group);
    }
    controls.autoRotate = false;
    enterHud();
    music.play(msg.room, current.theme.music);
    history.replaceState(null, '', `#${msg.room}`);
    for (const p of msg.peers) addAvatar(p, true);
    for (const b of msg.books || []) applyBook(b);
    setView(view);
  } else {
    for (const id of [...current.books.keys()]) applyBook({ id, mode: null });
    for (const b of msg.books || []) applyBook(b);
    for (const a of current.avatars.values()) removeAvatar(a.id, true);
    current.myId = msg.id;
    for (const p of msg.peers) addAvatar(p, true);
    if (view === 'first' && mine()) mine().group.visible = false;
  }
  updateCount();
});

// Switch between seeing through your own eyes and the bird's-eye dollhouse.
function setView(v) {
  view = v;
  const a = mine();
  $('camBtn').textContent = v === 'first' ? '🏠' : '👀';
  $('camBtn').title = v === 'first' ? 'Bird’s-eye view' : 'First-person view';
  if (!current || reader.active) return;
  if (v === 'first') {
    controls.enabled = false;
    if (a) a.group.visible = false; // we're behind these eyes
    // face into the room (or the way our seat faces)
    fp.enter(a?.seat ? a.seat.rot : Math.atan2(-(a?.position.x ?? 0), -(a?.position.z ?? 1)), a);
  } else {
    fp.exit();
    if (a) a.group.visible = true;
    controls.enabled = true;
    camera.fov = 40;
    camera.updateProjectionMatrix();
    resetCamera();
  }
}

// Clears people, robot and effects; returns the bare world so the lobby can keep showing it.
function teardownRoom({ keepWorld = false } = {}) {
  if (!current) return null;
  const { room, theme, world } = current;
  for (const a of current.avatars.values()) { world.root.remove(a.group); a.dispose(); }
  current.fx.clear();
  if (current.waiter) { world.root.remove(current.waiter.group); current.waiter.dispose(); }
  if (current.maid) { world.root.remove(current.maid.group); current.maid.dispose(); }
  for (const id of [...current.books.keys()]) applyBook({ id, mode: null });
  current = null;
  if (keepWorld) return { room, theme, world };
  hideWorld({ world });
  return null;
}

function leaveRoom() {
  pendingBook = null;
  pendingTake = null;
  if (reader.active) reader.finish();
  fp.exit();
  controls.enabled = true;
  camera.fov = 40;
  camera.updateProjectionMatrix();
  net.send({ t: 'leave' });
  music.stop();
  preview = teardownRoom({ keepWorld: true });
  if (preview) selectedRoom = preview.room.id;
  closePanels();
  showLobby();
}

// ---------------------------------------------------------------- avatars

function addAvatar(peer, quiet = false) {
  if (!current || current.avatars.has(peer.id)) return;
  const a = new Avatar(peer, { isMe: peer.id === current.myId });
  current.avatars.set(peer.id, a);
  current.world.root.add(a.group);
  if (peer.seat && current.world.seats.has(peer.seat)) {
    a.sitAt(current.world.seats.get(peer.seat), true);
    current.seatOwners.set(peer.seat, peer.id);
  }
  if (peer.drink) a.setItem('drink', peer.drink.item, peer.drink.at);
  if (peer.snack) a.setItem('snack', peer.snack.item, peer.snack.at);
  if (peer.reading) a.setReading(true);
  if (!quiet) {
    current.fx.burst('✨', a.position.clone().setY(1.6), 3);
    log(peer.id, '👋', true);
  }
  updateCount();
}

function removeAvatar(id, quiet = false) {
  const a = current?.avatars.get(id);
  if (!a) return;
  if (!quiet) current.fx.burst('💨', a.position.clone().setY(1.0), 2);
  releaseSeat(id);
  current.waiter?.cancelFor(id);
  current.world.root.remove(a.group);
  a.dispose();
  current.avatars.delete(id);
  updateCount();
}

function releaseSeat(id) {
  for (const [seat, owner] of current.seatOwners) if (owner === id) current.seatOwners.delete(seat);
  if (id === current.myId) $('standBtn').hidden = true;
}

const mine = () => current?.avatars.get(current.myId);

net.on('joined', ({ peer }) => addAvatar(peer));
net.on('left', ({ id }) => removeAvatar(id));

net.on('moved', ({ id, x, z }) => {
  if (!current) return;
  releaseSeat(id);
  if (id !== current.myId) current.avatars.get(id)?.moveTo(x, z);
});

net.on('sat', ({ id, seat }) => {
  if (!current) return;
  const s = current.world.seats.get(seat);
  const a = current.avatars.get(id);
  if (!s || !a) return;
  releaseSeat(id);
  current.seatOwners.set(seat, id);
  a.sitAt(s);
  if (id === current.myId) {
    $('standBtn').hidden = false;
    fp.auto = null;
  }
});

net.on('emoji', ({ id, e }) => {
  const a = current?.avatars.get(id);
  if (!a) return;
  a.say(e);
  if (BURST_EMOJIS.has(e)) current.fx.burst(e, a.position.clone().setY(a.group.position.y + 1.6), 3);
  log(id, e);
});

net.on('order', (o) => {
  if (!current) return;
  current.waiter?.enqueue(o);
  if (o.id === current.myId) setStatus(`🤖 ${o.item}`);
  if (!current.waiter) deliver(o);
});

function deliver(o) {
  const a = current?.avatars.get(o.id);
  if (!a) return;
  a.setItem(o.kind, o.item, o.at);
  if (o.id === current.myId) setStatus('');
}

net.on('reading', ({ id, on }) => current?.avatars.get(id)?.setReading(on));

// ---------------------------------------------------------------- the library

let pendingTake = null;

// A library book changed hands: on the shelf (mode null), being read, or left lying somewhere.
function applyBook({ id, by, mode, x, z }) {
  const lib = current?.world.library.get(id);
  if (!lib) return;
  if (mode) current.books.set(id, { by, mode, x, z });
  else current.books.delete(id);
  lib.mesh.visible = !mode;
  let lying = current.leftMeshes.get(id);
  if (mode === 'left') {
    if (!lying) {
      lying = leftBookMesh(id);
      lying.traverse((o) => { if (o.isMesh) { o.userData.libraryBook = id; current.world.pickables.push(o); } });
      current.world.root.add(lying);
      current.leftMeshes.set(id, lying);
    }
    lying.position.set(x, 0, z);
    lying.visible = true;
  } else if (lying) {
    current.world.root.remove(lying);
    lying.traverse((o) => {
      if (!o.isMesh) return;
      const i = current.world.pickables.indexOf(o);
      if (i >= 0) current.world.pickables.splice(i, 1);
      o.geometry.dispose();
      for (const m of [].concat(o.material)) if (!m.userData.shared) { m.map?.dispose(); m.dispose(); }
    });
    current.leftMeshes.delete(id);
  }
  if (mode === 'reading' && by === current.myId && pendingTake === id) {
    pendingTake = null;
    startReading(libraryBook(id, CATALOG[id]));
  }
}

function takeBook(id) {
  const b = current.books.get(id);
  if (b?.mode === 'reading') { toast('📖❌'); return; }
  pendingTake = id;
  net.send({ t: 'book', id, mode: 'reading' });
}

// put a finished library book down on the floor beside wherever we're sitting
function leaveBook(id) {
  const a = mine();
  if (!a) return;
  const seat = a.seat;
  const yaw = seat ? seat.rot : a.yaw;
  const base = seat ? seat.pos : a.position;
  const x = base.x - Math.cos(yaw) * (seat ? 0.62 : 0.2) + Math.sin(yaw) * 0.25;
  const z = base.z + Math.sin(yaw) * (seat ? 0.62 : 0.2) + Math.cos(yaw) * 0.25;
  net.send({ t: 'book', id, mode: 'left', x, z });
}

net.on('book', (b) => applyBook(b));
net.on('maid', ({ books }) => {
  if (!current?.maid) return;
  current.maid.run(maidPlan(current.room, books), {
    onPick: (id) => { const m = current?.leftMeshes.get(id); if (m) m.visible = false; },
  });
});

net.on('finished', ({ id, kind }) => {
  const a = current?.avatars.get(id);
  if (!a) return;
  a.removeItem(kind);
  current.fx.burst('✨', a.handPosition(kind), 1);
});

const ERRORS = { 'seat-taken': '🪑❌', full: '🚪🈵', 'slow-down': '⏳🙂', 'no-room': '❓', 'book-taken': '📖❌' };
net.on('error', ({ code, seat }) => {
  document.body.classList.remove('busy');
  toast(ERRORS[code] || '⚠️');
  // p2p: someone else claimed my seat first, so hop back up
  if (code === 'seat-taken' && seat && mine()?.seat?.id === seat) { if (reader.active) reader.close(); standUp(); }
  if (code === 'seat-taken' && pendingBook?.libraryId) leaveBook(pendingBook.libraryId);
  if (code === 'seat-taken') pendingBook = null;
  if (code === 'book-taken') pendingTake = null;
  if (code === 'full' && joining && !current) joining = null;
});

// ---------------------------------------------------------------- HUD

function enterHud() {
  $('lobby').hidden = true;
  $('hud').hidden = false;
  const { room, theme } = current;
  $('roomBadge').textContent = `${room.emoji} ${room.name}`;
  $('nowPlaying').textContent = `🎵 ${theme.music.title}`;
  $('log').replaceChildren();
  $('standBtn').hidden = true;
  setStatus('');
  $('menuItems').replaceChildren(...roomMenu(room).map((item) => {
    const b = document.createElement('button');
    b.textContent = item;
    b.onclick = () => { net.send({ t: 'order', item }); closePanels(); };
    return b;
  }));
  const hint = $('hint');
  hint.classList.remove('gone');
  clearTimeout(hint.timer);
  hint.timer = setTimeout(() => hint.classList.add('gone'), 9000);
}

function updateCount() {
  if (current) $('peopleCount').textContent = current.avatars.size;
}

function sendEmoji(e) {
  if (current) net.send({ t: 'emoji', e });
}

$('emojiBar').replaceChildren(...QUICK.map((e, i) => {
  const b = document.createElement('button');
  b.textContent = e;
  b.title = i < 9 ? `${i + 1}` : '';
  b.onclick = () => sendEmoji(e);
  return b;
}), (() => {
  const more = document.createElement('button');
  more.className = 'more';
  more.textContent = '➕';
  more.onclick = () => togglePanel('emojiPanel');
  return more;
})());

$('emojiGrid').replaceChildren(...EMOJIS.map((e) => {
  const b = document.createElement('button');
  b.textContent = e;
  b.onclick = () => sendEmoji(e);
  return b;
}));

function togglePanel(id) {
  const el = $(id);
  const open = el.hidden;
  closePanels();
  el.hidden = !open;
}
function closePanels() {
  $('emojiPanel').hidden = true;
  $('menuPanel').hidden = true;
  $('suitcase').hidden = true;
}

$('menuBtn').onclick = () => togglePanel('menuPanel');

// ---------------------------------------------------------------- suitcase & reading

let pendingBook = null;

const reader = new Reader({
  camera,
  onChange: (st) => {
    $('pageLabel').textContent = st.label;
    $('prevPage').disabled = !st.canPrev || st.unfolded;
    $('nextPage').disabled = !st.canNext || st.unfolded;
    $('unfoldBtn').hidden = !st.unfold && !st.unfolded;
    $('unfoldBtn').textContent = st.unfolded ? '↩️' : st.unfold;
  },
  onClose: (ok) => {
    if (!ok) toast('📄❌');
    if (reader.book?.libraryId && current) leaveBook(reader.book.libraryId);
    $('readerBar').hidden = true;
    $('bagBtn').hidden = false;
    controls.enabled = view === 'overview';
    if (current) {
      const a = mine();
      if (a) a.group.visible = view === 'overview';
      $('standBtn').hidden = !a?.seat;
      net.send({ t: 'reading', on: false });
    }
  },
});

async function renderSuitcase() {
  const books = await listBooks();
  $('bookList').replaceChildren(...books.map((book) => {
    const b = document.createElement('button');
    b.className = 'book';
    b.style.setProperty('--leather', book.leather);
    b.title = book.name;
    const title = document.createElement('span');
    title.className = 'book-title';
    title.textContent = book.name;
    const meta = document.createElement('span');
    meta.className = 'book-meta';
    meta.textContent = `${book.pages} p${book.lastPage > 1 ? ` · 🔖 ${book.lastPage}` : ''}`;
    const remove = document.createElement('span');
    remove.className = 'book-remove';
    remove.textContent = '✕';
    remove.title = 'Take out of the suitcase';
    remove.onclick = async (e) => {
      e.stopPropagation();
      await removeBook(book.id);
      renderSuitcase();
    };
    b.append(title, meta, remove);
    b.onclick = () => startReading(book);
    return b;
  }));
  $('suitcase').classList.toggle('empty', books.length === 0);
}

async function addToSuitcase(files) {
  if (!files?.length) return;
  $('suitcase').classList.add('busy');
  const n = await addFiles([...files]);
  $('suitcase').classList.remove('busy');
  toast(n ? `📚 +${n}` : '📄❌');
  if (!$('suitcase').hidden) renderSuitcase();
}

$('bagBtn').onclick = () => {
  togglePanel('suitcase');
  if (!$('suitcase').hidden) renderSuitcase();
};
$('pdfInput').onchange = async (e) => {
  await addToSuitcase(e.target.files);
  e.target.value = '';
};
addEventListener('dragover', (e) => {
  if (current && [...e.dataTransfer.types].includes('Files')) e.preventDefault();
});
addEventListener('drop', async (e) => {
  if (!current || !e.dataTransfer.files.length) return;
  e.preventDefault();
  $('suitcase').hidden = false;
  await addToSuitcase(e.dataTransfer.files);
  renderSuitcase();
});

// prefer a leather armchair, then a sofa, then anything free; nearest first
const SEAT_PREFERENCE = { armchair: 0, sofa: 1, loveseat: 1 };
function findReadingSeat(a) {
  let best = null;
  let bestScore = Infinity;
  for (const s of current.world.seats.values()) {
    if (current.seatOwners.has(s.id)) continue;
    const type = current.room.layout[s.index].type;
    const score = (SEAT_PREFERENCE[type] ?? 2) * 100 + s.pos.distanceTo(a.position);
    if (score < bestScore) { bestScore = score; best = s; }
  }
  return best;
}

function startReading(book) {
  closePanels();
  const a = mine();
  if (!a || reader.active) return;
  pendingBook = book;
  if (a.seat || a.pendingSeat) return; // already sitting / on the way: opens once seated
  const seat = findReadingSeat(a);
  if (!seat) {
    if (book.libraryId) leaveBook(book.libraryId);
    pendingBook = null;
    toast('🪑❌');
    return;
  }
  net.send({ t: 'sit', seat: seat.id });
}

function beginReading(book) {
  const a = mine();
  const seat = a.seat;
  const fwd = new THREE.Vector3(Math.sin(seat.rot), 0, Math.cos(seat.rot));
  const eye = fp.eyeOf(a).addScaledVector(fwd, 0.06);
  document.activeElement?.blur?.(); // keys belong to the book now (not the volume slider or file picker)
  fp.keys.clear();
  controls.enabled = false;
  cursorRing.visible = false;
  a.group.visible = false; // we're looking out of these eyes now
  $('readerBar').hidden = false;
  $('standBtn').hidden = true;
  $('bagBtn').hidden = true;
  $('pageLabel').textContent = '…';
  $('unfoldBtn').hidden = true;
  net.send({ t: 'reading', on: true });
  reader.open(book, { handColor: me.color, skinColor: me.skin, eye, yaw: seat.rot });
}

$('prevPage').onclick = () => reader.turn(-1);
$('nextPage').onclick = () => reader.turn(1);
$('unfoldBtn').onclick = () => reader.toggleUnfold();
$('closeBook').onclick = () => reader.close();
$('leaveBtn').onclick = leaveRoom;
function standUp() {
  const a = mine();
  if (!a?.seat) return;
  const p = a.seat.approach;
  net.send({ t: 'move', x: p.x, z: p.z });
  a.moveTo(p.x, p.z);
  releaseSeat(current.myId);
}
$('standBtn').onclick = standUp;
$('camBtn').onclick = () => setView(view === 'first' ? 'overview' : 'first');

const vol = $('volume');
vol.value = store.get('volume', 0.6);
music.setVolume(Number(vol.value));
vol.oninput = () => { music.setVolume(Number(vol.value)); store.set('volume', Number(vol.value)); };
$('muteBtn').onclick = () => {
  music.setMuted(!music.muted);
  $('muteBtn').textContent = music.muted ? '🔇' : '🔊';
};

function log(id, text, arrival = false) {
  const a = current?.avatars.get(id);
  if (!a) return;
  const line = document.createElement('div');
  line.className = arrival ? 'line arrival' : 'line';
  const who = document.createElement('span');
  who.className = 'who';
  who.textContent = a.emoji;
  who.style.setProperty('--c', a.color);
  const what = document.createElement('span');
  what.textContent = text;
  line.append(who, what);
  const box = $('log');
  box.append(line);
  while (box.children.length > 7) box.firstChild.remove();
}

function setStatus(text) {
  const el = $('status');
  el.textContent = text;
  el.hidden = !text;
}

let toastTimer = 0;
function toast(text) {
  const el = $('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

addEventListener('keydown', (e) => {
  const typing = e.target instanceof HTMLInputElement && e.target.type !== 'file';
  if (!current || typing) return;
  if (reader.active && reader.key(e)) { e.preventDefault(); return; }
  if (e.key === 'Escape') closePanels();
  const n = Number(e.key);
  if (n >= 1 && n <= 9) sendEmoji(QUICK[n - 1]);
  if (fp.active && !reader.active && WALK_KEYS.has(e.code)) {
    fp.key(e.code, true);
    e.preventDefault();
  }
});
const WALK_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
addEventListener('keyup', (e) => fp.key(e.code, false));
addEventListener('blur', () => fp.keys.clear());

// ---------------------------------------------------------------- pointer

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let down = null;
let hoverEvent = null;

function hitTest(ev) {
  if (!current) return null;
  ndc.set((ev.clientX / innerWidth) * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  for (const h of raycaster.intersectObjects(current.world.pickables, false)) {
    if (!shown(h.object)) continue;
    if (h.object.userData.libraryBook) return { kind: 'library', id: h.object.userData.libraryBook, point: h.point };
    if (h.object.userData.furniture !== undefined) {
      const seat = chooseSeat(h.object.userData.furniture, h.point);
      return seat ? { kind: 'seat', seat } : { kind: 'taken', point: h.point };
    }
    if (h.object.userData.floor) return { kind: 'floor', point: h.point };
  }
  return null;
}

function shown(o) {
  for (let p = o; p; p = p.parent) if (!p.visible) return false;
  return true;
}

function chooseSeat(index, point) {
  let best = null;
  let bestD = Infinity;
  for (const s of current.world.seats.values()) {
    if (s.index !== index) continue;
    const owner = current.seatOwners.get(s.id);
    if (owner !== undefined && owner !== current.myId) continue;
    const dd = (s.pos.x - point.x) ** 2 + (s.pos.z - point.z) ** 2;
    if (dd < bestD) { bestD = dd; best = s; }
  }
  return best;
}

// event timestamps (not handler time) so a slow frame between down and up doesn't turn a click into a long-press
canvas.addEventListener('pointerdown', (e) => {
  if (reader.active) { closePanels(); reader.pointerDown(e); return; }
  down = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: e.timeStamp, drag: false };
  if (fp.active) canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (reader.active) { reader.pointerMove(e); return; }
  hoverEvent = e;
  if (!down || !fp.active) return;
  if (!down.drag && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) down.drag = true;
  if (down.drag) {
    fp.look(e.clientX - down.lx, e.clientY - down.ly);
    canvas.style.cursor = 'grabbing';
  }
  down.lx = e.clientX;
  down.ly = e.clientY;
});
canvas.addEventListener('dblclick', (e) => reader.doubleClick(e));
canvas.addEventListener('wheel', (e) => { if (reader.active) { e.preventDefault(); reader.wheel(e); } }, { passive: false });
canvas.addEventListener('pointerleave', () => { hoverEvent = null; cursorRing.visible = false; });
canvas.addEventListener('pointerup', (e) => {
  if (reader.active) { reader.pointerUp(e); return; }
  if (!down) return;
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  const quick = e.timeStamp - down.t < 1500; // drags are caught by movement; this only rules out deliberate long holds
  const dragged = down.drag;
  down = null;
  canvas.style.cursor = '';
  if (dragged || moved > 6 || !quick || !current) return;
  closePanels();
  const hit = hitTest(e);
  if (!hit) return;
  const a = mine();
  if (hit.kind === 'library') {
    fp.auto = null;
    takeBook(hit.id);
  } else if (hit.kind === 'seat') {
    if (a?.seat?.id === hit.seat.id) return;
    fp.auto = null;
    net.send({ t: 'sit', seat: hit.seat.id });
    pulseAt(hit.seat.pos);
  } else if (hit.kind === 'taken') {
    toast('🪑❌');
  } else {
    const { hw, hd } = current.world.bounds;
    const x = THREE.MathUtils.clamp(hit.point.x, -hw, hw);
    const z = THREE.MathUtils.clamp(hit.point.z, -hd, hd);
    pulseAt(new THREE.Vector3(x, 0, z));
    if (fp.active) {
      fp.walkTo(x, z); // walked step by step (around furniture) in the loop below
    } else {
      net.send({ t: 'move', x, z });
      a?.moveTo(x, z);
      releaseSeat(current.myId);
    }
  }
});

function pulseAt(p) {
  clickPulse.position.set(p.x, p.y + 0.03, p.z);
  pulseT = 0;
}

function updateHover() {
  if (!hoverEvent || !current || down || reader.active) { cursorRing.visible = false; canvas.style.cursor = ''; return; }
  const hit = hitTest(hoverEvent);
  hoverLibrary(hit?.kind === 'library' ? hit.id : null);
  if (!hit) { cursorRing.visible = false; canvas.style.cursor = ''; return; }
  if (hit.kind === 'library') { cursorRing.visible = false; canvas.style.cursor = 'pointer'; return; }
  canvas.style.cursor = hit.kind === 'taken' ? 'not-allowed' : 'pointer';
  const p = hit.kind === 'seat' ? hit.seat.pos : hit.point;
  cursorRing.visible = hit.kind !== 'taken';
  cursorRing.position.set(p.x, p.y + 0.03, p.z);
  cursorRing.material.color.set(hit.kind === 'seat' ? '#ffd27a' : '#fff4e0');
  cursorRing.scale.setScalar(hit.kind === 'seat' ? 1.25 : 1);
}

// books you can borrow lift a little and say their title when you point at them
let hovered = null;
function hoverLibrary(id) {
  if (hovered === id) return;
  const lift = (bookId, k) => {
    const lib = current?.world.library.get(bookId);
    if (lib) lib.mesh.scale.setScalar(k);
    const lying = current?.leftMeshes.get(bookId);
    if (lying) lying.scale.setScalar(k);
  };
  if (hovered) lift(hovered, 1);
  hovered = id;
  if (id) lift(id, 1.08);
  canvas.title = id ? `${CATALOG[id].title} · ${CATALOG[id].magazine ? 'magazine' : CATALOG[id].author}` : '';
}

// ---------------------------------------------------------------- loop

let last = performance.now();
let clock = 0;
let hoverAcc = 0;

function simulate(dt) {
  clock += dt;
  const t = clock;
  const active = current || preview;
  if (active) active.world.update(dt, t, camera);

  if (current) {
    for (const a of current.avatars.values()) a.update(dt, t);
    current.waiter?.update(dt, t, current.avatars, deliver);
    current.maid?.update(dt, t);
    current.fx.update(dt);
    const a = mine();
    if (fp.active && !reader.active && a) walk(fp.update(dt, t, a, current.world), a);
    if (pendingBook && a?.seat && a.state === 'sitting') {
      beginReading(pendingBook);
      pendingBook = null;
    }
    const { hw, hd } = current.world.bounds;
    controls.target.x = THREE.MathUtils.clamp(controls.target.x, -hw - 2, hw + 2);
    controls.target.z = THREE.MathUtils.clamp(controls.target.z, -hd - 2, hd + 2);
    controls.target.y = THREE.MathUtils.clamp(controls.target.y, 0, 3);
    hoverAcc += dt;
    if (hoverAcc > 0.05) { hoverAcc = 0; updateHover(); }
  }

  if (pulseT < 1) {
    pulseT = Math.min(1, pulseT + dt * 2.2);
    clickPulse.visible = pulseT < 1;
    clickPulse.scale.setScalar(0.6 + pulseT * 1.4);
    clickPulse.material.opacity = 0.9 * (1 - pulseT);
  }
  if (reader.active) reader.update(dt, clock);
  else if (!fp.active) controls.update(dt);
}

// First-person steps move our avatar locally; others get our position ten times a second.
const stream = { walking: false, at: 0, x: 0, z: 0 };
function walk(step, a) {
  if (step?.standUp) {
    if (a.seat || a.pendingSeat || a.state === 'hopIn') {
      const p = a.seat ? a.seat.approach : a.pos;
      net.send({ t: 'move', x: p.x, z: p.z });
      a.moveTo(p.x, p.z); // hops up out of the seat (or stops heading for one)
      releaseSeat(current.myId);
    }
  } else if (step) {
    a.drive(step.x, step.z, step.moving);
    stream.walking = true;
    if (clock - stream.at > 0.1 && Math.hypot(step.x - stream.x, step.z - stream.z) > 0.03) {
      net.send({ t: 'move', x: step.x, z: step.z });
      Object.assign(stream, { at: clock, x: step.x, z: step.z });
    }
  } else if (stream.walking) {
    stream.walking = false;
    net.send({ t: 'move', x: a.pos.x, z: a.pos.z });
    Object.assign(stream, { at: clock, x: a.pos.x, z: a.pos.z });
  }
}

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  simulate(dt);
  adaptQuality(dt);
  const world = (current || preview)?.world;
  if (world?.shadowsDirty) {
    renderer.shadowMap.needsUpdate = true;
    world.shadowsDirty = false;
  }
  renderer.render(scene, camera);
}

renderLobby();
showLobby();
requestAnimationFrame(frame);
