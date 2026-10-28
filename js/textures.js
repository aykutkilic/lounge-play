import * as THREE from 'three';

// All textures are painted on canvases at runtime — no image assets needed.

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function toTexture(c, repeat) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  return tex;
}

function shade(hex, amt) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amt);
  return `#${c.getHexString()}`;
}

export function woodPlanks({ base = '#8a5a3b', planks = 8, seed = 1, repeat = [3, 3] } = {}) {
  const [c, g] = canvas(1024);
  const r = rng(seed);
  const ph = c.height / planks;
  for (let i = 0; i < planks; i++) {
    let x = -r() * 400;
    while (x < c.width) {
      const len = 260 + r() * 300;
      g.fillStyle = shade(base, (r() - 0.5) * 0.08);
      g.fillRect(x, i * ph, len, ph);
      // grain
      g.globalAlpha = 0.12;
      for (let k = 0; k < 7; k++) {
        g.strokeStyle = shade(base, -0.15 + r() * 0.08);
        g.lineWidth = 1 + r() * 2;
        g.beginPath();
        const y0 = i * ph + r() * ph;
        g.moveTo(x, y0);
        g.bezierCurveTo(x + len * 0.3, y0 + (r() - 0.5) * 10, x + len * 0.6, y0 + (r() - 0.5) * 10, x + len, y0);
        g.stroke();
      }
      g.globalAlpha = 1;
      g.fillStyle = 'rgba(0,0,0,0.35)';
      g.fillRect(x, i * ph, 3, ph);
      x += len;
    }
    g.fillStyle = 'rgba(0,0,0,0.4)';
    g.fillRect(0, i * ph, c.width, 3);
  }
  return toTexture(c, repeat);
}

export function tiles({ a = '#c96f4a', b = '#b85f3e', grout = '#e8dccb', n = 8, repeat = [3, 3], seed = 2 } = {}) {
  const [c, g] = canvas(1024);
  const r = rng(seed);
  const s = c.width / n;
  g.fillStyle = grout;
  g.fillRect(0, 0, c.width, c.height);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      g.fillStyle = shade((i + j) % 2 ? a : b, (r() - 0.5) * 0.06);
      g.fillRect(i * s + 3, j * s + 3, s - 6, s - 6);
    }
  }
  return toTexture(c, repeat);
}

export function concrete({ base = '#5b6068', repeat = [4, 4], seed = 3 } = {}) {
  const [c, g] = canvas(1024);
  const r = rng(seed);
  g.fillStyle = base;
  g.fillRect(0, 0, c.width, c.height);
  for (let i = 0; i < 6000; i++) {
    g.fillStyle = `rgba(${r() > 0.5 ? '255,255,255' : '0,0,0'},${r() * 0.06})`;
    const s = 1 + r() * 6;
    g.fillRect(r() * c.width, r() * c.height, s, s);
  }
  g.strokeStyle = 'rgba(0,0,0,0.35)';
  g.lineWidth = 4;
  for (let k = 0; k <= 4; k++) {
    g.beginPath(); g.moveTo(k * 256, 0); g.lineTo(k * 256, 1024); g.stroke();
    g.beginPath(); g.moveTo(0, k * 256); g.lineTo(1024, k * 256); g.stroke();
  }
  return toTexture(c, repeat);
}

export function wallpaper({ base = '#3f5a4c', accent = '#4c6b5b', repeat = [6, 1.5] } = {}) {
  const [c, g] = canvas(256, 512);
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 512);
  g.fillStyle = accent;
  g.fillRect(0, 0, 48, 512);
  g.fillRect(128, 0, 16, 512);
  g.globalAlpha = 0.25;
  g.fillStyle = '#d9c38c';
  for (let y = 24; y < 512; y += 64) {
    g.beginPath();
    g.arc(88, y, 6, 0, Math.PI * 2);
    g.arc(200, y + 32, 6, 0, Math.PI * 2);
    g.fill();
  }
  return toTexture(c, repeat);
}

