import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { BUILDERS, mat, box, rbox, cyl, softDot, shade } from './furniture.js';
import * as TX from './textures.js';
import { roomMenu } from './shared.js';

// Pieces that hide together with the wall they lean against (dollhouse cutaway).
// Anything holding a light stays put so the light count never changes mid-frame.
const WALL_MOUNTED = new Set(['window', 'painting', 'bookshelf']);

const deg = THREE.MathUtils.degToRad;

function toWorld(item, lx, lz) {
  const yaw = deg(item.r || 0);
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return new THREE.Vector3(item.x + lx * c + lz * s, 0, item.z - lx * s + lz * c);
}

export function buildWorld(room, theme) {
  const root = new THREE.Group();
  const animators = [];
  const ctx = {
    theme,
    rand: TX.rng(TX.hashString(room.id)),
    animate: (fn) => animators.push(fn),
    menu: roomMenu(room),
  };
  const { w, d } = room.size;

  // ------------------------------------------------------------ light
  const hemi = new THREE.HemisphereLight(...theme.hemi);
  const key = new THREE.DirectionalLight(theme.key.color, theme.key.intensity);
  key.position.set(...theme.key.pos);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -13, right: 13, top: 13, bottom: -13, near: 1, far: 80 });
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.03;
  root.add(hemi, key, key.target);

  // ------------------------------------------------------------ floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshStandardMaterial({ map: theme.floor(), roughness: theme.floorRough ?? 0.75, metalness: theme.floorMetal ?? 0 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.userData.floor = true;
  root.add(floor);
  if (theme.outside !== 'city') {
    const depth = theme.slabDepth ?? 0.5;
    root.add(box(w + 0.4, depth, d + 0.4, mat(theme.slab, { roughness: 0.9 }), 0, -depth / 2 - 0.002, 0));
  }

  const walls = buildWalls(room, theme, root);
  const envMeshes = buildOutside(room, theme, root, ctx);
  buildParticles(room, theme, root, ctx);

  // ------------------------------------------------------------ furniture
  const seats = new Map();
  const pickables = [floor];
  let waiter = null;

  room.layout.forEach((item, index) => {
    const build = BUILDERS[item.type];
    if (!build) return;
    const out = build(item, ctx);
    const obj = out.object;
    if (!out.absolute) {
      obj.position.set(item.x, item.y || 0, item.z);
      obj.rotation.y = deg(item.r || 0);
    }
    const wall = WALL_MOUNTED.has(item.type) ? nearestWall(walls, item, w, d) : null;
    (wall ? wall.attach : root).add(obj);

    if (out.seats) {
      const yaw = deg(item.r || 0);
      out.seats.forEach((s, si) => {
        const id = `${index}:${si}`;
        const p = toWorld(item, s.x, s.z);
        const fwd = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
        seats.set(id, {
          id, index, rot: yaw,
          pos: new THREE.Vector3(p.x, s.y + (item.y || 0), p.z),
          approach: p.clone().addScaledVector(fwd, 0.75),
        });
      });
      obj.traverse((o) => {
        if (o.isMesh) {
          o.userData.furniture = index;
          pickables.push(o);
        }
      });
    }

    if (item.type === 'counter') {
      // the robot waiter lives behind the counter and walks around the end closest to the room centre
      const hw = out.halfWidth;
      const side = toWorld(item, hw + 0.7, 0).length() < toWorld(item, -hw - 0.7, 0).length() ? 1 : -1;
      waiter = {
        home: toWorld(item, side * (hw - 0.6), out.home.z),
        homeYaw: deg(item.r || 0),
        via: [toWorld(item, side * (hw + 0.7), out.home.z), toWorld(item, side * (hw + 0.7), 1.1)],
      };
    }
  });

  const bounds = { hw: w / 2 - 0.7, hd: d / 2 - 0.7 };

  return {
    root, seats, pickables, floor, waiter, bounds, envMeshes,
    update(dt, t, camera) {
      for (const fn of animators) fn(dt, t);
      for (const wall of walls) {
        if (!wall.cutaway) continue;
        const show = (camera.position.x - wall.px) * wall.nx + (camera.position.z - wall.pz) * wall.nz > 0;
        if (wall.full.visible !== show) {
          wall.full.visible = show;
          wall.attach.visible = show;
          if (wall.stub) wall.stub.visible = !show;
        }
      }
    },
    dispose() {
      root.traverse((o) => {
        if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
        const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
        for (const m of mats) {
          if (m.userData.shared) continue;
          for (const k of ['map', 'emissiveMap']) if (m[k] && !m[k].userData.shared) m[k].dispose();
          m.dispose();
        }
      });
    },
  };
}

