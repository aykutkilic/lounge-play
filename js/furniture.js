import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as TX from './textures.js';

// Every builder takes (item, ctx) and returns { object, seats? }.
// Builders work in local space: the piece faces +z, seats are { x, y, z }
// where y is the sitting surface height. ctx = { theme, rand, animate(fn) }.

// ---------------------------------------------------------------- helpers

const matCache = new Map();
export function mat(color, opts = {}) {
  const key = `${color}|${JSON.stringify(opts)}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness: 0.8, ...opts });
    m.userData.shared = true;
    matCache.set(key, m);
  }
  return m;
}

export function glow(color, strength = 3) {
  return mat('#000', { emissive: color, emissiveIntensity: strength, roughness: 1 });
}

const geoCache = new Map();
function geo(key, make) {
  let g = geoCache.get(key);
  if (!g) {
    g = make();
    g.userData.shared = true;
    geoCache.set(key, g);
  }
  return g;
}

function place(m, x, y, z, shadow = true) {
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = true;
  return m;
}

export function rbox(w, h, d, material, x = 0, y = 0, z = 0, r = 0.04) {
  const rr = Math.max(0.001, Math.min(r, w / 2 - 0.002, h / 2 - 0.002, d / 2 - 0.002));
  const g = geo(`rb${w}|${h}|${d}|${rr}`, () => new RoundedBoxGeometry(w, h, d, 2, rr));
  return place(new THREE.Mesh(g, material), x, y, z);
}

export function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const g = geo(`b${w}|${h}|${d}`, () => new THREE.BoxGeometry(w, h, d));
  return place(new THREE.Mesh(g, material), x, y, z);
}

export function cyl(rt, rb, h, material, x = 0, y = 0, z = 0, seg = 18) {
  const g = geo(`c${rt}|${rb}|${h}|${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg));
  return place(new THREE.Mesh(g, material), x, y, z);
}

export function sphere(r, material, x = 0, y = 0, z = 0, seg = 20) {
  const g = geo(`s${r}|${seg}`, () => new THREE.SphereGeometry(r, seg, Math.round(seg * 0.7)));
  return place(new THREE.Mesh(g, material), x, y, z);
}

function blob(r, material, x, y, z) {
  const g = geo(`ico${r}`, () => new THREE.IcosahedronGeometry(r, 1));
  return place(new THREE.Mesh(g, material), x, y, z);
}

export function shade(hex, amt) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amt);
  return `#${c.getHexString()}`;
}

function leafGeo(w, l, droop = 0.3, cup = 0.3) {
  return geo(`leaf${w}|${l}|${droop}|${cup}`, () => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(w * 0.9, l * 0.15, w, l * 0.6, 0, l);
    s.bezierCurveTo(-w, l * 0.6, -w * 0.9, l * 0.15, 0, 0);
    const g = new THREE.ShapeGeometry(s, 6);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, (y / l) ** 2 * l * droop - Math.abs(x) * cup);
    }
    g.computeVertexNormals();
    return g;
  });
}

// A leaf on an optional stem, tilted `tilt` rad from vertical and turned `yaw` around the plant.
function leaf(material, { w, l, tilt, yaw, stem = 0, droop, cup, stemMat, y = 0 }) {
  const pivot = new THREE.Group();
  pivot.rotation.set(tilt, yaw, 0, 'YXZ');
  pivot.position.y = y;
  if (stem > 0) {
    const s = cyl(0.012, 0.016, stem, stemMat || material, 0, stem / 2, 0, 6);
    s.castShadow = false;
    pivot.add(s);
  }
  const m = new THREE.Mesh(leafGeo(w, l, droop, cup), material);
  m.position.y = stem;
  m.castShadow = true;
  pivot.add(m);
  return pivot;
}

const flameTex = (() => {
  let t;
  return () => {
    if (t) return t;
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(32, 36, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255,255,230,1)');
    grad.addColorStop(0.35, 'rgba(255,200,90,0.9)');
    grad.addColorStop(0.7, 'rgba(255,90,20,0.35)');
    grad.addColorStop(1, 'rgba(255,40,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    t = new THREE.CanvasTexture(c);
    t.userData.shared = true;
    return t;
  };
})();

export function softDot() {
  return flameTex();
}

export function makeFire(ctx, scale = 1, lightPower = 8) {
  const g = new THREE.Group();
  const flames = [];
  for (let i = 0; i < 16; i++) {
    const m = new THREE.SpriteMaterial({ map: flameTex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    const s = new THREE.Sprite(m);
    g.add(s);
    flames.push({ s, p: Math.random(), speed: 0.8 + Math.random() * 0.7, x: (Math.random() - 0.5) * 0.5 * scale, z: (Math.random() - 0.5) * 0.3 * scale });
  }
  const light = new THREE.PointLight('#ff8a3d', lightPower, 10 * scale, 1.6);
  light.position.y = 0.5 * scale;
  g.add(light);
  ctx.animate((dt, t) => {
    for (const f of flames) {
      f.p = (f.p + dt * f.speed) % 1;
      const p = f.p;
      f.s.position.set(f.x * (1 - p * 0.8), p * 0.85 * scale, f.z * (1 - p));
      const sz = ((1 - p) * 0.5 + 0.12) * scale;
      f.s.scale.set(sz, sz * 1.5, 1);
      f.s.material.opacity = Math.sin(p * Math.PI) * 0.95;
      f.s.material.color.setHSL(0.1 - p * 0.08, 1, 0.55 + (1 - p) * 0.15).multiplyScalar(1.6);
    }
    light.intensity = lightPower * (0.8 + 0.12 * Math.sin(t * 13.1) + 0.08 * Math.sin(t * 7.3 + 1.2) + 0.05 * Math.sin(t * 23.7));
  });
  return g;
}

function catenary(a, b, sag, n) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    const p = new THREE.Vector3().lerpVectors(a, b, u);
    p.y -= sag * 4 * u * (1 - u);
    pts.push(p);
  }
  return pts;
}

// Draped string of glowing bulbs along each [a, b] segment.
export function stringOfLights(segments, { sag = 0.5, spacing = 0.4, color = '#ffd27a' } = {}) {
  const g = new THREE.Group();
  const bulbs = [];
  const wire = [];
  for (const [a, b] of segments) {
    const n = Math.max(2, Math.round(a.distanceTo(b) / spacing));
    const pts = catenary(a, b, sag, n);
    for (let i = 0; i < pts.length - 1; i++) wire.push(pts[i], pts[i + 1]);
    for (let i = 1; i < pts.length - 1; i++) bulbs.push(pts[i]);
  }
  const lineGeo = new THREE.BufferGeometry().setFromPoints(wire);
  g.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: '#222' })));
  const bulbMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(5) });
  const inst = new THREE.InstancedMesh(new THREE.SphereGeometry(0.05, 8, 6), bulbMat, bulbs.length);
  const m4 = new THREE.Matrix4();
  bulbs.forEach((p, i) => inst.setMatrixAt(i, m4.makeTranslation(p.x, p.y - 0.06, p.z)));
  g.add(inst);
  return g;
}

function emojiSprite(e, size) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: TX.emojiTexture(e), transparent: true, depthWrite: false }));
  s.scale.set(size, size, 1);
  return s;
}

const POTS = ['#c96f4a', '#e9dccb', '#4a5d6b', '#d8b26e', '#8f5e45', '#f1ece2'];