export function rug(pattern, seed = 4) {
  const [c, g] = canvas(1024, 768);
  const r = rng(seed);
  if (pattern === 'stripes') {
    const cols = ['#f4f1de', '#e07a5f', '#f2cc8f', '#81b29a', '#f4f1de', '#3d405b'];
    let y = 0;
    let i = 0;
    while (y < c.height) {
      const h = 30 + r() * 70;
      g.fillStyle = cols[i++ % cols.length];
      g.fillRect(0, y, c.width, h);
      y += h;
    }
  } else {
    g.fillStyle = '#7b2d26';
    g.fillRect(0, 0, c.width, c.height);
    g.strokeStyle = '#e8c07d';
    g.lineWidth = 18;
    g.strokeRect(30, 30, c.width - 60, c.height - 60);
    g.strokeStyle = '#1f3b4d';
    g.lineWidth = 40;
    g.strokeRect(80, 80, c.width - 160, c.height - 160);
    g.fillStyle = '#e8c07d';
    for (let x = 140; x < c.width - 120; x += 60) {
      g.beginPath(); g.arc(x, 80, 8, 0, Math.PI * 2); g.arc(x, c.height - 80, 8, 0, Math.PI * 2); g.fill();
    }
    // centre medallion
    g.save();
    g.translate(c.width / 2, c.height / 2);
    for (let k = 0; k < 4; k++) {
      g.fillStyle = ['#1f3b4d', '#e8c07d', '#a8432f', '#f3e3c3'][k];
      g.beginPath();
      const s = 220 - k * 50;
      g.moveTo(0, -s); g.lineTo(s * 1.4, 0); g.lineTo(0, s); g.lineTo(-s * 1.4, 0);
      g.closePath(); g.fill();
    }
    g.restore();
    g.globalAlpha = 0.08;
    for (let i = 0; i < 4000; i++) {
      g.fillStyle = r() > 0.5 ? '#fff' : '#000';
      g.fillRect(r() * c.width, r() * c.height, 2, 2);
    }
    g.globalAlpha = 1;
  }
  return toTexture(c);
}

export function painting(seed = 5) {
  const [c, g] = canvas(512, 360);
  const r = rng(seed);
  const pal = [['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'], ['#f1faee', '#a8dadc', '#457b9d', '#1d3557', '#e63946']][Math.floor(r() * 2)];
  g.fillStyle = pal[0];
  g.fillRect(0, 0, 512, 360);
  // rolling hills + sun, painterly
  g.fillStyle = pal[3];
  g.beginPath(); g.arc(360, 120, 50, 0, Math.PI * 2); g.fill();
  for (let k = 0; k < 4; k++) {
    g.fillStyle = pal[(k + 1) % pal.length];
    g.beginPath();
    g.moveTo(0, 360);
    const base = 200 + k * 40;
    for (let x = 0; x <= 512; x += 32) g.lineTo(x, base + Math.sin(x / 70 + k * 2 + r()) * 30);
    g.lineTo(512, 360);
    g.fill();
  }
  return toTexture(c);
}

export function windowsTexture(seed = 6, lit = 0.35) {
  const [c, g] = canvas(128, 256);
  const r = rng(seed);
  g.fillStyle = '#0b0f1a';
  g.fillRect(0, 0, 128, 256);
  for (let y = 6; y < 256; y += 16) {
    for (let x = 6; x < 128; x += 14) {
      if (r() < lit) {
        g.fillStyle = ['#ffd27a', '#ffe8b0', '#9ad1ff', '#ffb36b'][Math.floor(r() * 4)];
        g.fillRect(x, y, 8, 9);
      }
    }
  }
  const t = toTexture(c, [1, 1]);
  t.magFilter = THREE.NearestFilter;
  return t;
}

export function neonText(text, color) {
  const [c, g] = canvas(1024, 320);
  g.font = 'italic 700 200px "Brush Script MT", "Segoe Script", cursive';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.shadowColor = color;
  g.shadowBlur = 40;
  g.strokeStyle = color;
  g.lineWidth = 14;
  g.strokeText(text, 512, 170);
  g.shadowBlur = 0;
  g.strokeStyle = '#fff';
  g.lineWidth = 5;
  g.strokeText(text, 512, 170);
  return toTexture(c);
}

export function menuBoard(items) {
  const [c, g] = canvas(512, 384);
  g.fillStyle = '#1e2421';
  g.fillRect(0, 0, 512, 384);
  g.strokeStyle = '#8b6b4a';
  g.lineWidth = 16;
  g.strokeRect(8, 8, 496, 368);
  g.font = '56px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const cols = 4;
  items.forEach((e, i) => {
    g.fillText(e, 80 + (i % cols) * 118, 80 + Math.floor(i / cols) * 100);
  });
  return toTexture(c);
}

export function skyGradient(stops) {
  const [c, g] = canvas(4, 512);
  const grad = g.createLinearGradient(0, 0, 0, 512);
  stops.forEach(([o, col]) => grad.addColorStop(o, col));
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 512);
  return toTexture(c);
}

// ---------------------------------------------------------------- emoji

const emojiCache = new Map();
const EMOJI_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Twemoji Mozilla",sans-serif';

