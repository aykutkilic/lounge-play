import * as THREE from 'three';
import { emojiTexture } from './textures.js';
import { softDot } from './furniture.js';
import { ITEMS } from './shared.js';

// Seeing the lounge through your own eyes: drag to look around, WASD / arrows
// (or click the floor) to walk, with a little collision so you go around the
// furniture instead of through it. Your drink and snack sit at the bottom of
// your view and get sipped / nibbled.

const SPEED = 2.4; // a touch under the avatar walk speed so other people's view of us keeps up
const STAND_EYE = 1.45;
const SIT_EYE = 0.62; // above the seat surface
const FOV = 70;
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2);

function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export class FirstPerson {
  constructor(camera) {
    this.camera = camera;
    this.active = false;
    this.yaw = Math.PI; // the direction we face, avatar convention: forward = (sin yaw, cos yaw)
    this.pitch = -0.06;
    this.keys = new Set();
    this.auto = null;
    this.eyeY = STAND_EYE;
    this.blend = 1;
    this.lastSeat = null;

    // held items, in camera space
    this.held = {};
    for (const [kind, x] of [['drink', 0.2], ['snack', -0.2]]) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false }));
      s.visible = false;
      s.renderOrder = 10;
      camera.add(s);
      this.held[kind] = { sprite: s, x, item: null };
    }
    this.steam = Array.from({ length: 3 }, (_, i) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDot(), transparent: true, depthWrite: false, opacity: 0 }));
      s.visible = false;
      camera.add(s);
      return { s, p: i / 3 };
    });
  }

  enter(yaw) {
    this.active = true;
    this.yaw = yaw;
    this.pitch = -0.06;
    this.auto = null;
    this.keys.clear();
    this.fromPos = this.camera.position.clone();
    this.fromQuat = this.camera.quaternion.clone();
    this.fromFov = this.camera.fov;
    this.blend = 0;
    this.lastSeat = null;
  }

  exit() {
    this.active = false;
    this.keys.clear();
    this.auto = null;
    for (const h of Object.values(this.held)) h.sprite.visible = false;
    for (const st of this.steam) st.s.visible = false;
  }

  look(dx, dy) {
    this.yaw -= dx * 0.0045;
    this.pitch = THREE.MathUtils.clamp(this.pitch - dy * 0.0045, -1.25, 1.1);
    this.lastSeat = this.lastSeat && { ...this.lastSeat, turned: true }; // the user took over
  }

  key(code, down) {
    if (down) this.keys.add(code);
    else this.keys.delete(code);
  }

  walkTo(x, z) {
    this.auto = new THREE.Vector2(x, z);
  }

  // Where the eyes are: standing height, or just above the seat when sitting.
  eye(avatar, out = new THREE.Vector3()) {
    const seat = avatar.seat;
    const y = seat && avatar.state !== 'hopOut' ? seat.pos.y + SIT_EYE : STAND_EYE;
    return out.set(avatar.group.position.x, y, avatar.group.position.z);
  }

  // Returns the position the player wants to step to this frame (or null).
  update(dt, t, avatar, world) {
    if (!this.active || !avatar) return null;
    const k = this.keys;
    const fwd = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    const side = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    const turn = (k.has('ArrowLeft') || k.has('KeyQ') ? 1 : 0) - (k.has('ArrowRight') || k.has('KeyE') ? 1 : 0);
    this.yaw += turn * dt * 1.9;

    let step = null;
    let dx = 0;
    let dz = 0;
    if (fwd || side) {
      this.auto = null;
      dx = Math.sin(this.yaw) * fwd - Math.cos(this.yaw) * side;
      dz = Math.cos(this.yaw) * fwd + Math.sin(this.yaw) * side;
    } else if (this.auto) {
      dx = this.auto.x - avatar.pos.x;
      dz = this.auto.y - avatar.pos.z;
      if (Math.hypot(dx, dz) < 0.1) this.auto = null;
    }
    const len = Math.hypot(dx, dz);
    if (len > 1e-4 && (fwd || side || this.auto)) {
      const dist = Math.min(SPEED * dt, this.auto && !(fwd || side) ? len : Infinity);
      const [x, z] = world.resolve(avatar.pos.x + (dx / len) * dist, avatar.pos.z + (dz / len) * dist);
      // walking into furniture on autopilot: give up rather than grind against it
      if (this.auto && Math.hypot(x - avatar.pos.x, z - avatar.pos.z) < dist * 0.15) this.auto = null;
      else step = { x, z };
    }

    // once seated, turn to face the same way as the seat (unless the user is looking around)
    const seat = avatar.seat;
    if (seat && avatar.state === 'sitting') {
      if (this.lastSeat?.id !== seat.id) this.lastSeat = { id: seat.id, turned: false };
      if (!this.lastSeat.turned) {
        this.yaw = angleLerp(this.yaw, seat.rot, Math.min(1, dt * 4));
        this.pitch += (-0.12 - this.pitch) * Math.min(1, dt * 4);
      }
    } else if (!seat) {
      this.lastSeat = null;
    }

    // camera
    const target = this.eye(avatar);
    this.eyeY += (target.y - this.eyeY) * Math.min(1, dt * 6);
    target.y = this.eyeY + (avatar.state === 'walk' ? avatar.group.position.y * 0.6 : 0); // a little head bob
    const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(this.pitch, this.yaw + Math.PI, 0, 'YXZ'));
    const cam = this.camera;
    if (this.blend < 1) {
      this.blend = Math.min(1, this.blend + dt / 1.1);
      const e = ease(this.blend);
      cam.position.lerpVectors(this.fromPos, target, e);
      cam.quaternion.slerpQuaternions(this.fromQuat, quat, e);
      cam.fov = THREE.MathUtils.lerp(this.fromFov, FOV, e);
    } else {
      cam.position.copy(target);
      cam.quaternion.copy(quat);
      cam.fov = FOV;
    }
    cam.updateProjectionMatrix();

    this.updateHeld(dt, t, avatar);
    return step;
  }

  updateHeld(dt, t, avatar) {
    const cycle = avatar.sipPhase % 7;
    for (const [kind, h] of Object.entries(this.held)) {
      const it = avatar.items[kind];
      h.sprite.visible = !!it;
      if (!it) continue;
      if (h.item !== it.item) {
        h.sprite.material.map = emojiTexture(it.item);
        h.sprite.material.needsUpdate = true;
        h.item = it.item;
      }
      const lift = kind === 'drink'
        ? (cycle < 1.2 ? Math.sin((cycle / 1.2) * Math.PI) : 0)
        : (cycle > 3.5 && cycle < 4.5 ? Math.sin((cycle - 3.5) * Math.PI) : 0);
      const size = 0.1 * (it.sprite.scale.x / 0.34);
      h.sprite.scale.set(size, size, 1);
      h.sprite.position.set(h.x * (1 - lift * 0.6), -0.16 + lift * 0.1 + Math.sin(t * 1.4) * 0.004, -0.42 + lift * 0.1);
    }
    const drink = avatar.items.drink;
    const hot = !!(drink && ITEMS[drink.item]?.hot);
    for (const st of this.steam) {
      st.s.visible = hot;
      if (!hot) continue;
      st.p = (st.p + dt * 0.5) % 1;
      const d = this.held.drink.sprite.position;
      st.s.position.set(d.x + Math.sin(t * 3 + st.p * 6) * 0.01, d.y + 0.05 + st.p * 0.1, d.z);
      const sz = 0.02 + st.p * 0.04;
      st.s.scale.set(sz, sz, 1);
      st.s.material.opacity = Math.sin(st.p * Math.PI) * 0.3;
    }
  }
}