function nearestWall(walls, item, w, d) {
  const dist = {
    back: Math.abs(item.z + d / 2), front: Math.abs(item.z - d / 2),
    left: Math.abs(item.x + w / 2), right: Math.abs(item.x - w / 2),
  };
  let best = null;
  for (const wall of walls) if (dist[wall.name] < 0.8 && (!best || dist[wall.name] < dist[best.name])) best = wall;
  return best;
}

// ---------------------------------------------------------------- walls

function buildWalls(room, theme, root) {
  const { w, d } = room.size;
  const spec = theme.walls;
  const H = spec.height;
  const T = 0.2;
  const sides = [
    { name: 'back', len: w, px: 0, pz: -d / 2, nx: 0, nz: 1, rot: 0 },
    { name: 'front', len: w, px: 0, pz: d / 2, nx: 0, nz: -1, rot: Math.PI },
    { name: 'left', len: d, px: -w / 2, pz: 0, nx: 1, nz: 0, rot: Math.PI / 2 },
    { name: 'right', len: d, px: w / 2, pz: 0, nx: -1, nz: 0, rot: -Math.PI / 2 },
  ];
  const walls = [];

  for (const s of sides) {
    const frame = new THREE.Group();
    frame.position.set(s.px, 0, s.pz);
    frame.rotation.y = s.rot;
    root.add(frame);
    const full = new THREE.Group();
    const attach = new THREE.Group();
    frame.add(full);
    root.add(attach);
    const L = s.len + 0.4;
    let stub = null;
    let cutaway = false;

    if (spec.kind === 'solid') {
      cutaway = true;
      const paper = TX.wallpaper({ ...spec.paper, repeat: [s.len / 1.6, 1] });
      full.add(box(L, H, T, new THREE.MeshStandardMaterial({ map: paper, roughness: 0.95 }), 0, H / 2, -T / 2));
      full.add(box(L, 1.05, 0.06, mat(spec.wainscot, { roughness: 0.6 }), 0, 0.525, 0.03));
      for (let x = -s.len / 2 + 0.6; x < s.len / 2; x += 1.2) full.add(box(0.5, 0.6, 0.02, mat(spec.wainscot, { roughness: 0.5 }), x, 0.55, 0.07));
      full.add(box(L, 0.07, 0.11, mat(spec.trim), 0, 1.07, 0.04));
      full.add(box(L, 0.14, 0.12, mat(spec.trim), 0, H - 0.07, 0.03));
      full.add(box(L, 0.04, T + 0.02, mat(spec.trim), 0, H + 0.02, -T / 2));
      stub = new THREE.Group();
      stub.add(box(L, 0.32, T, mat(spec.trim), 0, 0.16, -T / 2));
      stub.visible = false;
      frame.add(stub);
    } else if (spec.kind === 'glass') {
      cutaway = true;
      const frameM = mat(spec.frame, { roughness: 0.5 });
      frame.add(box(L, 0.6, T, mat(spec.knee, { roughness: 0.9 }), 0, 0.3, -T / 2));
      frame.add(box(L, 0.06, T + 0.06, mat(spec.frame), 0, 0.62, -T / 2));
      const glass = box(s.len, H - 0.6, 0.03, mat('#d8f0ff', { transparent: true, opacity: 0.14, roughness: 0.05, metalness: 0.2, depthWrite: false }), 0, 0.6 + (H - 0.6) / 2, -0.1);
      glass.castShadow = false;
      full.add(glass);
      for (let x = -s.len / 2; x <= s.len / 2 + 0.01; x += s.len / Math.round(s.len / 1.5)) full.add(box(0.08, H - 0.6, 0.12, frameM, x, 0.6 + (H - 0.6) / 2, -0.1));
      for (const y of [2.4, H]) full.add(box(L, 0.08, 0.14, frameM, 0, y, -0.1));
    } else if (spec.kind === 'parapet') {
      frame.add(box(L + 0.2, H, 0.3, mat(spec.color, { roughness: 0.9 }), 0, H / 2, -0.15));
      frame.add(box(L + 0.2, 0.06, 0.36, mat(shade(spec.color, 0.06)), 0, H + 0.03, -0.15));
      const rail = cyl(0.03, 0.03, L, mat(spec.rail, { metalness: 0.7, roughness: 0.35 }), 0, H + 0.38, -0.15, 8);
      rail.rotation.z = Math.PI / 2;
      frame.add(rail);
      for (let x = -s.len / 2; x <= s.len / 2 + 0.01; x += 1.5) frame.add(cyl(0.02, 0.02, 0.38, mat(spec.rail, { metalness: 0.7, roughness: 0.35 }), x, H + 0.2, -0.15, 6));
    } else if (spec.kind === 'railing') {
      const wood = mat(spec.color, { roughness: 0.7 });
      const ropeM = mat(spec.rope, { roughness: 1 });
      const gap = s.name === 'front' ? 1.6 : -1;
      const n = Math.round(s.len / 1.5);
      for (let i = 0; i <= n; i++) {
        const x = -s.len / 2 + (i * s.len) / n;
        if (Math.abs(x) < gap) continue;
        frame.add(box(0.12, H, 0.12, wood, x, H / 2, -0.06));
      }
      const spans = gap > 0 ? [[-s.len / 2, -gap], [gap, s.len / 2]] : [[-s.len / 2, s.len / 2]];
      for (const [a, b] of spans) {
        const len = b - a;
        const cx = (a + b) / 2;
        frame.add(rbox(len + 0.12, 0.08, 0.16, wood, cx, H, -0.06, 0.02));
        for (const y of [0.4, 0.7]) {
          const r = cyl(0.018, 0.018, len, ropeM, cx, y, -0.06, 6);
          r.rotation.z = Math.PI / 2;
          r.castShadow = false;
          frame.add(r);
        }
      }
    }
    walls.push({ ...s, full, attach, stub, cutaway });
  }

  if (theme.roof) {
    const frameM = mat(spec.frame, { roughness: 0.5 });
    const rise = 1.5;
    const halfD = d / 2;
    const rafterLen = Math.hypot(halfD, rise);
    const ang = Math.atan2(rise, halfD);
    const slope = { [-1]: walls.find((wl) => wl.name === 'back').attach, 1: walls.find((wl) => wl.name === 'front').attach };
    for (let x = -w / 2; x <= w / 2 + 0.01; x += w / 6) {
      for (const s of [-1, 1]) {
        const r = box(0.08, 0.1, rafterLen, frameM, x, H + rise / 2, (s * halfD) / 2);
        r.rotation.x = s * ang;
        r.castShadow = false;
        slope[s].add(r);
      }
    }
    const ridge = box(w, 0.12, 0.12, frameM, 0, H + rise, 0);
    ridge.castShadow = false;
    root.add(ridge);
  }
  return walls;
}

