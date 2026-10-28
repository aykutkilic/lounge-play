import * as THREE from 'three';
import { leatherCover, leatherPlain, marbled, pageEdges } from './textures.js';
import { openBook, saveProgress } from './library.js';

// First-person reading: a leather-bound book held in your hands, pages you turn
// by dragging (or clicking / arrow keys), and oversized pages that unfold.
// The book, hands and unfolded sheets live in camera space.

const PAGE_H = 0.25; // metres
const FLIP_SEGMENTS = 28;
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

function pageMaterial() {
  // a little self-light so print stays readable in dim rooms
  return new THREE.MeshStandardMaterial({ roughness: 0.92, emissive: '#ffffff', emissiveIntensity: 0.2 });
}

function setMap(mesh, tex) {
  mesh.material.map = tex;
  mesh.material.emissiveMap = tex;
}

function makeHand(color, side) {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.75 });
  const palm = new THREE.Mesh(new THREE.SphereGeometry(0.026, 16, 12), m);
  palm.scale.set(1, 1.3, 0.55);
  palm.position.set(side * 0.014, 0, -0.012);
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.028, 4, 8), m);
  thumb.position.set(-side * 0.008, 0.004, 0.006);
  thumb.rotation.z = side * 1.25;
  const fingers = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.03, 4, 8), m);
  fingers.position.set(side * 0.006, 0.022, -0.012);
  fingers.rotation.z = side * 0.4;
  const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.2, 6, 12), m);
  arm.position.set(side * 0.05, -0.11, -0.03);
  arm.rotation.z = side * 0.45;
  g.add(palm, thumb, fingers, arm);
  return g;
}

export class Reader {
  constructor({ camera, onClose, onChange }) {
    this.camera = camera;
    this.onClose = onClose;
    this.onChange = onChange;
    this.active = false;
    this.rig = new THREE.Group();
    this.rig.visible = false;
    camera.add(this.rig);
    // always present (dark when not reading) so the scene's light count never changes
    this.lamp = new THREE.PointLight('#ffe3bd', 0, 2.2, 1.6);
    this.lamp.position.set(0.22, 0.3, 0.05);
    camera.add(this.lamp);
    this.look = new THREE.Vector2();
    this.lookTarget = new THREE.Vector2();
    this.ray = new THREE.Raycaster();
  }

  // ---------------------------------------------------------------- open / close

  async open(book, { handColor, eye, yaw }) {
    if (this.active) return;
    this.active = true;
    this.closing = false;
    this.book = book;
    this.eye = eye.clone();
    this.yaw = yaw;
    this.returnPos = this.camera.position.clone();
    this.returnQuat = this.camera.quaternion.clone();
    this.camT = 0;
    this.openT = 0;
    this.zoom = 0.6;
    this.flip = null;
    this.sheet = null;
    this.textures = new Map();
    this.disposables = [];
    try {
      this.pdf = await openBook(book);
    } catch (err) {
      console.warn('[lounge] could not open book', err);
      this.active = false;
      this.onClose?.(false);
      return;
    }
    this.pages = this.pdf.pages;
    this.build(handColor);
    this.spread = Math.min(Math.floor((book.lastPage || 1) / 2), Math.floor(this.pages / 2));
    this.showSpread();
    this.rig.visible = true;
  }

  close() {
    if (!this.active || this.closing) return;
    if (this.sheet) this.sheet.dir = -1;
    this.closing = true;
    this.closeT = 0;
  }

  finish() {
    this.rig.visible = false;
    this.lamp.intensity = 0;
    for (const d of this.disposables) d.dispose();
    for (const e of this.textures.values()) { e.front.dispose(); e.back.dispose(); }
    if (this.sheet) this.disposeSheet();
    this.rig.clear();
    this.pdf?.close();
    this.pdf = null;
    this.active = false;
    this.onClose?.(true);
  }

  // ---------------------------------------------------------------- building the book

  track(...things) {
    this.disposables.push(...things);
    return things[0];
  }