export function emojiTexture(e) {
  if (emojiCache.has(e)) return emojiCache.get(e);
  const [c, g] = canvas(128);
  g.font = `100px ${EMOJI_FONT}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(e, 64, 72);
  const tex = toTexture(c);
  tex.userData.shared = true;
  emojiCache.set(e, tex);
  return tex;
}

export function bubbleTexture(text) {
  const chars = [...new Intl.Segmenter().segment(text)].length;
  const w = 64 + chars * 96;
  const [c, g] = canvas(w, 150);
  g.fillStyle = 'rgba(255,252,245,0.96)';
  g.strokeStyle = 'rgba(80,60,40,0.25)';
  g.lineWidth = 4;
  const h = 118;
  g.beginPath();
  g.roundRect(4, 4, w - 8, h - 8, 50);
  g.moveTo(w / 2 - 16, h - 6);
  g.lineTo(w / 2, h + 24);
  g.lineTo(w / 2 + 16, h - 6);
  g.fill();
  g.stroke();
  g.font = `80px ${EMOJI_FONT}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = '#000';
  g.fillText(text, w / 2, h / 2 + 6);
  const tex = toTexture(c);
  return { tex, aspect: w / 150 };
}

// ---------------------------------------------------------------- books

export const LEATHERS = ['#6b2d24', '#8a5a34', '#2f4a3a', '#2c3550', '#4a2c3e', '#5a3a22', '#7a4a2a', '#3a3a3a'];

function grain(g, w, h, r, amount) {
  for (let i = 0; i < w * h * amount; i++) {
    const v = r();
    g.fillStyle = v > 0.5 ? `rgba(255,240,220,${(v - 0.5) * 0.08})` : `rgba(0,0,0,${v * 0.12})`;
    const s = 1 + r() * 2.5;
    g.fillRect(r() * w, r() * h, s, s);
  }
  // soft creases
  g.globalAlpha = 0.07;
  g.strokeStyle = '#000';
  for (let i = 0; i < 26; i++) {
    g.lineWidth = 1 + r() * 2;
    g.beginPath();
    const x = r() * w;
    const y = r() * h;
    g.moveTo(x, y);
    g.quadraticCurveTo(x + (r() - 0.5) * 120, y + (r() - 0.5) * 120, x + (r() - 0.5) * 200, y + (r() - 0.5) * 200);
    g.stroke();
  }
  g.globalAlpha = 1;
}

