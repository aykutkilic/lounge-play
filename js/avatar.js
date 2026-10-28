import * as THREE from 'three';
import { emojiTexture, bubbleTexture, hashString } from './textures.js';
import { mat, rbox, sphere, softDot } from './furniture.js';
import { ITEMS, ITEM_LIFETIME } from './shared.js';

const WALK_SPEED = 2.6;
const SIT_DROP = 0.27; // how far below the seat surface the avatar's origin sits

function sprite(map, size, { depthTest = true, opacity = 1 } = {}) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map, transparent: true, depthWrite: false, depthTest, opacity }));
  s.scale.set(size, size, 1);
  return s;
}

function easeOutBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2;
}

function angleLerp(a, b, t) {
  let diff = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (diff < -Math.PI) diff += Math.PI * 2;
  return a + diff * t;
}

// ---------------------------------------------------------------- floating fx

export class Fx {
  constructor(parent) {
    this.parent = parent;
    this.items = [];
  }

  burst(e, at, count = 4) {
    for (let i = 0; i < count; i++) {
      const s = sprite(emojiTexture(e), 0.3, { depthTest: false });
      s.renderOrder = 20;
      s.position.copy(at);
      this.parent.add(s);
      this.items.push({ s, t: -i * 0.12, life: 1.8, vx: (Math.random() - 0.5) * 0.8, vz: (Math.random() - 0.5) * 0.8, vy: 1.1 + Math.random() * 0.6 });
    }
  }

  update(dt) {
    this.items = this.items.filter((it) => {
      it.t += dt;
      if (it.t < 0) { it.s.visible = false; return true; }
      it.s.visible = true;
      const k = it.t / it.life;
      if (k >= 1) { this.parent.remove(it.s); it.s.material.dispose(); return false; }
      it.s.position.x += it.vx * dt;
      it.s.position.z += it.vz * dt;
      it.s.position.y += it.vy * dt * (1 - k);
      const sz = 0.3 * (k < 0.15 ? k / 0.15 : 1);
      it.s.scale.set(sz, sz, 1);
      it.s.material.opacity = k > 0.6 ? 1 - (k - 0.6) / 0.4 : 1;
      return true;
    });
  }

  clear() {
    for (const it of this.items) { this.parent.remove(it.s); it.s.material.dispose(); }
    this.items = [];
  }
}

// ---------------------------------------------------------------- avatar

