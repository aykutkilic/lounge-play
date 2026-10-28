import * as THREE from 'three';
import { emojiTexture } from './textures.js';
import { softDot } from './furniture.js';
import { ITEMS } from './shared.js';

// Seeing the lounge through your own eyes. Walking is a little physics: keys
// (or a clicked spot) set the velocity you want, and you ease into it and out
// of it, sliding along furniture instead of stopping dead. Looking is smoothed
// too, and the head bobs with your stride. Your drink and snack sit at the
// bottom of your view and get sipped / nibbled.

const SPEED = 2.4; // m/s, a stroll (a touch under the avatar walk speed, so others' view of us keeps up)
const ACCEL = 9; // how quickly you get up to speed (1/s)
const BRAKE = 12; // and how quickly you stop
const TURN = 1.9; // rad/s with ← →
const STAND_EYE = 1.45;
const SIT_EYE = 0.62; // above the seat surface
const FOV = 70;
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2);
const damp = (k, dt) => 1 - Math.exp(-k * dt); // frame-rate independent smoothing

function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export class FirstPerson {
  constructor(camera) {
    this.camera = camera;
    this.active = false;
    this.yaw = Math.PI; // where we face, avatar convention: forward = (sin yaw, cos yaw)
    this.pitch = -0.06;
    this.yawTarget = this.yaw;
    this.pitchTarget = this.pitch;
    this.keys = new Set();
    this.auto = null;
    this.pos = new THREE.Vector2();
    this.vel = new THREE.Vector2();
    this.eye = new THREE.Vector3();
    this.eyeY = STAND_EYE;
    this.stride = 0;
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

  enter(yaw, avatar) {
    this.active = true;
    this.yaw = this.yawTarget = yaw;
    this.pitch = this.pitchTarget = -0.06;
    this.auto = null;
    this.keys.clear();
    this.vel.set(0, 0);
    if (avatar) {
      this.pos.set(avatar.pos.x, avatar.pos.z);
      this.eye.copy(this.eyeOf(avatar));
      this.eyeY = this.eye.y;
    }
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
    this.vel.set(0, 0);
    for (const h of Object.values(this.held)) h.sprite.visible = false;
    for (const st of this.steam) st.s.visible = false;
  }

  look(dx, dy) {
    this.yawTarget -= dx * 0.0045;
    this.pitchTarget = THREE.MathUtils.clamp(this.pitchTarget - dy * 0.0045, -1.25, 1.1);
    if (this.lastSeat) this.lastSeat.turned = true; // the user took over from the seat's facing
  }

  key(code, down) {
    if (down) this.keys.add(code);
    else this.keys.delete(code);
  }

  walkTo(x, z) {
    this.auto = new THREE.Vector2(x, z);
  }

  // Where the eyes rest: standing height, or just above the seat when sitting.
  eyeOf(avatar, out = new THREE.Vector3()) {
    const seat = avatar.seat;
    const y = seat && avatar.state !== 'hopOut' ? seat.pos.y + SIT_EYE : STAND_EYE;
    return out.set(avatar.group.position.x, y, avatar.group.position.z);
  }

  // Free to walk: not sitting, nor busy getting into / out of / walking to a seat.
  free(avatar) {
    return !avatar.seat && !avatar.pendingSeat && avatar.state !== 'hopOut' && avatar.state !== 'hopIn';
  }

  // Returns { x, z, moving } when we walked this frame, { standUp } when the
  // player wants to move while seated, or null.
  update(dt, t, avatar, world) {
    if (!this.active || !avatar) return null;
    const k = this.keys;
    const fwd = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    const side = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    const turn = (k.has('ArrowLeft') || k.has('KeyQ') ? 1 : 0) - (k.has('ArrowRight') || k.has('KeyE') ? 1 : 0);
    this.yawTarget += turn * TURN * dt;
    if (turn && this.lastSeat) this.lastSeat.turned = true;
    const keyed = fwd || side;

    let result = null;
    if (!this.free(avatar)) {
      // sitting (or on the way to a seat): the avatar leads, we ride along
      this.vel.set(0, 0);
      this.pos.set(avatar.pos.x, avatar.pos.z);
      if (keyed) {
        this.auto = null;
        result = { standUp: true };
      }
    } else {
      // the velocity we'd like…
      const want = new THREE.Vector2();
      if (keyed) {
        this.auto = null;
        want.set(Math.sin(this.yaw) * fwd - Math.cos(this.yaw) * side, Math.cos(this.yaw) * fwd + Math.sin(this.yaw) * side);
        want.normalize().multiplyScalar(SPEED);
      } else if (this.auto) {
        const to = this.auto.clone().sub(this.pos);
        const dist = to.length();
        if (dist < 0.06) this.auto = null;
        else want.copy(to).normalize().multiplyScalar(Math.min(SPEED, dist * 2.2)); // slows into the spot
      }
      // …and easing toward it
      this.vel.lerp(want, damp(want.lengthSq() > 0 ? ACCEL : BRAKE, dt));
      if (this.vel.lengthSq() < 1e-4 && want.lengthSq() === 0) this.vel.set(0, 0);
      if (this.vel.lengthSq() > 0) {
        const [x, z] = world.resolve(this.pos.x + this.vel.x * dt, this.pos.y + this.vel.y * dt);
        const moved = Math.hypot(x - this.pos.x, z - this.pos.y);
        // walking into furniture on autopilot: give up rather than grind against it
        if (this.auto && moved < this.vel.length() * dt * 0.15) { this.auto = null; this.vel.set(0, 0); }
        // what's left of the velocity after sliding along whatever we bumped
        if (dt > 0) this.vel.set((x - this.pos.x) / dt, (z - this.pos.y) / dt);
        this.pos.set(x, z);
        result = { x, z, moving: this.vel.length() > 0.05 };
      }
    }

    // once seated, turn to face the way the seat faces (unless the user is looking around)
    const seat = avatar.seat;
    if (seat && avatar.state === 'sitting') {
      if (this.lastSeat?.id !== seat.id) this.lastSeat = { id: seat.id, turned: false };
      if (!this.lastSeat.turned) {
        this.yawTarget = angleLerp(this.yawTarget, seat.rot, damp(4, dt));
        this.pitchTarget += (-0.12 - this.pitchTarget) * damp(4, dt);
      }
    } else if (!seat) {
      this.lastSeat = null;
    }
    this.yaw = angleLerp(this.yaw, this.yawTarget, damp(22, dt));
    this.pitch += (this.pitchTarget - this.pitch) * damp(22, dt);

    // eyes: our own position when walking (never a frame behind), the seat's when sitting
    const free = this.free(avatar);
    const rest = this.eyeOf(avatar);
    const target = free ? new THREE.Vector3(this.pos.x, STAND_EYE, this.pos.y) : rest;
    this.eyeY += (target.y - this.eyeY) * damp(8, dt);
    if (free) this.eye.set(target.x, 0, target.z);
    else this.eye.lerp(new THREE.Vector3(target.x, 0, target.z), damp(10, dt));
    // head bob: a gentle rise and fall with each step, fading in and out with speed
    const speed = this.vel.length();
    this.stride += speed * dt * 2.6;
    const bob = Math.sin(this.stride) * 0.022 * Math.min(1, speed / SPEED);
    const eyePos = new THREE.Vector3(this.eye.x, this.eyeY + Math.abs(bob) - 0.01 * Math.min(1, speed / SPEED), this.eye.z);
    const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(this.pitch, this.yaw + Math.PI, bob * 0.12, 'YXZ'));

    const cam = this.camera;
    if (this.blend < 1) {
      this.blend = Math.min(1, this.blend + dt / 1.1);
      const e = ease(this.blend);
      cam.position.lerpVectors(this.fromPos, eyePos, e);
      cam.quaternion.slerpQuaternions(this.fromQuat, quat, e);
      cam.fov = THREE.MathUtils.lerp(this.fromFov, FOV, e);
      cam.updateProjectionMatrix();
    } else {
      cam.position.copy(eyePos);
      cam.quaternion.copy(quat);
      if (cam.fov !== FOV) { cam.fov = FOV; cam.updateProjectionMatrix(); }
    }

    this.updateHeld(dt, t, avatar);
    return result;
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