function pot(ctx, r = 0.26, h = 0.45, color) {
  const g = new THREE.Group();
  const c = color || POTS[Math.floor(ctx.rand() * POTS.length)];
  g.add(cyl(r, r * 0.75, h, mat(c, { roughness: 0.7 }), 0, h / 2, 0, 20));
  g.add(cyl(r * 1.06, r * 1.06, 0.06, mat(shade(c, -0.05), { roughness: 0.7 }), 0, h - 0.03, 0, 20));
  const soil = cyl(r * 0.95, r * 0.95, 0.02, mat('#3b2a20', { roughness: 1 }), 0, h - 0.04, 0, 16);
  soil.castShadow = false;
  g.add(soil);
  return g;
}

function sway(ctx, obj, amt = 0.03, speed = 0.8) {
  const ph = ctx.rand() * 10;
  ctx.animate((dt, t) => {
    obj.rotation.z = Math.sin(t * speed + ph) * amt;
    obj.rotation.x = Math.sin(t * speed * 0.7 + ph * 1.3) * amt * 0.6;
  });
}

// ---------------------------------------------------------------- seating

function couch(n, item, ctx) {
  const g = new THREE.Group();
  const color = item.color || '#7a3b2e';
  const fabric = mat(color, { roughness: 0.95 });
  const cushion = mat(shade(color, 0.04), { roughness: 1 });
  const legM = mat(ctx.theme.wood || '#3b2a1e', { roughness: 0.6 });
  const sw = n === 1 ? 0.9 : 0.78;
  const W = n * sw;
  const D = 0.95;
  g.add(rbox(W + 0.5, 0.3, D, fabric, 0, 0.27, 0, 0.06));
  g.add(rbox(W + 0.5, 0.72, 0.24, fabric, 0, 0.73, -D / 2 + 0.12, 0.1));
  for (const s of [-1, 1]) g.add(rbox(0.25, 0.62, D, fabric, s * (W / 2 + 0.125), 0.43, 0, 0.1));
  const seats = [];
  for (let i = 0; i < n; i++) {
    const x = (i - (n - 1) / 2) * sw;
    g.add(rbox(sw - 0.04, 0.16, D - 0.28, cushion, x, 0.5, 0.12, 0.07));
    const bc = rbox(sw - 0.06, 0.48, 0.18, cushion, x, 0.86, -D / 2 + 0.32, 0.08);
    bc.rotation.x = -0.12;
    g.add(bc);
    seats.push({ x, z: 0.2, y: 0.58 });
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(cyl(0.035, 0.025, 0.12, legM, sx * (W / 2 + 0.17), 0.06, sz * (D / 2 - 0.1), 8));
  if (n >= 2) {
    const accents = ['#e9c46a', '#f4f1de', '#81b29a', '#e07a5f'];
    for (const s of [-1, 1]) {
      const p = rbox(0.38, 0.36, 0.12, mat(accents[Math.floor(ctx.rand() * accents.length)], { roughness: 1 }), s * (W / 2 - 0.22), 0.76, -0.18, 0.06);
      p.rotation.set(-0.25, s * -0.35, s * 0.15);
      g.add(p);
    }
  }
  return { object: g, seats };
}

function beanbag(item) {
  const g = new THREE.Group();
  const m = mat(item.color || '#a0522d', { roughness: 1 });
  const base = sphere(0.6, m, 0, 0.27, 0, 24);
  base.scale.set(1, 0.5, 1);
  const back = sphere(0.45, m, 0, 0.58, -0.32, 24);
  back.scale.set(1.05, 0.85, 0.6);
  g.add(base, back);
  return { object: g, seats: [{ x: 0, z: 0.12, y: 0.5 }] };
}

function cushionSeat(item) {
  const g = new THREE.Group();
  const c = item.color || '#c08552';
  g.add(rbox(0.8, 0.14, 0.8, mat(shade(c, -0.08), { roughness: 1 }), 0, 0.07, 0, 0.07));
  g.add(rbox(0.74, 0.14, 0.74, mat(c, { roughness: 1 }), 0, 0.2, 0, 0.07));
  g.add(sphere(0.035, mat(shade(c, -0.15)), 0, 0.275, 0, 8));
  return { object: g, seats: [{ x: 0, z: 0.05, y: 0.28 }] };
}

function chair(item, ctx) {
  const g = new THREE.Group();
  const frame = mat(ctx.theme.chairFrame || '#2b2b2b', { roughness: 0.5, metalness: 0.3 });
  const seatM = mat(item.color || ctx.theme.chairSeat || '#8a5a3b', { roughness: 0.7 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(cyl(0.018, 0.018, 0.47, frame, sx * 0.2, 0.235, sz * 0.2, 6));
  g.add(rbox(0.5, 0.05, 0.48, seatM, 0, 0.48, 0, 0.02));
  for (const sx of [-1, 1]) g.add(cyl(0.018, 0.018, 0.48, frame, sx * 0.2, 0.74, -0.22, 6));
  const back = rbox(0.46, 0.26, 0.035, seatM, 0, 0.84, -0.23, 0.015);
  back.rotation.x = -0.08;
  g.add(back);
  return { object: g, seats: [{ x: 0, z: 0.04, y: 0.505 }] };
}

function stool(item, ctx) {
  const g = new THREE.Group();
  const frame = mat('#2d2a26', { roughness: 0.4, metalness: 0.5 });
  const top = mat(item.color || ctx.theme.wood || '#8a5a3b', { roughness: 0.6 });
  g.add(cyl(0.22, 0.2, 0.06, top, 0, 0.74, 0, 20));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const l = cyl(0.018, 0.022, 0.74, frame, Math.cos(a) * 0.15, 0.37, Math.sin(a) * 0.15, 6);
    l.rotation.set(Math.sin(a) * 0.12, 0, -Math.cos(a) * 0.12);
    g.add(l);
  }
  const ring = new THREE.Mesh(geo('stoolring', () => new THREE.TorusGeometry(0.18, 0.012, 6, 24)), frame);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.28;
  g.add(ring);
  return { object: g, seats: [{ x: 0, z: 0, y: 0.77 }] };
}

function swingChair(item, ctx) {
  const g = new THREE.Group();
  const metal = mat('#2b2b2b', { roughness: 0.4, metalness: 0.6 });
  const wicker = mat(item.color || '#c9a46b', { roughness: 0.9, side: THREE.DoubleSide });
  g.add(cyl(0.5, 0.55, 0.05, metal, 0, 0.025, -0.25, 24));
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.05, -0.7), new THREE.Vector3(0, 1.3, -0.95), new THREE.Vector3(0, 2.3, -0.8),
    new THREE.Vector3(0, 2.62, -0.35), new THREE.Vector3(0, 2.6, 0),
  ]);
  const pole = new THREE.Mesh(geo('swingpole', () => new THREE.TubeGeometry(curve, 30, 0.035, 8)), metal);
  pole.castShadow = true;
  g.add(pole);
  const hang = new THREE.Group();
  hang.position.set(0, 2.58, 0);
  g.add(hang);
  hang.add(cyl(0.01, 0.01, 0.42, metal, 0, -0.21, 0, 4));
  const egg = new THREE.Mesh(
    geo('egg', () => new THREE.SphereGeometry(0.62, 28, 18, Math.PI / 2 + 0.95, Math.PI * 2 - 1.9, 0, Math.PI)),
    wicker,
  );
  egg.scale.set(1, 1.3, 1);
  egg.position.y = -1.22;
  egg.castShadow = true;
  hang.add(egg);
  const cushion = cyl(0.46, 0.46, 0.12, mat(item.cushion || '#f4efe6', { roughness: 1 }), 0, -1.98, 0.02, 20);
  hang.add(cushion);
  const ph = ctx.rand() * 6;
  ctx.animate((dt, t) => { hang.rotation.z = Math.sin(t * 0.9 + ph) * 0.025; });
  return { object: g, seats: [{ x: 0, z: 0.05, y: 0.66 }] };
}