export class Avatar {
  constructor(peer, { isMe, serverNow }) {
    this.id = peer.id;
    this.phase = (hashString(String(peer.id)) % 1000) / 100; // ids are numbers (server) or strings (p2p)
    this.emoji = peer.avatar;
    this.color = peer.color;
    this.isMe = isMe;
    this.serverNow = serverNow;
    this.group = new THREE.Group();
    this.rig = new THREE.Group(); // everything that bobs / sits
    this.group.add(this.rig);

    const bodyM = mat(peer.color, { roughness: 0.75 });
    const bellyM = mat(new THREE.Color(peer.color).lerp(new THREE.Color('#ffffff'), 0.45).getStyle(), { roughness: 0.85 });
    const footM = mat(new THREE.Color(peer.color).multiplyScalar(0.6).getStyle(), { roughness: 0.8 });

    this.body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.42, 8, 16), bodyM);
    this.body.position.y = 0.61;
    this.body.castShadow = true;
    this.rig.add(this.body);
    const belly = sphere(0.2, bellyM, 0, 0.55, 0.15, 16);
    belly.scale.set(1, 1.25, 0.55);
    this.rig.add(belly);

    this.feet = [-1, 1].map((s) => {
      const f = sphere(0.09, footM, s * 0.13, 0.08, 0.06, 12);
      f.scale.set(1, 0.7, 1.4);
      this.rig.add(f);
      return f;
    });
    this.arms = [-1, 1].map((s) => {
      const pivot = new THREE.Group();
      pivot.position.set(s * 0.29, 0.82, 0);
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.22, 4, 8), bodyM);
      arm.position.y = -0.15;
      arm.castShadow = true;
      pivot.add(arm);
      pivot.rotation.z = s * 0.25;
      this.rig.add(pivot);
      return pivot;
    });

    this.head = sprite(emojiTexture(peer.avatar), 0.82);
    this.head.position.y = 1.38;
    this.rig.add(this.head);

    if (isMe) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.42, 0.5, 40),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(peer.color).multiplyScalar(1.6), transparent: true, opacity: 0.85, depthWrite: false }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.02;
      this.group.add(ring);
      this.ring = ring;
    }

    this.items = { drink: null, snack: null };
    this.steam = [];
    for (let i = 0; i < 3; i++) {
      const s = sprite(softDot(), 0.1, { opacity: 0 });
      s.material.color.set('#ffffff');
      s.visible = false;
      this.rig.add(s);
      this.steam.push({ s, p: i / 3 });
    }

    this.pos = new THREE.Vector3(peer.x, 0, peer.z);
    this.target = this.pos.clone();
    this.yaw = Math.random() * Math.PI * 2;
    this.state = 'idle';
    this.seat = null;
    this.pendingSeat = null;
    this.hop = null;
    this.walkPhase = 0;
    this.jump = 0;
    this.sipPhase = Math.random() * 10;
    this.bubble = null;
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
  }

  get position() { return this.group.position; }

  moveTo(x, z) {
    this.pendingSeat = null;
    if (this.state === 'sitting' || this.state === 'hopIn') this.standUp();
    this.target.set(x, 0, z);
    if (this.state !== 'hopOut') this.state = 'walk';
  }

  sitAt(seat, instant = false) {
    this.pendingSeat = seat;
    if (instant) {
      this.seat = seat;
      this.pendingSeat = null;
      this.pos.copy(seat.approach);
      this.state = 'sitting';
      this.yaw = seat.rot;
      this.applySeatPose(1);
      return;
    }
    if (this.state === 'sitting' || this.state === 'hopIn') this.standUp();
    this.target.copy(seat.approach);
    if (this.state !== 'hopOut') this.state = 'walk';
  }

  standUp() {
    if (!this.seat) return;
    this.hop = { from: this.group.position.clone(), to: this.seat.approach.clone(), t: 0, dur: 0.3 };
    this.pos.copy(this.seat.approach);
    this.seat = null;
    this.state = 'hopOut';
  }

  applySeatPose(k) {
    const seat = this.seat;
    const p = new THREE.Vector3().lerpVectors(seat.approach, seat.pos, k);
    p.y = THREE.MathUtils.lerp(0, seat.pos.y - SIT_DROP, k) + Math.sin(k * Math.PI) * 0.25;
    this.group.position.copy(p);
    this.group.rotation.y = this.yaw;
    for (const [i, f] of this.feet.entries()) {
      f.position.z = THREE.MathUtils.lerp(0.06, 0.32, k);
      f.position.y = THREE.MathUtils.lerp(0.08, 0.2, k);
      f.position.x = (i ? 1 : -1) * 0.13;
    }
  }

  say(text) {
    const now = performance.now();
    if (this.bubble && now - this.bubble.born < 3000 && this.bubble.chars.length < 5) {
      this.bubble.chars.push(text);
      this.bubble.born = now;
    } else {
      this.clearBubble();
      this.bubble = { chars: [text], born: now, sprite: null };
    }
    const { tex, aspect } = bubbleTexture(this.bubble.chars.join(''));
    if (this.bubble.sprite) {
      this.bubble.sprite.material.map.dispose();
      this.bubble.sprite.material.map = tex;
    } else {
      this.bubble.sprite = sprite(tex, 1, { depthTest: false });
      this.bubble.sprite.renderOrder = 30;
      this.rig.add(this.bubble.sprite);
    }
    this.bubble.aspect = aspect;
    this.jump = 1;
  }

  clearBubble() {
    if (!this.bubble) return;
    if (this.bubble.sprite) {
      this.rig.remove(this.bubble.sprite);
      this.bubble.sprite.material.map.dispose();
      this.bubble.sprite.material.dispose();
    }
    this.bubble = null;
  }

  setItem(kind, item, at) {
    this.removeItem(kind);
    const s = sprite(emojiTexture(item), 0.34);
    s.position.set(kind === 'drink' ? 0.36 : -0.36, 0.62, 0.22);
    this.rig.add(s);
    this.items[kind] = { sprite: s, item, at: at ?? this.serverNow(), hot: !!ITEMS[item]?.hot, pop: 0 };
  }

  removeItem(kind) {
    const it = this.items[kind];
    if (!it) return;
    this.rig.remove(it.sprite);
    it.sprite.material.dispose();
    this.items[kind] = null;
  }

  setReading(on) {
    this.reading = !!on;
    if (on && !this.book) {
      const leather = mat('#6b3a2a', { roughness: 0.6 });
      const paper = mat('#f3ead6', { roughness: 0.9 });
      const book = new THREE.Group();
      for (const side of [-1, 1]) {
        const half = new THREE.Group();
        half.add(rbox(0.16, 0.012, 0.2, leather, side * 0.08, 0, 0, 0.004));
        half.add(rbox(0.15, 0.012, 0.19, paper, side * 0.075, 0.01, 0, 0.003));
        half.rotation.z = side * -0.25;
        book.add(half);
      }
      book.position.set(0, 0.68, 0.3);
      book.rotation.x = -0.9;
      this.rig.add(book);
      this.book = book;
      // the book can hide behind the body, so also float a little 📖 over the head
      this.readIcon = sprite(emojiTexture('📖'), 0.3);
      this.readIcon.position.set(0, 1.95, 0);
      this.rig.add(this.readIcon);
    }
    if (this.book) this.book.visible = this.readIcon.visible = this.reading;
  }

  handPosition(kind, out = new THREE.Vector3()) {
    out.set(kind === 'drink' ? 0.36 : -0.36, 0.62, 0.22);
    return this.rig.localToWorld(out);
  }

  update(dt, t) {
    // ---- locomotion
    if (this.state === 'hopOut') {
      this.hop.t += dt / this.hop.dur;
      const k = Math.min(1, this.hop.t);
      this.group.position.lerpVectors(this.hop.from, this.hop.to, k);
      this.group.position.y = this.hop.from.y * (1 - k) + Math.sin(k * Math.PI) * 0.25;
      for (const f of this.feet) { f.position.z = 0.06; f.position.y = 0.08; }
      if (k >= 1) {
        this.group.position.y = 0;
        this.state = this.pendingSeat || this.target.distanceTo(this.pos) > 0.05 ? 'walk' : 'idle';
      }
    } else if (this.state === 'walk') {
      const to = this.target;
      const dx = to.x - this.pos.x;
      const dz = to.z - this.pos.z;
      const dist = Math.hypot(dx, dz);
      const step = WALK_SPEED * dt;
      if (dist <= step) {
        this.pos.copy(to);
        if (this.pendingSeat) {
          this.seat = this.pendingSeat;
          this.pendingSeat = null;
          this.hop = { t: 0 };
          this.state = 'hopIn';
        } else {
          this.state = 'idle';
        }
      } else {
        this.pos.x += (dx / dist) * step;
        this.pos.z += (dz / dist) * step;
        this.yaw = angleLerp(this.yaw, Math.atan2(dx, dz), Math.min(1, dt * 10));
      }
      this.walkPhase += dt * 11;
      this.group.position.set(this.pos.x, Math.abs(Math.sin(this.walkPhase)) * 0.07, this.pos.z);
      this.group.rotation.y = this.yaw;
      this.feet[0].position.z = 0.06 + Math.sin(this.walkPhase) * 0.12;
      this.feet[1].position.z = 0.06 - Math.sin(this.walkPhase) * 0.12;
      for (const f of this.feet) f.position.y = 0.08;
      this.arms[0].rotation.x = -Math.sin(this.walkPhase) * 0.5;
      this.arms[1].rotation.x = Math.sin(this.walkPhase) * 0.5;
      this.rig.rotation.z = Math.sin(this.walkPhase) * 0.04;
    } else if (this.state === 'hopIn') {
      this.hop.t += dt / 0.35;
      const k = Math.min(1, this.hop.t);
      this.yaw = angleLerp(this.yaw, this.seat.rot, Math.min(1, dt * 14));
      this.applySeatPose(k);
      if (k >= 1) { this.yaw = this.seat.rot; this.state = 'sitting'; }
    } else if (this.state === 'sitting') {
      this.applySeatPose(1);
    } else {
      this.group.position.set(this.pos.x, 0, this.pos.z);
      for (const f of this.feet) { f.position.z = 0.06; f.position.y = 0.08; }
    }
    if (this.state !== 'walk') {
      this.rig.rotation.z *= 0.9;
      for (const a of this.arms) a.rotation.x *= 0.85;
    }

    // ---- idle life: breathing, emoji hop
    this.body.scale.y = 1 + Math.sin(t * 2.2 + this.phase) * 0.02;
    this.jump = Math.max(0, this.jump - dt * 3);
    this.rig.position.y = Math.sin((1 - this.jump) * Math.PI) * this.jump * 0.18;
    this.head.position.y = 1.38 + Math.sin(t * 2.2 + this.phase) * 0.012;

    // ---- held items: sip / nibble now and then
    this.sipPhase += dt;
    const cycle = this.sipPhase % 7;
    for (const kind of ['drink', 'snack']) {
      const it = this.items[kind];
      const arm = this.arms[kind === 'drink' ? 1 : 0];
      if (!it) continue;
      it.pop = Math.min(1, it.pop + dt * 3);
      const lift = kind === 'drink' ? (cycle < 1.2 ? Math.sin((cycle / 1.2) * Math.PI) : 0) : (cycle > 3.5 && cycle < 4.5 ? Math.sin(((cycle - 3.5) / 1) * Math.PI) : 0);
      const side = kind === 'drink' ? 1 : -1;
      it.sprite.position.set(side * (0.36 - lift * 0.22), 0.62 + lift * 0.5, 0.22 + lift * 0.1);
      const progress = Math.min(1, (this.serverNow() - it.at) / ITEM_LIFETIME[kind]);
      const size = 0.34 * easeOutBack(it.pop) * (kind === 'snack' ? 1 - progress * 0.55 : 1);
      it.sprite.scale.set(size, size, 1);
      arm.rotation.x = -0.9 - lift * 0.9;
    }
    if (this.reading) {
      for (const a of this.arms) a.rotation.x = -1.15;
      this.readIcon.position.y = 1.95 + Math.sin(t * 1.8 + this.phase) * 0.04;
    }

    const drink = this.items.drink;
    for (const st of this.steam) {
      st.s.visible = !!(drink && drink.hot);
      if (!st.s.visible) continue;
      st.p = (st.p + dt * 0.6) % 1;
      st.s.position.set(drink.sprite.position.x + Math.sin(t * 3 + st.p * 6) * 0.03, drink.sprite.position.y + 0.15 + st.p * 0.35, drink.sprite.position.z);
      const sz = 0.05 + st.p * 0.12;
      st.s.scale.set(sz, sz, 1);
      st.s.material.opacity = Math.sin(st.p * Math.PI) * 0.35;
    }

    // ---- speech bubble
    if (this.bubble) {
      const age = (performance.now() - this.bubble.born) / 1000;
      if (age > 5.5) {
        this.clearBubble();
      } else {
        const s = this.bubble.sprite;
        const pop = easeOutBack(Math.min(1, age / 0.25));
        const h = 0.5 * pop;
        s.scale.set(h * this.bubble.aspect, h, 1);
        s.position.y = 2.05 + Math.min(age, 1) * 0.05;
        s.material.opacity = age > 4.5 ? 1 - (age - 4.5) : 1;
      }
    }

    if (this.ring) this.ring.material.opacity = 0.6 + Math.sin(t * 3) * 0.25;
  }

  dispose() {
    this.clearBubble();
    this.group.traverse((o) => {
      if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
      if (o.material && !o.material.userData.shared) o.material.dispose();
    });
  }
}