// ---------------------------------------------------------------- outside

function skyDome(stops) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(400, 32, 24),
    new THREE.MeshBasicMaterial({ map: TX.skyGradient(stops), side: THREE.BackSide, fog: false, depthWrite: false }),
  );
  m.renderOrder = -10;
  return m;
}

function buildOutside(room, theme, root, ctx) {
  const { w, d } = room.size;
  const r = ctx.rand;
  const envMeshes = [];

  if (theme.sky) {
    const sky = skyDome(theme.sky);
    root.add(sky);
    envMeshes.push(sky);
  }

  if (theme.outside === 'garden') {
    const ground = new THREE.Mesh(new THREE.CircleGeometry(220, 48), mat('#86b35f', { roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    root.add(ground);
    const path = new THREE.Mesh(new THREE.PlaneGeometry(3, 40), mat('#d9c7a7', { roughness: 1 }));
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, -0.49, d / 2 + 20);
    root.add(path);
    const greens = [mat('#3a7d44', { flatShading: true }), mat('#57a55a', { flatShading: true }), mat('#2d6a4f', { flatShading: true })];
    const trunk = mat('#6b4a32');
    const blobGeo = new THREE.IcosahedronGeometry(1, 1);
    for (let i = 0; i < 70; i++) {
      const a = r() * Math.PI * 2;
      const dist = 13 + r() * 70;
      const x = Math.cos(a) * dist * 1.2;
      const z = Math.sin(a) * dist;
      if (Math.abs(x) < w / 2 + 2 && Math.abs(z) < d / 2 + 2) continue;
      const tree = r() < 0.55;
      const g = new THREE.Group();
      g.position.set(x, -0.5, z);
      if (tree) {
        const h = 2.5 + r() * 3;
        g.add(cyl(0.15, 0.25, h, trunk, 0, h / 2, 0, 8));
        for (let k = 0; k < 3; k++) {
          const b = new THREE.Mesh(blobGeo, greens[k]);
          const s = 1.2 + r() * 1.2;
          b.scale.setScalar(s);
          b.position.set((r() - 0.5) * 1.5, h + (r() - 0.3) * 1.2, (r() - 0.5) * 1.5);
          b.castShadow = true;
          g.add(b);
        }
      } else {
        const b = new THREE.Mesh(blobGeo, greens[i % 3]);
        b.scale.set(0.8 + r(), 0.6 + r() * 0.5, 0.8 + r());
        b.position.y = 0.3;
        g.add(b);
      }
      root.add(g);
    }
  }

  if (theme.outside === 'city') {
    // the building we're standing on
    const towerTex = TX.windowsTexture(11, 0.3);
    towerTex.repeat.set(3, 10);
    const tower = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.4, 60, d + 0.4),
      new THREE.MeshStandardMaterial({ color: '#1a1f2b', map: towerTex, emissive: '#ffffff', emissiveMap: towerTex, emissiveIntensity: 0.7, roughness: 0.8 }),
    );
    tower.position.y = -30.002;
    tower.receiveShadow = true;
    root.add(tower);

    const geos = [];
    const beacons = [];
    for (let i = 0; i < 150; i++) {
      const a = r() * Math.PI * 2;
      const dist = 36 + r() * 110;
      const bw = 6 + r() * 12;
      const bd = 6 + r() * 12;
      const top = -42 + r() * 50 + (dist > 80 ? 14 : 0);
      const h = top + 140;
      const g = new THREE.BoxGeometry(bw, h, bd);
      // scale UVs so window size stays constant regardless of building size
      const uv = g.attributes.uv;
      const faces = [[bd, h], [bd, h], [0, 0], [0, 0], [bw, h], [bw, h]];
      faces.forEach(([fw, fh], f) => {
        for (let k = 0; k < 4; k++) {
          const idx = f * 4 + k;
          uv.setXY(idx, uv.getX(idx) * fw / 8, uv.getY(idx) * fh / 16);
        }
      });
      g.rotateY(r() * Math.PI);
      g.translate(Math.cos(a) * dist, top - h / 2, Math.sin(a) * dist);
      geos.push(g);
      if (top > 4 && beacons.length < 12) beacons.push(new THREE.Vector3(Math.cos(a) * dist, top + 0.6, Math.sin(a) * dist));
    }
    const cityTex = TX.windowsTexture(12, 0.32);
    const city = new THREE.Mesh(
      mergeGeometries(geos),
      new THREE.MeshStandardMaterial({ color: '#141926', map: cityTex, emissive: '#ffffff', emissiveMap: cityTex, emissiveIntensity: 0.65, roughness: 0.9 }),
    );
    geos.forEach((g) => g.dispose());
    root.add(city);
    const beaconM = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff3030').multiplyScalar(4) });
    const beaconMeshes = beacons.map((p) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), beaconM);
      m.position.copy(p);
      root.add(m);
      return m;
    });
    ctx.animate((dt, t) => {
      const on = Math.sin(t * 2.2) > 0.4;
      for (const m of beaconMeshes) m.visible = on;
    });
  }

  if (theme.outside === 'ocean') {
    const geo = new THREE.PlaneGeometry(600, 600, 90, 90);
    geo.rotateX(-Math.PI / 2);
    const base = geo.attributes.position.array.slice();
    const ocean = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: '#3b7f9f', roughness: 0.34, metalness: 0.3, envMapIntensity: 1.2 }));
    ocean.position.y = -1.3;
    ocean.receiveShadow = true;
    root.add(ocean);
    const pos = geo.attributes.position;
    let acc = 0;
    ctx.animate((dt, t) => {
      acc += dt;
      if (acc < 1 / 30) return;
      acc = 0;
      for (let i = 0; i < pos.count; i++) {
        const x = base[i * 3];
        const z = base[i * 3 + 2];
        pos.array[i * 3 + 1] = Math.sin(x * 0.12 + t * 0.9) * 0.25 + Math.sin(z * 0.17 + t * 1.3) * 0.2 + Math.sin((x + z) * 0.31 + t * 1.7) * 0.08;
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
    });
    // pilings
    const piling = mat('#5a4030', { roughness: 0.9 });
    for (const x of [-w / 2, -w / 6, w / 6, w / 2]) for (const z of [-d / 2, d / 2]) root.add(cyl(0.18, 0.2, 3, piling, x, -1.6, z, 10));
    // sun
    const sunTex = softDot();
    const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, color: new THREE.Color('#ffb36b').multiplyScalar(0.7), fog: false, depthWrite: false, blending: THREE.AdditiveBlending }));
    sun.scale.set(40, 40, 1);
    sun.position.set(-20, 14, -330);
    root.add(sun);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(9, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color('#fff0c0').multiplyScalar(1.3), fog: false }));
    disc.position.set(-20, 12, -335);
    root.add(disc);
    // islands
    const islandM = mat('#5a4a6b', { flatShading: true, roughness: 1, fog: true });
    for (const [x, z, s] of [[-140, -260, 30], [90, -280, 45], [190, -220, 22]]) {
      const isl = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), islandM);
      isl.scale.set(s, s * 0.25, s * 0.6);
      isl.position.set(x, -1.5, z);
      root.add(isl);
    }
    // gulls
    const gullM = new THREE.LineBasicMaterial({ color: '#3a2f45' });
    const gulls = [];
    for (let i = 0; i < 5; i++) {
      const gg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-0.6, 0.2, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.6, 0.2, 0)]);
      const l = new THREE.Line(gg, gullM);
      root.add(l);
      gulls.push({ l, r: 25 + r() * 25, h: 9 + r() * 6, s: 0.08 + r() * 0.06, ph: r() * 6, cz: -30 - r() * 20 });
    }
    ctx.animate((dt, t) => {
      for (const g of gulls) {
        const a = t * g.s + g.ph;
        g.l.position.set(Math.cos(a) * g.r, g.h + Math.sin(a * 3) * 0.6, g.cz + Math.sin(a) * g.r * 0.4);
        const p = g.l.geometry.attributes.position;
        const flap = Math.sin(t * 6 + g.ph) * 0.3;
        p.setY(0, flap);
        p.setY(2, flap);
        p.needsUpdate = true;
      }
    });
  }
  return envMeshes;
}

