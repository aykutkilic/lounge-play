import { LEATHERS, hashString } from './textures.js';

// Your suitcase. PDFs are kept in this browser's IndexedDB and rendered here
// with pdf.js. Nothing about them is ever sent to the server or to peers.

const DB_NAME = 'lounge-suitcase';
const STORE = 'books';
const memory = new Map(); // fallback when IndexedDB is unavailable (private windows)
let dbPromise = null;

function db() {
  dbPromise ??= new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'id' });
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  return dbPromise;
}

async function tx(mode, fn) {
  const d = await db();
  if (!d) return fn(null);
  return new Promise((resolve, reject) => {
    const t = d.transaction(STORE, mode);
    const out = fn(t.objectStore(STORE));
    t.oncomplete = () => resolve(out?.result ?? out);
    t.onerror = () => reject(t.error);
  });
}

export async function listBooks() {
  const all = await tx('readonly', (s) => (s ? s.getAll() : [...memory.values()]));
  return [...all].sort((a, b) => a.addedAt - b.addedAt);
}

async function putBook(book) {
  await tx('readwrite', (s) => (s ? s.put(book) : memory.set(book.id, book)));
}

export async function removeBook(id) {
  await tx('readwrite', (s) => (s ? s.delete(id) : memory.delete(id)));
}

export async function saveProgress(book, page) {
  book.lastPage = page;
  if (book.libraryId) {
    try { localStorage.setItem(`lounge-lib-${book.libraryId}`, String(page)); } catch { /* private mode */ }
    return;
  }
  await putBook(book);
}

// ---------------------------------------------------------------- pdf.js

let pdfjs = null;
const vendorBase = () => new URL('vendor/pdfjs/', document.baseURI).href;

async function lib() {
  if (!pdfjs) {
    pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = `${vendorBase()}build/pdf.worker.min.mjs`;
  }
  return pdfjs;
}