// ---------------------------------------------------------------- robot waiter

function robotFace(happy) {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = '#1d2733';
  g.beginPath(); g.roundRect(4, 4, 120, 88, 22); g.fill();
  g.strokeStyle = '#7ff3e1';
  g.fillStyle = '#7ff3e1';
  g.lineWidth = 7;
  g.lineCap = 'round';
  if (happy) {
    for (const x of [40, 88]) { g.beginPath(); g.arc(x, 48, 12, Math.PI * 1.1, Math.PI * 1.9); g.stroke(); }
  } else {
    for (const x of [40, 88]) { g.beginPath(); g.ellipse(x, 42, 8, 11, 0, 0, Math.PI * 2); g.fill(); }
  }
  g.beginPath(); g.arc(64, 60, 12, Math.PI * 0.15, Math.PI * 0.85); g.stroke();
  g.fillStyle = 'rgba(255,140,170,0.6)';
  g.beginPath(); g.arc(22, 64, 7, 0, Math.PI * 2); g.arc(106, 64, 7, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Waiter {
  constructor(info, fx) {
    this.info = info;
    this.fx = fx;
    this.group = new THREE.Group();
    const shell = mat('#f4f1ea', { roughness: 0.35 });
    const accent = mat('#2a9d8f', { roughness: 0.5 });
    const rig = new THREE.Group();
    this.rig = rig;
    this.group.add(rig);
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.3, 8, 16), shell);
    body.position.y = 0.72;
    body.castShadow = true;
    rig.add(body);
    rig.add(rbox(0.56, 0.06, 0.4, accent, 0, 0.92, 0.0, 0.03));
    const head = rbox(0.56, 0.42, 0.44, shell, 0, 1.3, 0, 0.12);
    rig.add(head);
    this.faces = [robotFace(false), robotFace(true)];
    this.screen = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.33), new THREE.MeshBasicMaterial({ map: this.faces[0] }));
    this.screen.position.set(0, 1.3, 0.225);
    rig.add(this.screen);
    rig.add(sphere(0.012, accent, 0, 1.6, 0, 6));
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.18, 6), accent);
    antenna.position.y = 1.6;
    rig.add(antenna);
    this.bulb = sphere(0.045, new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff7aa2').multiplyScalar(3) }), 0, 1.71, 0, 10);
    rig.add(this.bulb);
    const glowRing = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.3, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color('#7ff3e1').multiplyScalar(1.5), transparent: true, opacity: 0.45, depthWrite: false }));
    glowRing.rotation.x = -Math.PI / 2;
    glowRing.position.y = 0.03;
    this.group.add(glowRing);
    // tray arm
    const tray = new THREE.Group();
    tray.position.set(0.3, 0.95, 0.3);
    const trayDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.025, 24), mat('#c9a66b', { metalness: 0.6, roughness: 0.3 }));
    trayDisc.castShadow = true;
    tray.add(trayDisc);
    rig.add(tray);
    this.tray = tray;
    this.trayItem = sprite(emojiTexture('☕'), 0.3);
    this.trayItem.position.y = 0.17;
    this.trayItem.visible = false;
    tray.add(this.trayItem);

    this.pos = info.home.clone();
    this.yaw = info.homeYaw;
    this.queue = [];
    this.task = null;
    this.path = [];
    this.state = 'idle';
    this.timer = 0;
    this.group.position.copy(this.pos);
  }

  enqueue(order) {
    this.queue.push(order);
  }

  cancelFor(id) {
    this.queue = this.queue.filter((o) => o.id !== id);
    if (this.task && this.task.id === id) this.task.cancelled = true;
  }

  setFace(happy) {
    this.screen.material.map = this.faces[happy ? 1 : 0];
  }

  goHome() {
    this.path = [this.info.via[1], this.info.via[0], this.info.home].map((v) => v.clone());
    this.state = 'returning';
  }

  // avatars: Map id -> Avatar; deliver(order) is called on hand-off
  update(dt, t, avatars, deliver) {
    this.rig.position.y = 0.06 + Math.sin(t * 2.4) * 0.04;
    this.bulb.visible = Math.sin(t * 4) > -0.3;

    if (this.state === 'idle' || this.state === 'returning') {
      if (this.queue.length) {
        this.task = this.queue.shift();
        this.trayItem.material.map = emojiTexture(this.task.item);
        this.trayItem.visible = false;
        this.timer = 0;
        // already out on the floor? skip the brewing pause and go straight over
        this.state = this.pos.distanceTo(this.info.home) < 0.3 ? 'brewing' : 'delivering';
        if (this.state === 'delivering') { this.trayItem.visible = true; this.path = []; }
      }
    }

    let moveTarget = null;
    if (this.state === 'brewing') {
      this.timer += dt;
      this.yaw = angleLerp(this.yaw, this.info.homeYaw + Math.sin(this.timer * 18) * 0.15, Math.min(1, dt * 10));
      if (this.timer > 1.1) {
        this.trayItem.visible = true;
        this.state = 'delivering';
        this.path = [this.info.via[0].clone(), this.info.via[1].clone()];
      }
    } else if (this.state === 'delivering') {
      const target = avatars.get(this.task.id);
      if (!target || this.task.cancelled) {
        this.trayItem.visible = false;
        this.task = null;
        this.goHome();
      } else if (this.path.length) {
        moveTarget = this.path[0];
      } else {
        const tp = target.position;
        const toMe = new THREE.Vector3(this.pos.x - tp.x, 0, this.pos.z - tp.z);
        const dist = toMe.length();
        if (dist < 0.95) {
          this.state = 'handoff';
          this.timer = 0;
          this.setFace(true);
        } else {
          moveTarget = new THREE.Vector3(tp.x, 0, tp.z).addScaledVector(toMe.normalize(), 0.8);
        }
      }
    } else if (this.state === 'handoff') {
      this.timer += dt;
      const target = avatars.get(this.task.id);
      if (target) {
        const tp = target.position;
        this.yaw = angleLerp(this.yaw, Math.atan2(tp.x - this.pos.x, tp.z - this.pos.z), Math.min(1, dt * 8));
        const k = Math.min(1, this.timer / 0.45);
        const from = this.tray.localToWorld(new THREE.Vector3(0, 0.17, 0));
        const to = target.handPosition(this.task.kind);
        const p = from.lerp(to, k);
        p.y += Math.sin(k * Math.PI) * 0.4;
        this.trayItem.position.copy(this.tray.worldToLocal(p));
      }
      if (this.timer > 0.45) {
        this.trayItem.visible = false;
        this.trayItem.position.set(0, 0.17, 0);
        if (target && !this.task.cancelled) {
          deliver(this.task);
          this.fx.burst('✨', target.position.clone().setY(1.9), 2);
        }
        this.task = null;
        this.state = 'pause';
        this.timer = 0;
      }
    } else if (this.state === 'pause') {
      this.timer += dt;
      if (this.timer > 0.6) {
        this.setFace(false);
        if (this.queue.length) this.state = 'idle';
        else this.goHome();
      }
    } else if (this.state === 'returning') {
      if (this.path.length) moveTarget = this.path[0];
      else {
        this.state = 'idle';
      }
    } else if (this.state === 'idle') {
      this.yaw = angleLerp(this.yaw, this.info.homeYaw + Math.sin(t * 0.3) * 0.5, Math.min(1, dt * 2));
    }

    if (moveTarget) {
      const dx = moveTarget.x - this.pos.x;
      const dz = moveTarget.z - this.pos.z;
      const dist = Math.hypot(dx, dz);
      const step = 3.0 * dt;
      if (dist <= step) {
        this.pos.set(moveTarget.x, 0, moveTarget.z);
        if (this.path.length && this.path[0] === moveTarget) this.path.shift();
      } else {
        this.pos.x += (dx / dist) * step;
        this.pos.z += (dz / dist) * step;
        this.yaw = angleLerp(this.yaw, Math.atan2(dx, dz), Math.min(1, dt * 8));
      }
      this.rig.rotation.x = 0.12;
    } else {
      this.rig.rotation.x *= 0.9;
    }
    this.group.position.set(this.pos.x, 0, this.pos.z);
    this.group.rotation.y = this.yaw;
  }

  dispose() {
    this.faces.forEach((f) => f.dispose());
    this.group.traverse((o) => {
      if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
      if (o.material && !o.material.userData.shared) o.material.dispose();
    });
  }
}