function lounger(item, ctx) {
  const g = new THREE.Group();
  const wood = mat(ctx.theme.wood || '#a0764f', { roughness: 0.7 });
  const pad = mat(item.color || '#f1e3c6', { roughness: 1 });
  g.add(rbox(0.7, 0.07, 1.2, wood, 0, 0.32, 0.25, 0.02));
  g.add(rbox(0.62, 0.08, 1.15, pad, 0, 0.39, 0.25, 0.04));
  for (const sx of [-1, 1]) for (const z of [-0.3, 0.8]) g.add(box(0.05, 0.3, 0.05, wood, sx * 0.3, 0.15, z));
  const back = new THREE.Group();
  back.position.set(0, 0.36, -0.34);
  back.rotation.x = 0.95;
  back.add(rbox(0.7, 0.07, 0.85, wood, 0, 0, -0.42, 0.02));
  back.add(rbox(0.62, 0.08, 0.8, pad, 0, 0.07, -0.4, 0.04));
  g.add(back);
  return { object: g, seats: [{ x: 0, z: -0.1, y: 0.44 }] };
}

function hammock(item, ctx) {
  const g = new THREE.Group();
  const wood = mat('#6b4a32', { roughness: 0.8 });
  for (const s of [-1, 1]) {
    g.add(cyl(0.07, 0.08, 1.8, wood, s * 1.45, 0.9, 0, 10));
    g.add(sphere(0.09, wood, s * 1.45, 1.82, 0, 10));
  }
  const sling = new THREE.Group();
  sling.position.y = 1.5;
  g.add(sling);
  const plane = new THREE.PlaneGeometry(2.2, 0.95, 24, 6);
  const pos = plane.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const u = pos.getX(i);
    const v = pos.getY(i);
    pos.setXYZ(i, u, -0.3 - 0.52 * (1 - (u / 1.1) ** 2) + 0.18 * (v / 0.475) ** 2, v);
  }
  plane.computeVertexNormals();
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const cg = c.getContext('2d');
  ['#e76f51', '#f4a261', '#e9c46a', '#2a9d8f', '#264653', '#f4f1de'].forEach((col, i, a) => {
    cg.fillStyle = col;
    cg.fillRect(0, (i * 64) / a.length, 256, 64 / a.length + 1);
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const cloth = new THREE.Mesh(plane, new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 1 }));
  cloth.castShadow = true;
  sling.add(cloth);
  for (const s of [-1, 1]) {
    const rope = cyl(0.012, 0.012, 0.42, mat('#d8c3a5'), s * 1.27, 0, 0, 4);
    rope.rotation.z = s * 1.0;
    sling.add(rope);
  }
  const ph = ctx.rand() * 6;
  ctx.animate((dt, t) => { sling.rotation.x = Math.sin(t * 0.7 + ph) * 0.06; });
  return { object: g, seats: [{ x: 0, z: 0, y: 0.78 }] };
}

function bench(item, ctx) {
  const g = new THREE.Group();
  const wood = mat(item.color || ctx.theme.wood || '#a0764f', { roughness: 0.75 });
  const dark = mat('#3a2f28', { roughness: 0.6, metalness: 0.3 });
  for (const z of [-0.14, 0, 0.14]) g.add(rbox(2.5, 0.05, 0.12, wood, 0, 0.47, z, 0.02));
  for (const x of [-1.05, 0, 1.05]) g.add(rbox(0.07, 0.45, 0.4, dark, x, 0.225, 0, 0.02));
  return { object: g, seats: [-0.8, 0, 0.8].map((x) => ({ x, z: 0, y: 0.5 })) };
}

// ---------------------------------------------------------------- tables & decor

function candle(ctx, x, y, z) {
  const g = new THREE.Group();
  g.add(cyl(0.035, 0.035, 0.12, mat('#f5ecd9', { roughness: 0.9 }), x, y + 0.06, z, 10));
  const flame = sphere(0.018, glow('#ffb347', 6), x, y + 0.14, z, 8);
  flame.scale.y = 1.8;
  flame.castShadow = false;
  g.add(flame);
  const ph = ctx.rand() * 10;
  ctx.animate((dt, t) => { flame.scale.y = 1.6 + Math.sin(t * 11 + ph) * 0.25; });
  return g;
}

function coffeeTable(item, ctx) {
  const g = new THREE.Group();
  const wood = mat(ctx.theme.wood || '#5a3b28', { roughness: 0.55 });
  const h = item.low ? 0.32 : 0.42;
  g.add(rbox(1.5, 0.07, 0.85, wood, 0, h, 0, 0.03));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(cyl(0.035, 0.03, h, wood, sx * 0.65, h / 2, sz * 0.33, 8));
  g.add(rbox(0.32, 0.05, 0.22, mat('#2f4858'), -0.4, h + 0.06, -0.05, 0.01));
  const b2 = rbox(0.28, 0.05, 0.2, mat('#c44536'), -0.38, h + 0.11, -0.04, 0.01);
  b2.rotation.y = 0.25;
  g.add(b2);
  g.add(candle(ctx, 0.15, h + 0.035, 0.1));
  g.add(candle(ctx, 0.26, h + 0.035, -0.08));
  g.add(cyl(0.09, 0.07, 0.03, mat('#e9e3d3'), 0.45, h + 0.05, 0.12, 14));
  return { object: g };
}

function roundTable(item, ctx) {
  const g = new THREE.Group();
  const top = mat(ctx.theme.tableTop || '#efe7da', { roughness: 0.35 });
  const metal = mat('#2b2b2b', { roughness: 0.4, metalness: 0.5 });
  g.add(cyl(0.5, 0.5, 0.05, top, 0, 0.75, 0, 28));
  g.add(cyl(0.035, 0.035, 0.72, metal, 0, 0.37, 0, 8));
  g.add(cyl(0.28, 0.3, 0.03, metal, 0, 0.015, 0, 20));
  g.add(cyl(0.04, 0.05, 0.16, mat('#7fb7be', { roughness: 0.1, transparent: true, opacity: 0.7 }), 0.1, 0.86, 0.05, 10));
  const flowerCols = ['#f28482', '#f6bd60', '#ffffff', '#cdb4db'];
  g.add(sphere(0.05, mat(flowerCols[Math.floor(ctx.rand() * 4)]), 0.1, 0.97, 0.05, 10));
  return { object: g };
}

function tableLamp(ctx, y) {
  const g = new THREE.Group();
  g.add(cyl(0.06, 0.08, 0.2, mat('#c9a66b', { roughness: 0.3, metalness: 0.6 }), 0, y + 0.1, 0, 12));
  const shadeM = mat('#f3e2c3', { emissive: '#ffb35c', emissiveIntensity: 1.2, side: THREE.DoubleSide });
  const s = new THREE.Mesh(geo('tlshade', () => new THREE.CylinderGeometry(0.11, 0.17, 0.2, 20, 1, true)), shadeM);
  s.position.y = y + 0.3;
  g.add(s);
  const light = new THREE.PointLight('#ffc27a', 2.5, 4, 2);
  light.position.y = y + 0.28;
  g.add(light);
  return g;
}