// ---------------------------------------------------------------- particles

function buildParticles(room, theme, root, ctx) {
  const { w, d } = room.size;
  const r = ctx.rand;
  const kind = theme.particles;

  if (kind === 'dust' || kind === 'pollen') {
    const n = 260;
    const pos = new Float32Array(n * 3);
    const seeds = [];
    for (let i = 0; i < n; i++) {
      seeds.push({ x: (r() - 0.5) * w, y: 0.3 + r() * 3.6, z: (r() - 0.5) * d, p: r() * 10 });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
      map: softDot(), color: new THREE.Color(theme.dustColor).multiplyScalar(1.4), size: 0.07,
      transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    pts.frustumCulled = false;
    root.add(pts);
    ctx.animate((dt, t) => {
      for (let i = 0; i < n; i++) {
        const s = seeds[i];
        pos[i * 3] = s.x + Math.sin(t * 0.13 + s.p) * 0.6;
        pos[i * 3 + 1] = s.y + Math.sin(t * 0.21 + s.p * 2) * 0.35;
        pos[i * 3 + 2] = s.z + Math.cos(t * 0.11 + s.p) * 0.6;
      }
      geo.attributes.position.needsUpdate = true;
    });
  }

  if (kind === 'pollen') {
    // a few butterflies flitting between the plants
    const wingGeo = new THREE.CircleGeometry(0.12, 10);
    const cols = ['#f6bd60', '#f28482', '#84a59d', '#a2d2ff'];
    for (let i = 0; i < 4; i++) {
      const b = new THREE.Group();
      const wm = new THREE.MeshStandardMaterial({ color: cols[i], side: THREE.DoubleSide, roughness: 0.6 });
      const wings = [-1, 1].map((s) => {
        const pivot = new THREE.Group();
        const m = new THREE.Mesh(wingGeo, wm);
        m.position.x = s * 0.11;
        m.rotation.x = -Math.PI / 2;
        pivot.add(m);
        b.add(pivot);
        return { pivot, s };
      });
      root.add(b);
      const ph = r() * 20;
      const rad = 2 + r() * 4;
      ctx.animate((dt, t) => {
        const a = t * 0.25 + ph;
        b.position.set(Math.cos(a) * rad + Math.sin(a * 2.3) * 1.2, 1.6 + Math.sin(a * 3.1) * 0.7, Math.sin(a * 0.8) * rad * 0.8);
        b.rotation.y = -a;
        for (const wg of wings) wg.pivot.rotation.z = wg.s * Math.sin(t * 22 + ph) * 0.9;
      });
    }
  }

  if (kind === 'rain') {
    const n = 2200;
    const area = 46;
    const top = 22;
    const pos = new Float32Array(n * 6);
    const speed = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (r() - 0.5) * area;
      const y = r() * top - 4;
      const z = (r() - 0.5) * area;
      pos.set([x, y, z, x + 0.03, y + 0.45, z], i * 6);
      speed[i] = 13 + r() * 5;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const rain = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: '#9fb4d8', transparent: true, opacity: 0.35, depthWrite: false }));
    rain.frustumCulled = false;
    root.add(rain);
    ctx.animate((dt) => {
      for (let i = 0; i < n; i++) {
        const o = i * 6;
        const dy = speed[i] * dt;
        pos[o + 1] -= dy;
        pos[o + 4] -= dy;
        pos[o] -= dy * 0.06;
        pos[o + 3] -= dy * 0.06;
        const floorY = Math.abs(pos[o]) < w / 2 && Math.abs(pos[o + 2]) < d / 2 ? 0 : -6;
        if (pos[o + 1] < floorY) {
          const x = (Math.random() - 0.5) * area;
          const z = (Math.random() - 0.5) * area;
          const y = top - 4 + Math.random() * 2;
          pos.set([x, y, z, x + 0.03, y + 0.45, z], o);
        }
      }
      geo.attributes.position.needsUpdate = true;
    });
  }

  if (kind === 'fireflies') {
    const flies = [];
    for (let i = 0; i < 36; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDot(), color: new THREE.Color('#e9ff8a').multiplyScalar(2.5), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      s.scale.setScalar(0.12);
      const edge = r() < 0.5;
      const x = edge ? (r() < 0.5 ? -1 : 1) * (w / 2 - 0.5 - r() * 2) : (r() - 0.5) * w;
      const z = edge ? (r() - 0.5) * d : (r() < 0.5 ? -1 : 1) * (d / 2 - 0.5 - r() * 2);
      flies.push({ s, x, z, y: 0.5 + r() * 2.2, p: r() * 20 });
      root.add(s);
    }
    ctx.animate((dt, t) => {
      for (const f of flies) {
        f.s.position.set(f.x + Math.sin(t * 0.4 + f.p) * 0.8, f.y + Math.sin(t * 0.7 + f.p * 1.7) * 0.4, f.z + Math.cos(t * 0.33 + f.p) * 0.8);
        f.s.material.opacity = Math.max(0, Math.sin(t * 1.3 + f.p * 3));
      }
    });
  }
}