function wrapLines(g, text, maxW, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (g.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/\s*\S*$/, '')}…`;
  }
  return lines;
}

// Front cover: grained leather, stitched border, gold-embossed title.
export function leatherCover(color, title, aspect = 0.7, seed = 7) {
  const H = 1024;
  const W = Math.round(H * aspect);
  const [c, g] = canvas(W, H);
  const r = rng(seed);
  g.fillStyle = color;
  g.fillRect(0, 0, W, H);
  grain(g, W, H, r, 0.02);
  const vig = g.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.75);
  vig.addColorStop(0, 'rgba(255,255,255,0.06)');
  vig.addColorStop(1, 'rgba(0,0,0,0.35)');
  g.fillStyle = vig;
  g.fillRect(0, 0, W, H);
  g.setLineDash([14, 10]);
  g.lineWidth = 4;
  g.strokeStyle = 'rgba(232,206,150,0.55)';
  g.strokeRect(34, 34, W - 68, H - 68);
  g.setLineDash([]);
  g.lineWidth = 3;
  g.strokeStyle = 'rgba(214,176,92,0.85)';
  g.strokeRect(70, 70, W - 140, H - 140);
  // ornament + title
  const gold = g.createLinearGradient(0, H * 0.3, 0, H * 0.6);
  gold.addColorStop(0, '#f6dc8c');
  gold.addColorStop(0.5, '#c9a243');
  gold.addColorStop(1, '#f1d27a');
  g.fillStyle = gold;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = '700 64px Georgia, "Times New Roman", serif';
  const lines = wrapLines(g, title, W - 200, 4);
  const lh = 78;
  const y0 = H * 0.42 - ((lines.length - 1) * lh) / 2;
  g.shadowColor = 'rgba(0,0,0,0.6)';
  g.shadowOffsetY = 3;
  g.shadowBlur = 4;
  lines.forEach((l, i) => g.fillText(l, W / 2, y0 + i * lh));
  g.shadowColor = 'transparent';
  g.font = '48px Georgia, serif';
  g.fillText('❦', W / 2, y0 - lh * 1.1);
  g.fillText('❦', W / 2, y0 + lines.length * lh + lh * 0.2);
  return toTexture(c);
}

export function leatherPlain(color, seed = 8) {
  const [c, g] = canvas(256);
  g.fillStyle = color;
  g.fillRect(0, 0, 256, 256);
  grain(g, 256, 256, rng(seed), 0.03);
  return toTexture(c);
}

// Marbled endpaper, the classic inside of an old leather book.
export function marbled(seed = 3) {
  const [c, g] = canvas(512, 720);
  const r = rng(seed);
  const pal = ['#1f3b5a', '#b8573a', '#e6c88f', '#2f5d50', '#f3e9d2', '#7a2f3a'];
  g.fillStyle = '#efe2c4';
  g.fillRect(0, 0, 512, 720);
  for (let i = 0; i < 260; i++) {
    g.fillStyle = pal[Math.floor(r() * pal.length)];
    g.globalAlpha = 0.55;
    g.beginPath();
    g.arc(r() * 512, r() * 720, 6 + r() * 40, 0, Math.PI * 2);
    g.fill();
  }
  // comb the drops into swirls
  const img = g.getImageData(0, 0, 512, 720);
  const out = g.createImageData(512, 720);
  for (let y = 0; y < 720; y++) {
    for (let x = 0; x < 512; x++) {
      const sx = Math.min(511, Math.max(0, Math.round(x + Math.sin(y / 18) * 22 + Math.sin(y / 5.3) * 4)));
      const sy = Math.min(719, Math.max(0, Math.round(y + Math.sin(x / 30) * 26)));
      const si = (sy * 512 + sx) * 4;
      const di = (y * 512 + x) * 4;
      out.data[di] = img.data[si];
      out.data[di + 1] = img.data[si + 1];
      out.data[di + 2] = img.data[si + 2];
      out.data[di + 3] = 255;
    }
  }
  g.putImageData(out, 0, 0);
  g.globalAlpha = 1;
  return toTexture(c);
}

export function pageEdges() {
  const [c, g] = canvas(64, 256);
  g.fillStyle = '#efe6d2';
  g.fillRect(0, 0, 64, 256);
  for (let y = 0; y < 256; y += 2) {
    g.fillStyle = `rgba(120,100,70,${0.08 + Math.random() * 0.1})`;
    g.fillRect(0, y, 64, 1);
  }
  const t = toTexture(c, [1, 6]);
  return t;
}

// Tileable ripple normals for water: a few sine swells at whole-number
// frequencies (so the edges wrap), turned into a tangent-space normal map.
export function waterNormals(size = 256, seed = 31) {
  const r = rng(seed);
  const waves = Array.from({ length: 9 }, () => ({
    kx: Math.round((r() - 0.5) * 16) || 1, ky: Math.round((r() - 0.5) * 16) || 1, a: 0.3 + r(), p: r() * Math.PI * 2,
  }));
  const h = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let v = 0;
      for (const w of waves) v += w.a * Math.sin(((w.kx * x + w.ky * y) / size) * Math.PI * 2 + w.p);
      h[y * size + x] = v;
    }
  }
  const [c, g] = canvas(size);
  const img = g.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = h[y * size + ((x + 1) % size)] - h[y * size + ((x - 1 + size) % size)];
      const dy = h[((y + 1) % size) * size + x] - h[((y - 1 + size) % size) * size + x];
      const len = Math.hypot(dx, dy, 2);
      const i = (y * size + x) * 4;
      img.data[i] = ((-dx / len) * 0.5 + 0.5) * 255;
      img.data[i + 1] = ((-dy / len) * 0.5 + 0.5) * 255;
      img.data[i + 2] = ((2 / len) * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

// Soft dark ellipse that grounds people and robots (cheaper than real shadows).
let blob = null;
export function blobShadow() {
  if (blob) return blob;
  const [c, g] = canvas(128);
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  grad.addColorStop(0, 'rgba(0,0,0,0.55)');
  grad.addColorStop(0.6, 'rgba(0,0,0,0.25)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  blob = new THREE.CanvasTexture(c);
  blob.userData.shared = true;
  return blob;
}

// Irregular fieldstone with mortar, for the fireplace.
export function stones(seed = 17) {
  const [c, g] = canvas(512);
  const r = rng(seed);
  g.fillStyle = '#4e4741';
  g.fillRect(0, 0, 512, 512);
  let y = 0;
  while (y < 512) {
    const h = 34 + r() * 30;
    let x = -r() * 40;
    while (x < 512) {
      const w = 50 + r() * 70;
      const tone = 0.42 + r() * 0.2;
      const base = new THREE.Color().setHSL(0.07 + r() * 0.03, 0.08 + r() * 0.07, tone);
      g.fillStyle = `#${base.getHexString()}`;
      g.beginPath();
      g.roundRect(x + 3, y + 3, w - 6, h - 6, 10);
      g.fill();
      // a little light from above, shade below: each stone sits proud of the mortar
      const sh = g.createLinearGradient(0, y, 0, y + h);
      sh.addColorStop(0, 'rgba(255,255,255,0.12)');
      sh.addColorStop(1, 'rgba(0,0,0,0.25)');
      g.fillStyle = sh;
      g.fill();
      for (let k = 0; k < 18; k++) {
        g.fillStyle = `rgba(${r() > 0.5 ? '255,255,255' : '0,0,0'},${r() * 0.08})`;
        g.fillRect(x + r() * w, y + r() * h, 2 + r() * 4, 2 + r() * 4);
      }
      x += w;
    }
    y += h;
  }
  const t = toTexture(c, [1, 1]);
  return t;
}