function sideTable(item, ctx) {
  const g = new THREE.Group();
  const wood = mat(ctx.theme.wood || '#5a3b28', { roughness: 0.55 });
  g.add(cyl(0.3, 0.3, 0.04, wood, 0, 0.58, 0, 24));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    g.add(cyl(0.02, 0.02, 0.58, wood, Math.cos(a) * 0.2, 0.29, Math.sin(a) * 0.2, 6));
  }
  g.add(tableLamp(ctx, 0.6));
  return { object: g };
}

function rugItem(item, ctx) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(item.w, item.d),
    new THREE.MeshStandardMaterial({ map: TX.rug(item.pattern, Math.floor(ctx.rand() * 1e6)), roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.015;
  m.receiveShadow = true;
  return { object: m };
}

function bookshelf(item, ctx) {
  const g = new THREE.Group();
  const wood = mat(ctx.theme.shelfWood || '#4a3020', { roughness: 0.6 });
  const W = 2.2;
  const H = 2.7;
  const D = 0.42;
  for (const s of [-1, 1]) g.add(rbox(0.06, H, D, wood, s * (W / 2 - 0.03), H / 2, 0, 0.015));
  g.add(rbox(W + 0.06, 0.07, D + 0.04, wood, 0, H, 0, 0.02));
  g.add(box(W, H, 0.03, mat(shade(ctx.theme.shelfWood || '#4a3020', -0.06)), 0, H / 2, -D / 2 + 0.015));
  const levels = [0.12, 0.64, 1.16, 1.68, 2.2];
  for (const y of levels) g.add(box(W - 0.1, 0.04, D - 0.04, wood, 0, y, 0.01));
  const cols = ['#7b2d26', '#1f3b4d', '#2d6a4f', '#c9a227', '#6d597a', '#b56576', '#e9d8a6', '#354f52', '#9c6644', '#264653', '#e76f51'];
  const books = new THREE.InstancedMesh(
    geo('unitbox', () => new THREE.BoxGeometry(1, 1, 1)),
    mat('#ffffff', { roughness: 0.85 }),
    160,
  );
  books.castShadow = true;
  books.receiveShadow = true;
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const color = new THREE.Color();
  let n = 0;
  levels.forEach((y) => {
    let x = -W / 2 + 0.1;
    const decorAt = ctx.rand() < 0.5 ? -W / 2 + 0.3 + ctx.rand() * (W - 0.6) : 99;
    while (x < W / 2 - 0.12 && n < 160) {
      if (Math.abs(x - decorAt) < 0.18) {
        const kind = ctx.rand();
        const dy = y + 0.02;
        if (kind < 0.5) {
          const p = pot(ctx, 0.08, 0.14);
          p.position.set(x + 0.1, dy, 0);
          for (let k = 0; k < 5; k++) p.add(leaf(mat('#4f772d', { side: THREE.DoubleSide, roughness: 0.6 }), { w: 0.04, l: 0.18, tilt: 0.4 + ctx.rand() * 0.6, yaw: k * 1.3, y: 0.13, droop: 0.2 }));
          g.add(p);
        } else {
          g.add(sphere(0.07, mat('#c9a66b', { roughness: 0.3, metalness: 0.6 }), x + 0.1, dy + 0.07, 0, 14));
        }
        x += 0.3;
        continue;
      }
      if (ctx.rand() < 0.06) { x += 0.12; continue; }
      const w = 0.035 + ctx.rand() * 0.05;
      const h = 0.27 + ctx.rand() * 0.15;
      const d = 0.24 + ctx.rand() * 0.08;
      const lean = ctx.rand() < 0.08 ? 0.25 : 0;
      q.setFromEuler(e.set(0, 0, -lean));
      m4.compose(new THREE.Vector3(x + w / 2 + lean * 0.12, y + 0.02 + h / 2, -D / 2 + 0.04 + d / 2), q, new THREE.Vector3(w, h, d));
      books.setMatrixAt(n, m4);
      books.setColorAt(n, color.set(cols[Math.floor(ctx.rand() * cols.length)]).offsetHSL(0, 0, (ctx.rand() - 0.5) * 0.08));
      n++;
      x += w + 0.004 + lean * 0.12;
    }
  });
  books.count = n;
  g.add(books);
  return { object: g };
}

function fireplace(item, ctx) {
  const g = new THREE.Group();
  const stone = mat('#8d847a', { roughness: 0.95 });
  const dark = mat('#17110e', { roughness: 1 });
  const wood = mat(ctx.theme.wood || '#5a3b28', { roughness: 0.55 });
  for (const s of [-1, 1]) g.add(rbox(0.65, 2.3, 0.7, stone, s * 1.075, 1.15, 0, 0.04));
  g.add(rbox(1.5, 1.2, 0.7, stone, 0, 1.7, 0, 0.04));
  g.add(box(1.5, 1.1, 0.1, dark, 0, 0.55, -0.28));
  g.add(box(1.5, 0.04, 0.6, dark, 0, 0.12, 0));
  g.add(rbox(3.2, 0.12, 0.8, mat('#6e655c', { roughness: 0.9 }), 0, 0.06, 0.25, 0.03));
  g.add(rbox(3.1, 0.14, 0.5, wood, 0, 2.36, 0.1, 0.03));
  g.add(rbox(2.3, 1.85, 0.5, stone, 0, 3.35, -0.1, 0.04));
  const logM = mat('#4a3020', { roughness: 1 });
  const emberM = mat('#3a1a0a', { emissive: '#ff4a10', emissiveIntensity: 1.5 });
  [[-0.15, 0.2, 0.3], [0.18, 0.2, -0.3], [0, 0.32, 0.1]].forEach(([x, y, rz], i) => {
    const l = cyl(0.07, 0.08, 0.85, i === 2 ? emberM : logM, x, y, 0, 10);
    l.rotation.set(0, rz, Math.PI / 2);
    g.add(l);
  });
  const fire = makeFire(ctx, 0.9, 10);
  fire.position.set(0, 0.22, 0.02);
  g.add(fire);
  g.add(candle(ctx, -1.2, 2.43, 0.15), candle(ctx, -1.05, 2.43, 0.2), candle(ctx, 1.25, 2.43, 0.15));
  const frame = rbox(0.5, 0.38, 0.04, mat('#c9a66b', { roughness: 0.3, metalness: 0.6 }), 0.55, 2.62, 0.05, 0.01);
  frame.rotation.x = -0.1;
  g.add(frame);
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.3), new THREE.MeshStandardMaterial({ map: TX.painting(Math.floor(ctx.rand() * 1e6)) }));
  pic.position.set(0.55, 2.62, 0.075);
  pic.rotation.x = -0.1;
  g.add(pic);
  const clock = cyl(0.13, 0.13, 0.06, mat('#2f2f2f', { metalness: 0.5, roughness: 0.4 }), -0.4, 2.58, 0.1, 20);
  clock.rotation.x = Math.PI / 2;
  g.add(clock);
  g.add(cyl(0.11, 0.11, 0.065, mat('#f2ead8'), -0.4, 2.58, 0.1, 20).rotateX(Math.PI / 2));
  return { object: g };
}