  build(handColor) {
    const book = this.book;
    const H = PAGE_H;
    const W = H * Math.min(1, Math.max(0.5, book.pageW / book.pageH));
    this.W = W;
    this.H = H;
    this.thick = 0.004 + 0.022 * Math.min(1, this.pages / 400);

    const holder = new THREE.Group(); // placement in front of the face
    this.rig.add(holder);
    this.holder = holder;
    const group = new THREE.Group(); // the book itself; spine on the y axis, pages face +z
    group.rotation.x = -0.5;
    holder.add(group);
    this.group = group;

    const leather = this.track(leatherPlain(book.leather));
    const cover = this.track(leatherCover(book.leather, book.name, W / H));
    this.endpaper = this.track(marbled(book.pages));
    const edgeTex = this.track(pageEdges());
    const boardGeo = this.track(new THREE.BoxGeometry(W + 0.01, H + 0.014, 0.004));
    const leatherM = this.track(new THREE.MeshStandardMaterial({ map: leather, roughness: 0.6 }));
    const coverM = this.track(new THREE.MeshStandardMaterial({ map: cover, roughness: 0.55 }));
    const insideM = this.track(new THREE.MeshStandardMaterial({ map: this.endpaper, roughness: 0.8 }));
    const edgeM = this.track(new THREE.MeshStandardMaterial({ map: edgeTex, color: '#f3ead6', roughness: 0.95 }));
    const hidden = this.track(new THREE.MeshBasicMaterial({ visible: false })); // the page itself covers the block's top
    const blockGeo = this.track(new THREE.BoxGeometry(1, 1, 1));

    const half = (side) => {
      const g = new THREE.Group();
      const board = new THREE.Mesh(boardGeo, side > 0 ? [leatherM, leatherM, leatherM, leatherM, insideM, leatherM] : [leatherM, leatherM, leatherM, leatherM, insideM, coverM]);
      board.position.x = side * (W + 0.01) / 2;
      const block = new THREE.Mesh(blockGeo, [edgeM, edgeM, edgeM, edgeM, hidden, edgeM]);
      block.position.x = side * W / 2;
      g.add(board, block);
      const geo = this.track(new THREE.PlaneGeometry(W, H, 24, 1));
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i) + side * W / 2;
        const u = Math.abs(x) / W;
        pos.setXYZ(i, x, pos.getY(i), 0.0008 - 0.006 * Math.exp(-u * 10) + 0.003 * u * (1 - u));
      }
      geo.computeVertexNormals();
      const page = new THREE.Mesh(geo, this.track(pageMaterial()));
      g.add(page);
      return { g, board, block, page };
    };
    this.left = half(-1);
    this.right = half(1);
    group.add(this.left.g, this.right.g);
    const spine = new THREE.Mesh(this.track(new THREE.CylinderGeometry(1, 1, H + 0.014, 16, 1, false, Math.PI / 2, Math.PI)), leatherM);
    spine.rotation.z = 0;
    this.spineMesh = spine;
    group.add(spine);

    // the turning page: one deformable sheet, printed on both sides
    this.flipGeo = this.track(new THREE.PlaneGeometry(W, H, FLIP_SEGMENTS, 1));
    this.flipFront = new THREE.Mesh(this.flipGeo, this.track(pageMaterial()));
    this.flipBack = new THREE.Mesh(this.flipGeo, this.track(pageMaterial()));
    this.flipBack.material.side = THREE.BackSide;
    this.flipFront.visible = this.flipBack.visible = false;
    group.add(this.flipFront, this.flipBack);

    // ribbon bookmark
    const ribbon = new THREE.Mesh(this.track(new THREE.PlaneGeometry(0.005, H * 0.62)), this.track(new THREE.MeshStandardMaterial({ color: '#9b1c2c', roughness: 0.5, side: THREE.DoubleSide })));
    ribbon.position.set(0.005, -H * 0.25, 0.0025);
    ribbon.rotation.z = 0.02;
    this.ribbon = ribbon;
    group.add(ribbon);

    this.hands = [-1, 1].map((side) => {
      const h = makeHand(handColor, side);
      h.scale.setScalar(0.85);
      h.traverse((o) => { if (o.material) this.track(o.material, o.geometry); });
      group.add(h);
      return { mesh: h, side, rest: new THREE.Vector3(side * (W + 0.008), -H * 0.22, 0.004) };
    });

    this.layoutBlocks();
  }

  layoutBlocks() {
    const progress = this.pages ? Math.min(1, (this.spread * 2) / this.pages) : 0;
    const tl = Math.max(0.0008, this.thick * progress);
    const tr = Math.max(0.0008, this.thick * (1 - progress));
    for (const [h, t] of [[this.left, tl], [this.right, tr]]) {
      h.block.scale.set(this.W, this.H, t);
      h.block.position.z = -t / 2;
      h.board.position.z = -t - 0.002;
      h.depth = t;
    }
    const r = (tl + tr) / 2 + 0.004;
    this.spineMesh.scale.set(r, 1, r);
    this.spineMesh.position.z = -r;
  }

  // ---------------------------------------------------------------- page textures

  pageTex(n, back = false) {
    if (n < 1 || n > this.pages) return this.endpaper;
    let e = this.textures.get(n);
    if (!e) {
      const h = Math.round(Math.min(1536, Math.max(768, innerHeight * Math.min(devicePixelRatio, 2) * 0.8)));
      const canvas = document.createElement('canvas');
      canvas.height = h;
      canvas.width = Math.round((h * this.W) / this.H);
      const g = canvas.getContext('2d');
      g.fillStyle = this.pdf.paper;
      g.fillRect(0, 0, canvas.width, canvas.height);
      const front = new THREE.CanvasTexture(canvas);
      const backTex = new THREE.CanvasTexture(canvas);
      for (const t of [front, backTex]) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; }
      backTex.repeat.x = -1;
      backTex.offset.x = 1;
      e = { canvas, front, back: backTex, used: 0 };
      this.textures.set(n, e);
      const pdf = this.pdf;
      pdf.renderInto(n, canvas).then(() => {
        if (this.pdf !== pdf) return;
        front.needsUpdate = true;
        backTex.needsUpdate = true;
      }).catch(() => {});
      this.evict();
    }
    e.used = performance.now();
    return back ? e.back : e.front;
  }

  evict() {
    if (this.textures.size <= 12) return;
    const keep = new Set([2, 1, 0, -1, 3, 4, 5].map((d) => this.spread * 2 + d));
    const old = [...this.textures.entries()].filter(([n]) => !keep.has(n)).sort((a, b) => a[1].used - b[1].used);
    for (const [n, e] of old.slice(0, this.textures.size - 12)) {
      e.front.dispose();
      e.back.dispose();
      this.textures.delete(n);
    }
  }

  showSpread() {
    const s = this.spread;
    setMap(this.left.page, this.pageTex(2 * s));
    setMap(this.right.page, this.pageTex(2 * s + 1));
    this.layoutBlocks();
    // warm up the pages around us
    for (const n of [2 * s + 2, 2 * s + 3, 2 * s - 1, 2 * s - 2]) this.pageTex(n);
    this.ribbon.visible = s > 0;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => saveProgress(this.book, Math.min(this.pages, 2 * s + 1)).catch(() => {}), 800);
    this.emitChange();
  }

  emitChange() {
    const s = this.spread;
    const l = 2 * s;
    const r = Math.min(this.pages, 2 * s + 1);
    const label = l >= 1 && r > l ? `${l}–${r}` : `${l >= 1 ? l : r}`;
    this.unfoldTarget().then((t) => {
      this.onChange?.({
        label: `${label} / ${this.pages}`,
        canPrev: s > 0,
        canNext: 2 * s + 1 < this.pages,
        unfold: t ? (t.large ? '🗺️' : '🔍') : null,
        unfolded: !!this.sheet,
      });
    });
  }

  // the page on this spread that most wants unfolding (a fold-out if any)
  async unfoldTarget() {
    if (!this.pdf) return null;
    const cands = [2 * this.spread + 1, 2 * this.spread].filter((n) => n >= 1 && n <= this.pages);
    let best = null;
    for (const n of cands) {
      const f = this.pdf.folds(await this.pdf.size(n));
      if (!best || (f.large && !best.large)) best = { n, ...f };
    }
    return best;
  }

  // ---------------------------------------------------------------- turning pages

  canTurn(dir) {
    if (!this.pdf || this.sheet || this.closing || this.openT < 0.85) return false;
    return dir > 0 ? 2 * this.spread + 1 <= this.pages : this.spread > 0;
  }

  startFlip(dir, auto) {
    if (this.flip || !this.canTurn(dir)) return false;
    const s = this.spread;
    if (dir > 0) {
      setMap(this.flipFront, this.pageTex(2 * s + 1));
      setMap(this.flipBack, this.pageTex(2 * s + 2, true));
      setMap(this.right.page, this.pageTex(2 * s + 3));
    } else {
      setMap(this.flipFront, this.pageTex(2 * s - 1));
      setMap(this.flipBack, this.pageTex(2 * s, true));
      setMap(this.left.page, this.pageTex(2 * s - 2));
    }
    this.flip = { dir, p: dir > 0 ? 0 : 1, target: dir > 0 ? 1 : 0, auto };
    this.flipFront.visible = this.flipBack.visible = true;
    this.deformFlip();
    return true;
  }

  turn(dir) {
    this.startFlip(dir, true);
  }

  deformFlip() {
    const f = this.flip;
    const W = this.W;
    const theta = Math.PI * f.p;
    const bend = -0.95 * Math.sin(theta) * f.dir;
    const pos = this.flipGeo.attributes.position;
    const cols = FLIP_SEGMENTS + 1;
    const lift = 0.0015 + (f.p < 0.5 ? this.right.depth * 0 : 0);
    let x = 0;
    let z = 0;
    const xs = [0];
    const zs = [0];
    for (let i = 0; i < FLIP_SEGMENTS; i++) {
      const u = (i + 0.5) / FLIP_SEGMENTS;
      const phi = Math.min(Math.PI, Math.max(0, theta + bend * u * u));
      x += (W / FLIP_SEGMENTS) * Math.cos(phi);
      z += (W / FLIP_SEGMENTS) * Math.sin(phi);
      xs.push(x);
      zs.push(z);
    }
    for (let row = 0; row < 2; row++) {
      for (let c = 0; c < cols; c++) {
        const i = row * cols + c;
        pos.setX(i, xs[c]);
        pos.setZ(i, zs[c] + lift);
      }
    }
    pos.needsUpdate = true;
    this.flipGeo.computeVertexNormals();
    this.flipCorner = new THREE.Vector3(xs[cols - 1], -this.H / 2 + 0.03, zs[cols - 1] + lift);
  }

  endFlip() {
    const f = this.flip;
    const done = (f.dir > 0 && f.p >= 1) || (f.dir < 0 && f.p <= 0);
    this.flip = null;
    this.flipFront.visible = this.flipBack.visible = false;
    if (done) this.spread += f.dir;
    this.showSpread();
  }

  // ---------------------------------------------------------------- unfolding

  async toggleUnfold() {
    if (this.sheet) { this.sheet.dir = -1; return; }
    if (this.flip || this.closing || !this.pdf) return;
    const target = await this.unfoldTarget();
    if (target) this.unfold(target.n);
  }

  async unfold(n) {
    const s = await this.pdf.size(n);
    const f = this.pdf.folds(s);
    const D = 0.42;
    const vh = 2 * D * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2);
    const vw = vh * this.camera.aspect;
    const k = Math.min((vw * 0.88) / s.w, (vh * 0.74) / s.h);
    const SW = s.w * k;
    const SH = s.h * k;
    const w = SW / f.cols;
    const h = SH / f.rows;

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    canvas.getContext('2d').fillStyle = this.pdf.paper;
    canvas.getContext('2d').fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const maxPx = Math.min(4096, this.camera.userData.maxTexture || 4096);
    const pdf = this.pdf;
    pdf.renderLarge(n, maxPx).then((big) => {
      const sh = this.sheet;
      if (this.pdf !== pdf || !sh || sh.tex !== tex) return;
      // GPU textures can't change size in place, so swap in a new one
      const hi = new THREE.CanvasTexture(big);
      hi.colorSpace = THREE.SRGBColorSpace;
      hi.anisotropy = 8;
      sh.front.map = sh.front.emissiveMap = hi;
      sh.tex = hi;
      tex.dispose();
    }).catch(() => {});

    const front = pageMaterial();
    front.map = front.emissiveMap = tex;
    const back = new THREE.MeshStandardMaterial({ color: this.pdf.paper, roughness: 0.95, side: THREE.BackSide });
    const root = new THREE.Group();
    const rows = [];
    for (let r = 0; r < f.rows; r++) {
      const rowGroup = new THREE.Group();
      const panels = [];
      for (let c = 0; c < f.cols; c++) {
        const geo = new THREE.PlaneGeometry(w, h);
        const uv = geo.attributes.uv;
        for (let i = 0; i < uv.count; i++) {
          uv.setXY(i, (c + uv.getX(i)) / f.cols, 1 - (r + 1 - uv.getY(i)) / f.rows);
        }
        const p = new THREE.Group();
        p.add(new THREE.Mesh(geo, front), new THREE.Mesh(geo, back));
        rowGroup.add(p);
        panels.push(p);
      }
      root.add(rowGroup);
      rows.push({ group: rowGroup, panels });
    }
    this.rig.add(root);

    // start exactly where the page sits in the book, then lift and unfold
    const pageMesh = n % 2 === 1 ? this.right.page : this.left.page;
    this.rig.updateMatrixWorld(true);
    const anchor = new THREE.Vector3(n % 2 === 1 ? this.W / 2 : -this.W / 2, 0, 0.004);
    pageMesh.parent.localToWorld(anchor);
    this.rig.worldToLocal(anchor);
    const q = new THREE.Quaternion();
    this.group.getWorldQuaternion(q);
    const rigQ = new THREE.Quaternion();
    this.rig.getWorldQuaternion(rigQ);
    q.premultiply(rigQ.invert());
    this.sheet = {
      n, root, rows, cols: f.cols, rowsN: f.rows, w, h, SW, SH, tex, front, back,
      t: 0, dir: 1, anchor, q, s0: Math.min(this.W / w, this.H / h) * 0.95, D,
      zoom: 1, pan: new THREE.Vector2(), vw, vh,
    };
    this.layoutSheet();
    this.emitChange();
  }

  layoutSheet() {
    const sh = this.sheet;
    const t = sh.t;
    const tLift = ease(clamp01(t / 0.3));
    const tRows = sh.rowsN > 1 ? ease(clamp01((t - 0.25) / 0.35)) : 1;
    const tCols = sh.cols > 1 ? ease(clamp01((t - (sh.rowsN > 1 ? 0.55 : 0.25)) / (sh.rowsN > 1 ? 0.45 : 0.6))) : 1;
    const dr = Math.PI * (1 - tRows) * 0.985;
    const dc = Math.PI * (1 - tCols) * 0.985;
    const stack = (1 - Math.min(tRows, tCols)) * 0.0012;

    // accordion chains: alternate hinges fold toward the viewer
    const colX = [];
    const colZ = [];
    const colPsi = [];
    let hx = 0;
    let hz = 0;
    let psi = 0;
    for (let c = 0; c < sh.cols; c++) {
      colPsi.push(psi);
      colX.push(hx + (sh.w / 2) * Math.cos(psi));
      colZ.push(hz + (sh.w / 2) * Math.sin(psi));
      hx += sh.w * Math.cos(psi);
      hz += sh.w * Math.sin(psi);
      psi = c % 2 === 0 ? dc : 0;
    }
    const xs = colX.map((x, c) => [x - (sh.w / 2) * Math.cos(colPsi[c]), x + (sh.w / 2) * Math.cos(colPsi[c])]).flat();
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;

    let hy = 0;
    hz = 0;
    psi = 0;
    const ys = [0];
    sh.rows.forEach((row, r) => {
      row.group.position.set(0, hy, hz);
      row.group.rotation.x = -psi;
      hy += -sh.h * Math.cos(psi);
      hz += sh.h * Math.sin(psi);
      ys.push(hy);
      psi = r % 2 === 0 ? dr : 0;
      row.panels.forEach((p, c) => {
        p.position.set(colX[c] - cx, -sh.h / 2, colZ[c] + (r * sh.cols + c) * stack);
        p.rotation.y = -colPsi[c];
      });
    });
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    for (const row of sh.rows) row.group.position.y -= cy;

    const target = new THREE.Vector3(sh.pan.x, sh.pan.y + sh.vh * 0.04, -sh.D);
    sh.root.position.lerpVectors(sh.anchor, target, tLift);
    sh.root.quaternion.slerpQuaternions(sh.q, new THREE.Quaternion(), tLift);
    sh.root.scale.setScalar(THREE.MathUtils.lerp(sh.s0, sh.zoom, tLift));
    sh.handBlend = tCols * tRows;
  }

  disposeSheet() {
    const sh = this.sheet;
    this.rig.remove(sh.root);
    sh.root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    sh.tex.dispose();
    sh.front.dispose();
    sh.back.dispose();
    this.sheet = null;
  }

  // ---------------------------------------------------------------- input

  pageHit(e) {
    const ndc = new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    this.ray.setFromCamera(ndc, this.camera);
    const hit = this.ray.intersectObjects([this.left.page, this.right.page], false)[0];
    if (!hit) return 0;
    return hit.object === this.right.page ? 1 : -1;
  }

  pageWidthPx() {
    const a = new THREE.Vector3(0, 0, 0);
    const b = new THREE.Vector3(this.W, 0, 0);
    this.group.localToWorld(a).project(this.camera);
    this.group.localToWorld(b).project(this.camera);
    return Math.max(60, Math.abs(b.x - a.x) * innerWidth * 0.5);
  }

  pointerDown(e) {
    if (!this.active || this.closing) return;
    if (this.sheet) {
      this.drag = { kind: 'pan', x: e.clientX, y: e.clientY };
      return;
    }
    const side = this.pageHit(e);
    if (side) this.drag = { kind: 'page', dir: side, x0: e.clientX, started: false, px: this.pageWidthPx(), t: e.timeStamp };
  }

  pointerMove(e) {
    if (!this.active) return;
    const d = this.drag;
    if (!d) {
      this.lookTarget.set(((e.clientX / innerWidth) * 2 - 1) * -0.16, ((e.clientY / innerHeight) * 2 - 1) * -0.08);
      return;
    }
    if (d.kind === 'pan' && this.sheet) {
      const sh = this.sheet;
      sh.pan.x += ((e.clientX - d.x) / innerWidth) * sh.vw;
      sh.pan.y -= ((e.clientY - d.y) / innerHeight) * sh.vh;
      const mx = (sh.SW * sh.zoom) / 2;
      const my = (sh.SH * sh.zoom) / 2;
      sh.pan.x = THREE.MathUtils.clamp(sh.pan.x, -mx, mx);
      sh.pan.y = THREE.MathUtils.clamp(sh.pan.y, -my, my);
      d.x = e.clientX;
      d.y = e.clientY;
      return;
    }
    if (d.kind !== 'page') return;
    const dx = e.clientX - d.x0;
    if (!d.started && Math.abs(dx) > 6) d.started = this.startFlip(d.dir, false);
    if (d.started && this.flip) {
      const k = clamp01(((d.dir > 0 ? -dx : dx) / (d.px * 1.6)));
      this.flip.p = d.dir > 0 ? k : 1 - k;
      this.deformFlip();
    }
  }

  pointerUp(e) {
    const d = this.drag;
    this.drag = null;
    if (!d || !this.active || d.kind !== 'page') return;
    if (d.started && this.flip) {
      const k = d.dir > 0 ? this.flip.p : 1 - this.flip.p;
      const go = k > 0.3;
      this.flip.target = go === (d.dir > 0) ? 1 : 0;
      this.flip.auto = true;
    } else if (!d.started && e.timeStamp - d.t < 500) {
      this.turn(d.dir);
    }
  }

  doubleClick(e) {
    if (!this.active || this.sheet || this.flip) return;
    const side = this.pageHit(e);
    const n = side > 0 ? 2 * this.spread + 1 : 2 * this.spread;
    if (side && n >= 1 && n <= this.pages) this.unfold(n);
  }

  wheel(e) {
    if (!this.active) return;
    if (this.sheet && this.sheet.t >= 1) {
      this.sheet.zoom = THREE.MathUtils.clamp(this.sheet.zoom * 1.0015 ** -e.deltaY, 1, 6);
    } else {
      this.zoom = THREE.MathUtils.clamp(this.zoom + e.deltaY * 0.0004, 0.32, 0.7);
    }
  }

  key(e) {
    if (!this.active) return false;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') this.turn(1);
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') this.turn(-1);
    else if (e.key === 'u' || e.key === 'U') this.toggleUnfold();
    else if (e.key === 'Escape') { if (this.sheet) this.sheet.dir = -1; else this.close(); }
    else return false;
    return true;
  }

  // ---------------------------------------------------------------- per frame

  update(dt, t) {
    if (!this.active) return;
    const cam = this.camera;

    // camera: glide into the reader's eyes, and back out when closing
    this.look.lerp(this.lookTarget, Math.min(1, dt * 4));
    const eyeQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.2 + this.look.y, this.yaw + Math.PI + this.look.x, 0, 'YXZ'));
    if (!this.closing) {
      this.camT = Math.min(1, this.camT + dt / 1.1);
      const k = ease(this.camT);
      cam.position.lerpVectors(this.returnPos, this.eye, k);
      cam.quaternion.slerpQuaternions(this.returnQuat, eyeQ, k);
    }

    if (!this.pdf) return;
    this.lamp.intensity = THREE.MathUtils.lerp(this.lamp.intensity, this.closing ? 0 : 1.2, Math.min(1, dt * 3));

    // the cover swings open once the camera has arrived
    if (!this.closing) this.openT = Math.min(1, this.openT + (this.camT > 0.55 ? dt / 1.0 : 0));
    let open = ease(this.openT);
    let rise = ease(clamp01(this.camT * 1.4));
    if (this.closing) {
      this.closeT += dt;
      open = 1 - ease(clamp01(this.closeT / 0.7));
      rise = 1 - ease(clamp01((this.closeT - 0.55) / 0.5));
      const k = ease(clamp01((this.closeT - 0.6) / 1.0));
      cam.position.lerpVectors(this.eye, this.returnPos, k);
      cam.quaternion.slerpQuaternions(eyeQ, this.returnQuat, k);
      if (this.closeT > 1.65) { this.finish(); return; }
    }
    this.left.g.rotation.y = Math.PI * (1 - open) * 0.995;
    this.left.page.visible = open > 0.02;
    const breathe = Math.sin(t * 1.3) * 0.004;
    const lowered = this.sheet ? ease(clamp01(this.sheet.t * 2)) * 0.09 : 0;
    this.holder.position.set(0, -0.012 * (this.zoom / 0.6) - (1 - rise) * 0.35 + breathe - lowered, -this.zoom);

    // page flip
    if (this.flip && this.flip.auto) {
      const f = this.flip;
      const step = dt / 0.6;
      f.p = f.target > f.p ? Math.min(f.target, f.p + step) : Math.max(f.target, f.p - step);
      this.deformFlip();
      if (f.p === f.target) this.endFlip();
    }

    // unfolding sheet
    if (this.sheet) {
      const sh = this.sheet;
      sh.t = clamp01(sh.t + (sh.dir * dt) / 1.6);
      this.layoutSheet();
      if (sh.dir < 0 && sh.t === 0) {
        this.disposeSheet();
        this.emitChange();
      } else if (sh.dir > 0 && sh.t === 1 && !sh.announced) {
        sh.announced = true;
        this.emitChange();
      }
    }

    // hands: rest on the boards; one reaches for the page corner while turning,
    // and both hold the sheet's bottom corners while it's unfolded
    for (const hand of this.hands) {
      const goal = hand.rest.clone();
      goal.z = (hand.side > 0 ? this.right.depth : this.left.depth) * 0.2 + 0.003;
      if (hand.side < 0) goal.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.left.g.rotation.y);
      let rot = 0;
      if (this.flip && this.flipCorner && Math.sign(this.flip.dir) === hand.side) {
        const p = hand.side > 0 ? this.flip.p : 1 - this.flip.p;
        const w = Math.min(1, p * 5) * (1 - smooth(0.75, 1, p));
        goal.lerp(this.flipCorner, w);
        rot = w * 0.6;
      }
      if (this.sheet && this.sheet.handBlend > 0) {
        const sh = this.sheet;
        const c = new THREE.Vector3((hand.side * sh.SW) / 2, -sh.SH / 2 + 0.02, 0);
        sh.root.localToWorld(c);
        this.group.worldToLocal(c);
        goal.lerp(c, sh.handBlend);
      }
      hand.mesh.position.lerp(goal, Math.min(1, dt * 14));
      hand.mesh.rotation.y = THREE.MathUtils.lerp(hand.mesh.rotation.y, -hand.side * rot, Math.min(1, dt * 10));
    }
  }
}