// returns pdf.js's loading task; await `.promise` for the document, call `.destroy()` to free it
async function load(blob) {
  const { getDocument } = await lib();
  const base = vendorBase();
  return getDocument({
    data: new Uint8Array(await blob.arrayBuffer()),
    cMapUrl: `${base}cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `${base}standard_fonts/`,
    wasmUrl: `${base}wasm/`,
    iccUrl: `${base}iccs/`,
  });
}

const isPdf = (f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name);

// Adds PDF files to the suitcase; returns how many were accepted.
export async function addFiles(files) {
  let added = 0;
  for (const file of files) {
    if (!isPdf(file)) continue;
    try {
      const task = await load(file);
      const doc = await task.promise;
      const first = (await doc.getPage(1)).getViewport({ scale: 1 });
      const name = file.name.replace(/\.pdf$/i, '').replace(/[_-]+/g, ' ').trim() || 'Untitled';
      await putBook({
        id: crypto.randomUUID(),
        name,
        pages: doc.numPages,
        pageW: first.width,
        pageH: first.height,
        leather: LEATHERS[hashString(name) % LEATHERS.length],
        lastPage: 1,
        addedAt: Date.now(),
        blob: file,
      });
      task.destroy();
      added++;
    } catch (err) {
      console.warn('[lounge] could not read PDF', file.name, err);
    }
  }
  return added;
}

const PAPER = '#f6f0e1';

// An open book (a PDF from the suitcase, or a book from the library shelf):
// renders pages on demand onto paper-coloured canvases.
export async function openBook(book) {
  return book.catalog ? openGenerated(book) : openPdf(book);
}

async function openPdf(book) {
  const task = await load(book.blob);
  const doc = await task.promise;
  const sizes = new Map();
  const size = async (n) => {
    if (!sizes.has(n)) {
      const vp = (await doc.getPage(n)).getViewport({ scale: 1 });
      sizes.set(n, { w: vp.width, h: vp.height });
    }
    return sizes.get(n);
  };
  const draw = async (n, scale) => {
    const page = await doc.getPage(n);
    const vp = page.getViewport({ scale });
    const tmp = document.createElement('canvas');
    tmp.width = Math.ceil(vp.width);
    tmp.height = Math.ceil(vp.height);
    await page.render({ canvas: tmp, viewport: vp }).promise; // on white, which multiplies away into the paper
    page.cleanup();
    return tmp;
  };
  return bookApi(book, doc.numPages, size, draw, () => task.destroy());
}

// Library books are typeset / drawn right here in the browser.
function openGenerated(book) {
  const pages = book.catalog.build();
  const size = async (n) => ({ w: pages[n - 1].w, h: pages[n - 1].h });
  const draw = async (n, scale) => {
    const p = pages[n - 1];
    const tmp = document.createElement('canvas');
    tmp.width = Math.ceil(p.w * scale);
    tmp.height = Math.ceil(p.h * scale);
    const g = tmp.getContext('2d');
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, tmp.width, tmp.height);
    g.scale(scale, scale);
    p.draw(g);
    return tmp;
  };
  return bookApi(book, pages.length, size, draw, () => {});
}

function bookApi(book, pageCount, size, draw, close) {
  // Pages much bigger than the book (posters, maps, landscape spreads) are
  // folded into it; this says into how many panels.
  const folds = (s) => {
    const cols = Math.max(1, Math.min(4, Math.ceil(s.w / book.pageW - 0.15)));
    const rows = Math.max(1, Math.min(4, Math.ceil(s.h / book.pageH - 0.15)));
    return { cols, rows, large: cols * rows > 1 };
  };

  // Draws page n onto `canvas` (whose aspect is the book page's), fitted and
  // printed onto paper. Fold-outs get crease marks.
  async function renderInto(n, canvas, { fit = 'page' } = {}) {
    const s = await size(n);
    const W = canvas.width;
    const H = canvas.height;
    const tmp = await draw(n, fit === 'page' ? Math.min(W / s.w, H / s.h) : W / s.w);
    const g = canvas.getContext('2d');
    g.fillStyle = PAPER;
    g.fillRect(0, 0, W, H);
    const x = (W - tmp.width) / 2;
    const y = (H - tmp.height) / 2;
    // multiply = the ink soaks into the paper colour instead of sitting on white
    g.globalCompositeOperation = 'multiply';
    g.drawImage(tmp, x, y);
    g.globalCompositeOperation = 'source-over';
    const f = folds(s);
    if (fit === 'page' && f.large) {
      g.strokeStyle = 'rgba(90,70,40,0.35)';
      g.setLineDash([10, 8]);
      g.lineWidth = 3;
      for (let i = 1; i < f.cols; i++) { g.beginPath(); g.moveTo(x + (tmp.width * i) / f.cols, y); g.lineTo(x + (tmp.width * i) / f.cols, y + tmp.height); g.stroke(); }
      for (let j = 1; j < f.rows; j++) { g.beginPath(); g.moveTo(x, y + (tmp.height * j) / f.rows); g.lineTo(x + tmp.width, y + (tmp.height * j) / f.rows); g.stroke(); }
      g.setLineDash([]);
      g.font = `${Math.round(W * 0.09)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
      g.textAlign = 'right';
      g.textBaseline = 'bottom';
      g.fillText('🗺️', W - W * 0.04, H - H * 0.02);
    }
  }

  return {
    pages: pageCount,
    size,
    folds,
    paper: PAPER,
    renderInto,
    // a standalone high-resolution render of a whole page (for unfolding)
    async renderLarge(n, maxPx) {
      const s = await size(n);
      const k = maxPx / Math.max(s.w, s.h);
      const c = document.createElement('canvas');
      c.width = Math.round(s.w * k);
      c.height = Math.round(s.h * k);
      await renderInto(n, c, { fit: 'width' });
      return c;
    },
    close,
  };
}

// A library book as the reader expects it. Where you got to is remembered on
// this device (library books aren't kept in your suitcase).
export function libraryBook(id, entry) {
  const pages = entry.build();
  let lastPage = 1;
  try { lastPage = Number(localStorage.getItem(`lounge-lib-${id}`)) || 1; } catch { /* private mode */ }
  return {
    id: `lib:${id}`, libraryId: id, catalog: entry, name: entry.title, pages: pages.length,
    pageW: pages[0].w, pageH: pages[0].h, leather: entry.leather, lastPage,
  };
}