function floorLamp(item, ctx) {
  const g = new THREE.Group();
  const metal = mat('#2d2a26', { roughness: 0.4, metalness: 0.6 });
  g.add(cyl(0.2, 0.22, 0.04, metal, 0, 0.02, 0, 20));
  g.add(cyl(0.018, 0.018, 1.55, metal, 0, 0.8, 0, 8));
  const shadeM = mat(item.shade || '#f3e2c3', { emissive: '#ffb35c', emissiveIntensity: 1.1, side: THREE.DoubleSide, roughness: 0.9 });
  const s = new THREE.Mesh(geo('flshade', () => new THREE.CylinderGeometry(0.2, 0.3, 0.36, 24, 1, true)), shadeM);
  s.position.y = 1.65;
  s.castShadow = true;
  g.add(s);
  const bulb = sphere(0.06, new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffd9a0').multiplyScalar(4) }), 0, 1.56, 0, 10);
  bulb.castShadow = false;
  g.add(bulb);
  const light = new THREE.PointLight('#ffc27a', ctx.theme.lampPower ?? 6, 8, 1.8);
  light.position.y = 1.5;
  g.add(light);
  return { object: g };
}

function lantern(item, ctx) {
  const g = new THREE.Group();
  const metal = mat('#2d2a26', { roughness: 0.4, metalness: 0.6 });
  g.add(rbox(0.3, 0.04, 0.3, metal, 0, 0.02, 0, 0.01));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(0.025, 0.36, 0.025, metal, sx * 0.13, 0.22, sz * 0.13));
  const glass = box(0.25, 0.34, 0.25, mat('#fff3d6', { transparent: true, opacity: 0.18, roughness: 0.05 }), 0, 0.22, 0);
  glass.castShadow = false;
  g.add(glass);
  const cap = cyl(0.02, 0.22, 0.14, metal, 0, 0.47, 0, 4);
  cap.rotation.y = Math.PI / 4;
  g.add(cap);
  const handle = new THREE.Mesh(geo('lhandle', () => new THREE.TorusGeometry(0.07, 0.008, 6, 16, Math.PI)), metal);
  handle.position.y = 0.54;
  g.add(handle);
  g.add(candle(ctx, 0, 0.04, 0));
  const light = new THREE.PointLight('#ffb35c', 2.2, 5, 2);
  light.position.y = 0.3;
  g.add(light);
  const ph = ctx.rand() * 10;
  ctx.animate((dt, t) => { light.intensity = 2.2 * (0.85 + 0.15 * Math.sin(t * 9 + ph) * Math.sin(t * 3.1 + ph)); });
  return { object: g };
}

function windowItem(item, ctx) {
  const g = new THREE.Group();
  const frameM = mat(ctx.theme.windowFrame || '#efe8dc', { roughness: 0.6 });
  const y = 1.95;
  const c = document.createElement('canvas');
  c.width = 256; c.height = 288;
  const cg = c.getContext('2d');
  const grad = cg.createLinearGradient(0, 0, 0, 288);
  grad.addColorStop(0, '#070b1f');
  grad.addColorStop(1, '#27335a');
  cg.fillStyle = grad;
  cg.fillRect(0, 0, 256, 288);
  for (let i = 0; i < 80; i++) {
    cg.fillStyle = `rgba(255,255,255,${0.3 + ctx.rand() * 0.7})`;
    cg.fillRect(ctx.rand() * 256, ctx.rand() * 200, 1.5, 1.5);
  }
  cg.fillStyle = '#f6f1d5';
  cg.shadowColor = '#f6f1d5';
  cg.shadowBlur = 30;
  cg.beginPath(); cg.arc(180, 70, 22, 0, Math.PI * 2); cg.fill();
  cg.shadowBlur = 0;
  cg.fillStyle = '#0a0f1c';
  for (let x = 0; x < 256; x += 18) {
    const h = 30 + ctx.rand() * 50;
    cg.beginPath(); cg.moveTo(x - 14, 288); cg.lineTo(x + 9, 288 - h - 40); cg.lineTo(x + 32, 288); cg.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const view = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.9), new THREE.MeshBasicMaterial({ map: tex }));
  view.position.set(0, y, -0.02);
  g.add(view);
  g.add(rbox(1.9, 0.1, 0.14, frameM, 0, y + 1.0, 0.02), rbox(1.9, 0.1, 0.14, frameM, 0, y - 1.0, 0.02));
  g.add(rbox(0.1, 2.1, 0.14, frameM, -0.9, y, 0.02), rbox(0.1, 2.1, 0.14, frameM, 0.9, y, 0.02));
  g.add(box(0.05, 1.9, 0.06, frameM, 0, y, 0.02), box(1.7, 0.05, 0.06, frameM, 0, y + 0.2, 0.02));
  g.add(rbox(2.1, 0.06, 0.28, frameM, 0, y - 1.03, 0.1, 0.02));
  const curtain = mat(ctx.theme.curtain || '#8c2f39', { roughness: 1 });
  for (const s of [-1, 1]) {
    const cu = rbox(0.4, 2.6, 0.08, curtain, s * 1.2, y - 0.15, 0.16, 0.03);
    g.add(cu);
  }
  const rod = cyl(0.02, 0.02, 3.0, mat('#c9a66b', { metalness: 0.6, roughness: 0.3 }), 0, y + 1.2, 0.2, 8);
  rod.rotation.z = Math.PI / 2;
  g.add(rod);
  const sillPlant = pot(ctx, 0.08, 0.14, '#f1ece2');
  sillPlant.position.set(0.55, y - 1.0, 0.1);
  for (let k = 0; k < 3; k++) sillPlant.add(cyl(0.035, 0.04, 0.14 - k * 0.03, mat('#5a8f4e'), (k - 1) * 0.04, 0.2, 0, 8));
  g.add(sillPlant);
  return { object: g };
}

function counter(item, ctx) {
  const g = new THREE.Group();
  const W = 3.2;
  const bodyM = mat(ctx.theme.counter || '#2f4f4f', { roughness: 0.7 });
  const topM = mat(ctx.theme.counterTop || '#e8e2d6', { roughness: 0.3 });
  const metal = mat('#b8bcc2', { roughness: 0.25, metalness: 0.8 });
  const white = mat('#f7f3ec', { roughness: 0.4 });
  g.add(rbox(W, 1.0, 0.7, bodyM, 0, 0.5, 0, 0.03));
  for (let i = 0; i < 12; i++) g.add(box(0.12, 0.85, 0.03, mat(shade(ctx.theme.counter || '#2f4f4f', 0.05)), -W / 2 + 0.2 + i * 0.255, 0.5, 0.36));
  g.add(rbox(W + 0.2, 0.07, 0.86, topM, 0, 1.035, 0, 0.02));
  // espresso machine
  g.add(rbox(0.62, 0.45, 0.4, metal, -0.9, 1.3, -0.12, 0.05));
  g.add(rbox(0.5, 0.06, 0.12, mat('#222'), -0.9, 1.17, 0.12, 0.02));
  for (const x of [-1.05, -0.75]) g.add(cyl(0.035, 0.035, 0.08, mat('#222'), x, 1.2, 0.1, 8));
  for (let i = 0; i < 3; i++) g.add(cyl(0.04, 0.032, 0.07, white, -1.05 + i * 0.15, 1.56, -0.12, 10));
  // cups
  for (let i = 0; i < 3; i++) g.add(cyl(0.045, 0.035, 0.09, white, -0.35 + i * 0.12, 1.115, 0.18, 10));
  // pastry case
  const glass = rbox(0.95, 0.36, 0.46, mat('#dff3ff', { transparent: true, opacity: 0.2, roughness: 0.05 }), 0.75, 1.25, 0.02, 0.03);
  glass.castShadow = false;
  g.add(glass);
  const treats = ['#d4a373', '#f28482', '#e9c46a', '#8d5524', '#f5cac3'];
  for (let i = 0; i < 6; i++) {
    const t = sphere(0.06, mat(treats[i % treats.length], { roughness: 0.8 }), 0.42 + (i % 3) * 0.32, 1.13, -0.08 + Math.floor(i / 3) * 0.2, 10);
    t.scale.y = 0.6;
    g.add(t);
  }
  // awning
  const postM = mat('#3a2f28', { roughness: 0.6 });
  for (const s of [-1, 1]) g.add(cyl(0.035, 0.035, 2.75, postM, s * (W / 2 + 0.05), 1.375, -0.4, 8));
  const ac = document.createElement('canvas');
  ac.width = 256; ac.height = 32;
  const acg = ac.getContext('2d');
  for (let i = 0; i < 16; i++) {
    acg.fillStyle = i % 2 ? '#fdf6e9' : ctx.theme.awning || '#c44536';
    acg.fillRect(i * 16, 0, 16, 32);
  }
  const atex = new THREE.CanvasTexture(ac);
  atex.colorSpace = THREE.SRGBColorSpace;
  const awning = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.5, 1.3), new THREE.MeshStandardMaterial({ map: atex, side: THREE.DoubleSide, roughness: 1 }));
  awning.position.set(0, 2.62, 0.05);
  awning.rotation.x = -Math.PI / 2 + 0.38;
  awning.castShadow = true;
  g.add(awning);
  const board = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.95), new THREE.MeshStandardMaterial({ map: TX.menuBoard(ctx.menu || []), roughness: 0.9 }));
  board.position.set(0.1, 2.0, -0.38);
  g.add(board);
  g.add(stringOfLights([[new THREE.Vector3(-W / 2 - 0.25, 2.3, 0.62), new THREE.Vector3(W / 2 + 0.25, 2.3, 0.62)]], { sag: 0.18, spacing: 0.3 }));
  const light = new THREE.PointLight('#ffcf8a', ctx.theme.counterLight ?? 5, 7, 1.8);
  light.position.set(0, 2.1, 0.5);
  g.add(light);
  // steam from the machine
  const steam = [];
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDot(), color: '#ffffff', transparent: true, depthWrite: false, opacity: 0 }));
    g.add(s);
    steam.push({ s, p: i / 5 });
  }
  ctx.animate((dt) => {
    for (const st of steam) {
      st.p = (st.p + dt * 0.35) % 1;
      st.s.position.set(-0.9 + Math.sin(st.p * 9) * 0.04, 1.6 + st.p * 0.6, -0.12);
      const sz = 0.08 + st.p * 0.22;
      st.s.scale.set(sz, sz, 1);
      st.s.material.opacity = Math.sin(st.p * Math.PI) * 0.25;
    }
  });
  return { object: g, home: { x: W / 2 - 0.7, z: -0.95 }, halfWidth: W / 2 };
}

function turntable(item, ctx) {
  const g = new THREE.Group();
  const wood = mat(ctx.theme.wood || '#6b4a32', { roughness: 0.55 });
  g.add(rbox(1.1, 0.62, 0.48, wood, 0, 0.31, 0, 0.03));
  const spines = new THREE.InstancedMesh(geo('unitbox', () => new THREE.BoxGeometry(1, 1, 1)), mat('#ffffff', { roughness: 0.8 }), 40);
  const m4 = new THREE.Matrix4();
  const col = new THREE.Color();
  for (let i = 0; i < 40; i++) {
    m4.compose(new THREE.Vector3(-0.47 + i * 0.024, 0.31, 0.21), new THREE.Quaternion(), new THREE.Vector3(0.016, 0.42, 0.06));
    spines.setMatrixAt(i, m4);
    spines.setColorAt(i, col.setHSL(ctx.rand(), 0.5, 0.25 + ctx.rand() * 0.4));
  }
  g.add(spines);
  g.add(rbox(0.6, 0.08, 0.44, mat('#2a2522', { roughness: 0.4 }), -0.1, 0.66, 0, 0.02));
  const platter = new THREE.Group();
  platter.position.set(-0.16, 0.71, 0);
  platter.add(cyl(0.175, 0.175, 0.012, mat('#111', { roughness: 0.25 }), 0, 0, 0, 32));
  const label = cyl(0.06, 0.06, 0.014, mat(ctx.theme.record || '#e76f51'), 0, 0, 0, 16);
  platter.add(label);
  label.add(box(0.06, 0.016, 0.012, mat('#f4f1de'), 0.02, 0, 0));
  g.add(platter);
  const arm = box(0.018, 0.018, 0.3, mat('#c9c9c9', { metalness: 0.8, roughness: 0.3 }), 0.08, 0.74, 0.02);
  arm.rotation.y = 0.5;
  g.add(arm);
  for (const s of [-1, 1]) {
    const sp = new THREE.Group();
    sp.position.set(s * 0.8, 0, 0);
    sp.add(rbox(0.32, 0.6, 0.3, mat('#2a2522', { roughness: 0.6 }), 0, 0.3, 0, 0.03));
    for (const [y, r] of [[0.42, 0.06], [0.2, 0.1]]) {
      const cone = cyl(r, r, 0.02, mat('#141414', { roughness: 0.9 }), 0, y, 0.15, 16);
      cone.rotation.x = Math.PI / 2;
      sp.add(cone);
    }
    g.add(sp);
  }
  const notes = [];
  for (let i = 0; i < 4; i++) {
    const s = emojiSprite(i % 2 ? '🎵' : '🎶', 0.22);
    s.material.opacity = 0;
    g.add(s);
    notes.push({ s, p: i / 4, x: 0 });
  }
  ctx.animate((dt, t) => {
    platter.rotation.y -= dt * 3.5;
    for (const n of notes) {
      n.p += dt * 0.28;
      if (n.p >= 1) { n.p -= 1; n.x = (ctx.rand() - 0.5) * 0.4; }
      n.s.position.set(-0.16 + n.x + Math.sin(t * 2 + n.p * 6) * 0.08, 0.9 + n.p * 1.3, 0);
      n.s.material.opacity = Math.sin(n.p * Math.PI) * 0.9;
    }
  });
  return { object: g };
}

function paintingItem(item, ctx) {
  const g = new THREE.Group();
  const w = item.w || 1.4;
  const h = item.h || 1;
  g.add(rbox(w + 0.14, h + 0.14, 0.06, mat('#c9a66b', { roughness: 0.35, metalness: 0.5 }), 0, 1.95, 0, 0.02));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: TX.painting(Math.floor(ctx.rand() * 1e6)), roughness: 0.9 }));
  p.position.set(0, 1.95, 0.035);
  g.add(p);
  return { object: g };
}

function neonSign(item, ctx) {
  const g = new THREE.Group();
  const post = mat('#1d1d24', { roughness: 0.5, metalness: 0.4 });
  for (const s of [-1, 1]) g.add(cyl(0.04, 0.04, 2.0, post, s * 1.3, 1.0, -0.05, 8));
  g.add(rbox(3.4, 1.25, 0.08, mat('#121218', { roughness: 0.6 }), 0, 2.35, -0.05, 0.03));
  const color = new THREE.Color(item.color || '#ff5fa2');
  const neonM = new THREE.MeshBasicMaterial({ map: TX.neonText(item.text || 'chill', item.color || '#ff5fa2'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: new THREE.Color(2.4, 2.4, 2.4) });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.0), neonM);
  sign.position.set(0, 2.35, 0.0);
  g.add(sign);
  const light = new THREE.PointLight(color, 5, 9, 1.8);
  light.position.set(0, 2.2, 0.8);
  g.add(light);
  ctx.animate((dt, t) => {
    const flick = Math.sin(t * 0.7) > 0.985 ? 0.4 : 1;
    neonM.color.setScalar(2.4 * flick);
    light.intensity = 5 * flick;
  });
  return { object: g };
}

function pergola(item, ctx) {
  const g = new THREE.Group();
  const wood = mat('#2b2622', { roughness: 0.6, metalness: 0.2 });
  const { w, d } = item;
  const H = 3.0;
  for (const sx of [-1, 0, 1]) for (const sz of [-1, 1]) g.add(box(0.14, H, 0.14, wood, (sx * w) / 2, H / 2, (sz * d) / 2));
  for (const sz of [-1, 1]) g.add(box(w + 0.4, 0.2, 0.12, wood, 0, H, (sz * d) / 2));
  for (let x = -w / 2; x <= w / 2 + 0.01; x += w / 10) g.add(box(0.07, 0.12, d + 0.5, wood, x, H + 0.15, 0));
  const segs = [];
  for (let i = 0; i <= 4; i++) {
    const x = -w / 2 + 0.5 + (i * (w - 1)) / 4;
    segs.push([new THREE.Vector3(x, H - 0.1, -d / 2), new THREE.Vector3(x + (i % 2 ? -1 : 1) * 0.8, H - 0.1, d / 2)]);
  }
  g.add(stringOfLights(segs, { sag: 0.6, spacing: 0.35 }));
  for (const x of [-w / 4, w / 4]) {
    const l = new THREE.PointLight('#ffcf8a', ctx.theme.pergolaLight ?? 6, 9, 1.8);
    l.position.set(x, H - 0.6, 0);
    g.add(l);
  }
  return { object: g };
}

function stringLightsItem(item, ctx) {
  const g = new THREE.Group();
  const pts = item.points.map(([x, z]) => new THREE.Vector3(x, item.height, z));
  const wood = mat('#4a3426', { roughness: 0.7 });
  for (const p of pts) g.add(cyl(0.05, 0.06, item.height + 0.1, wood, p.x, item.height / 2, p.z, 8));
  const segs = [];
  for (let i = 0; i < pts.length - 1; i++) segs.push([pts[i], pts[i + 1]]);
  g.add(stringOfLights(segs, { sag: 0.7, spacing: 0.45 }));
  for (let i = 0; i < segs.length; i++) {
    const mid = new THREE.Vector3().lerpVectors(segs[i][0], segs[i][1], 0.5);
    const l = new THREE.PointLight('#ffcf8a', ctx.theme.stringLight ?? 4, 10, 1.8);
    l.position.set(mid.x * 0.85, item.height - 0.9, mid.z * 0.85);
    g.add(l);
  }
  return { object: g, absolute: true };
}

function firepit(item, ctx) {
  const g = new THREE.Group();
  const stone = mat('#6b6660', { roughness: 0.95, flatShading: true });
  const n = 14;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const s = new THREE.Mesh(geo('pitstone', () => new THREE.DodecahedronGeometry(0.2, 0)), stone);
    s.position.set(Math.cos(a) * 0.72, 0.16, Math.sin(a) * 0.72);
    s.scale.set(1.1, 0.8, 0.9);
    s.rotation.set(a, a * 2, 0);
    s.castShadow = s.receiveShadow = true;
    g.add(s);
  }
  g.add(cyl(0.62, 0.62, 0.06, mat('#1a1410', { roughness: 1 }), 0, 0.04, 0, 20));
  const logM = mat('#4a3020', { roughness: 1 });
  for (let i = 0; i < 4; i++) {
    const l = cyl(0.06, 0.07, 0.8, logM, 0, 0.18, 0, 8);
    l.rotation.set(0.35, (i * Math.PI) / 2, Math.PI / 2);
    g.add(l);
  }
  const fire = makeFire(ctx, 1.1, 14);
  fire.position.y = 0.12;
  g.add(fire);
  return { object: g };
}

function cat(item, ctx) {
  const g = new THREE.Group();
  const fur = mat(item.color || '#e39b4b', { roughness: 1 });
  const light = mat('#f6e0c4', { roughness: 1 });
  const body = sphere(0.3, fur, 0, 0.16, 0, 18);
  body.scale.set(1, 0.55, 1.25);
  g.add(body);
  const head = new THREE.Group();
  head.position.set(0.12, 0.18, 0.3);
  head.add(sphere(0.13, fur, 0, 0, 0, 14));
  head.add(sphere(0.06, light, 0, -0.04, 0.09, 10));
  for (const s of [-1, 1]) {
    const ear = cyl(0, 0.05, 0.09, fur, s * 0.07, 0.11, 0, 4);
    ear.rotation.z = -s * 0.3;
    head.add(ear);
  }
  head.rotation.set(0.3, 0.4, 0.2);
  g.add(head);
  const tail = new THREE.Mesh(geo('cattail', () => new THREE.TorusGeometry(0.3, 0.045, 6, 20, Math.PI * 1.1)), fur);
  tail.rotation.set(Math.PI / 2, 0, 0.6);
  tail.position.y = 0.06;
  g.add(tail);
  const zz = emojiSprite('💤', 0.25);
  zz.material.opacity = 0;
  g.add(zz);
  let p = 0;
  ctx.animate((dt, t) => {
    body.scale.y = 0.55 + Math.sin(t * 1.6) * 0.02;
    p = (p + dt * 0.25) % 1;
    zz.position.set(0.2 + p * 0.2, 0.4 + p * 0.6, 0.3);
    zz.material.opacity = Math.sin(p * Math.PI) * 0.85;
  });
  return { object: g };
}

// ---------------------------------------------------------------- plants

function plant(item, ctx) {
  const kind = item.kind;
  const g = new THREE.Group();
  const greens = ctx.theme.greens || ['#2d6a4f', '#40916c', '#52b788', '#1b4332'];
  const leafM = (i = 0, rough = 0.55) => mat(greens[i % greens.length], { side: THREE.DoubleSide, roughness: rough });
  const foliage = new THREE.Group();

  if (kind === 'monstera') {
    const p = pot(ctx, 0.3, 0.5);
    g.add(p);
    foliage.position.y = 0.48;
    for (let i = 0; i < 10; i++) {
      foliage.add(leaf(leafM(i % 2), {
        w: 0.3 + ctx.rand() * 0.06, l: 0.55 + ctx.rand() * 0.12, tilt: 0.35 + ctx.rand() * 0.8,
        yaw: i * 2.4 + ctx.rand() * 0.4, stem: 0.35 + ctx.rand() * 0.4, droop: 0.35, stemMat: leafM(2),
      }));
    }
  } else if (kind === 'fiddle') {
    g.add(pot(ctx, 0.3, 0.5));
    g.add(cyl(0.035, 0.05, 1.6, mat('#6b4a32'), 0, 1.25, 0, 8));
    foliage.position.y = 0.5;
    for (let i = 0; i < 26; i++) {
      foliage.add(leaf(leafM(i % 2 ? 3 : 0, 0.35), {
        w: 0.15 + ctx.rand() * 0.04, l: 0.3 + ctx.rand() * 0.08, tilt: 0.5 + ctx.rand() * 0.9,
        yaw: i * 2.4, y: 0.6 + (i / 26) * 1.15, stem: 0.05, droop: 0.15,
      }));
    }
  } else if (kind === 'snake') {
    g.add(pot(ctx, 0.24, 0.42));
    foliage.position.y = 0.4;
    for (let i = 0; i < 11; i++) {
      foliage.add(leaf(mat(i % 3 ? '#355e3b' : '#4f7942', { side: THREE.DoubleSide, roughness: 0.5 }), {
        w: 0.06 + ctx.rand() * 0.02, l: 0.75 + ctx.rand() * 0.45, tilt: 0.05 + ctx.rand() * 0.28, yaw: i * 2.4, droop: 0.02,
      }));
    }
  } else if (kind === 'fern') {
    g.add(pot(ctx, 0.26, 0.42, '#b08968'));
    foliage.position.y = 0.42;
    for (let i = 0; i < 18; i++) {
      foliage.add(leaf(leafM(i % 3 === 0 ? 2 : 1), {
        w: 0.11, l: 0.6 + ctx.rand() * 0.2, tilt: 0.6 + ctx.rand() * 0.75, yaw: i * 2.4, droop: 0.55,
      }));
    }
  } else if (kind === 'cactus') {
    g.add(pot(ctx, 0.2, 0.32));
    const cm = mat('#5a8f4e', { roughness: 0.7 });
    const trunk = new THREE.Mesh(geo('cactusT', () => new THREE.CapsuleGeometry(0.11, 0.5, 6, 12)), cm);
    trunk.position.y = 0.66;
    trunk.castShadow = true;
    foliage.add(trunk);
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(geo('cactusA', () => new THREE.CapsuleGeometry(0.06, 0.18, 4, 10)), cm);
      arm.position.set(s * 0.16, 0.7 + s * 0.06, 0);
      arm.castShadow = true;
      foliage.add(arm);
    }
    foliage.add(sphere(0.045, mat('#f28482'), 0, 1.0, 0, 8));
  } else if (kind === 'palm') {
    g.add(pot(ctx, 0.36, 0.55, '#e9dccb'));
    const trunkM = mat('#8d6e4f', { roughness: 0.9 });
    let x = 0;
    for (let i = 0; i < 7; i++) {
      x += 0.025;
      g.add(cyl(0.065, 0.08, 0.3, trunkM, x, 0.7 + i * 0.27, 0, 8));
    }
    foliage.position.set(x, 2.5, 0);
    for (let i = 0; i < 10; i++) {
      foliage.add(leaf(leafM(i % 2 ? 1 : 0), { w: 0.2, l: 1.25 + ctx.rand() * 0.3, tilt: 1.0 + ctx.rand() * 0.55, yaw: i * 2.4, droop: 0.6, cup: 0.1 }));
    }
  } else if (kind === 'tree') {
    const s = item.small ? 0.6 : 1;
    if (item.small) g.add(pot(ctx, 0.45, 0.6, '#4a5d6b'));
    else {
      g.add(rbox(1.7, 0.55, 1.7, mat('#b5a493', { roughness: 0.9 }), 0, 0.275, 0, 0.05));
      g.add(box(1.5, 0.04, 1.5, mat('#3b2a20', { roughness: 1 }), 0, 0.54, 0));
    }
    g.add(cyl(0.09 * s, 0.16 * s, 2.7 * s, mat('#6b4a32', { roughness: 0.9 }), 0, 0.5 + 1.35 * s, 0, 10));
    const cm = [mat('#3a7d44', { flatShading: true }), mat('#57a55a', { flatShading: true }), mat('#2d6a4f', { flatShading: true })];
    for (let i = 0; i < 9; i++) {
      const a = i * 2.4;
      const r = i === 0 ? 0 : 0.6 + ctx.rand() * 0.5;
      foliage.add(blob((0.65 + ctx.rand() * 0.35) * s, cm[i % 3], Math.cos(a) * r * s, (3.0 + ctx.rand() * 0.8) * s + 0.3, Math.sin(a) * r * s));
    }
  } else if (kind === 'grass') {
    g.add(rbox(1.2, 0.5, 0.5, mat('#4a4f55', { roughness: 0.8 }), 0, 0.25, 0, 0.03));
    const gm = [mat('#7a9a4f'), mat('#a3b565'), mat('#5b7f3a')];
    foliage.position.y = 0.48;
    for (let i = 0; i < 34; i++) {
      const h = 0.6 + ctx.rand() * 0.6;
      const b = cyl(0.002, 0.025, h, gm[i % 3], (ctx.rand() - 0.5) * 1.0, h / 2, (ctx.rand() - 0.5) * 0.35, 4);
      b.rotation.set((ctx.rand() - 0.5) * 0.5, 0, (ctx.rand() - 0.5) * 0.5);
      b.castShadow = false;
      foliage.add(b);
    }
  } else if (kind === 'flowers') {
    g.add(rbox(1.2, 0.42, 0.5, mat('#9c6644', { roughness: 0.85 }), 0, 0.21, 0, 0.03));
    foliage.position.y = 0.42;
    for (let i = 0; i < 6; i++) foliage.add(blob(0.17 + ctx.rand() * 0.06, leafM(i), -0.45 + i * 0.18, 0.08, (ctx.rand() - 0.5) * 0.15));
    const fc = ['#f28482', '#f6bd60', '#ffffff', '#cdb4db', '#ff99c8'];
    for (let i = 0; i < 16; i++) foliage.add(sphere(0.045, mat(fc[i % fc.length], { roughness: 0.6 }), -0.5 + ctx.rand(), 0.2 + ctx.rand() * 0.12, (ctx.rand() - 0.5) * 0.3, 8));
  } else if (kind === 'hanging') {
    const top = ctx.theme.ceiling || 4.2;
    g.add(cyl(0.006, 0.006, top - 2.9, mat('#d8c3a5'), 0, (top + 2.9) / 2, 0, 4));
    const basket = new THREE.Mesh(geo('basket', () => new THREE.SphereGeometry(0.28, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2)), mat('#c9a46b', { roughness: 0.9, side: THREE.DoubleSide }));
    basket.position.y = 2.9;
    foliage.add(basket);
    foliage.position.y = 0;
    for (let i = 0; i < 5; i++) foliage.add(blob(0.13, leafM(i), Math.cos(i * 1.3) * 0.14, 2.95, Math.sin(i * 1.3) * 0.14));
    const vineM = leafM(1);
    for (let v = 0; v < 7; v++) {
      const a = (v / 7) * Math.PI * 2;
      const len = 4 + Math.floor(ctx.rand() * 6);
      for (let k = 0; k < len; k++) {
        const l = sphere(0.045, vineM, Math.cos(a) * (0.26 + k * 0.01), 2.85 - k * 0.11, Math.sin(a) * (0.26 + k * 0.01), 6);
        l.scale.set(1, 0.5, 1.4);
        l.castShadow = false;
        foliage.add(l);
      }
    }
    // let the whole basket swing gently from the ceiling point
    const pivot = new THREE.Group();
    pivot.position.y = top;
    foliage.position.y = -top;
    pivot.add(foliage);
    g.add(pivot);
    sway(ctx, pivot, 0.025, 0.6);
    return { object: g };
  }
  g.add(foliage);
  sway(ctx, foliage, kind === 'grass' ? 0.05 : 0.02, kind === 'grass' ? 1.4 : 0.8);
  return { object: g };
}

// ---------------------------------------------------------------- registry

export const BUILDERS = {
  sofa: (i, c) => couch(3, i, c),
  loveseat: (i, c) => couch(2, i, c),
  armchair: (i, c) => couch(1, i, c),
  beanbag, cushion: cushionSeat, chair, stool, swing: swingChair, lounger, hammock, bench,
  coffeeTable, roundTable, sideTable, rug: rugItem, bookshelf, fireplace, floorLamp, lantern,
  window: windowItem, counter, turntable, painting: paintingItem, neonSign, pergola,
  stringLights: stringLightsItem, firepit, cat, plant,
};
