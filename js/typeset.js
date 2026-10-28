// Turns the library's texts into pages: a tiny typesetter (title page, running
// heads, verse with stanza breaks, prose with a drop cap, page numbers) plus
// drawing helpers the magazines use. Everything is laid out in points and
// drawn later at whatever resolution the reader needs.

export const SERIF = 'Georgia, "Times New Roman", serif';
export const INK = '#2b2118';
export const FADED = '#8a6a4a';

let measureCtx = null;
function measure(font, text) {
  measureCtx ??= document.createElement('canvas').getContext('2d');
  measureCtx.font = font;
  return measureCtx.measureText(text).width;
}

// Breaks text into lines no wider than width(i) for line i.
export function wrap(text, font, width) {
  const w = typeof width === 'function' ? width : () => width;
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const test = line ? `${line} ${word}` : word;
    if (line && measure(font, test) > w(lines.length)) {
      lines.push(line);
      line = word;
    } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

// Draws wrapped text into a column; returns the y after the last line.
export function column(g, text, x, y, width, { font = `11px ${SERIF}`, lh = 15, color = INK, maxY = Infinity } = {}) {
  g.font = font;
  g.fillStyle = color;
  g.textAlign = 'left';
  for (const para of text.split('\n\n')) {
    for (const line of wrap(para, font, width)) {
      if (y > maxY) return y;
      g.fillText(line, x, y);
      y += lh;
    }
    y += lh * 0.5;
  }
  return y;
}

export function drawOps(g, ops) {
  for (const op of ops) {
    if (op.t === 'text') {
      g.font = op.font;
      g.fillStyle = op.color || INK;
      g.textAlign = op.align || 'left';
      g.textBaseline = 'alphabetic';
      g.fillText(op.text, op.x, op.y);
    } else if (op.t === 'rule') {
      g.strokeStyle = op.color || FADED;
      g.lineWidth = op.w || 0.8;
      g.beginPath();
      g.moveTo(op.x1, op.y);
      g.lineTo(op.x2, op.y);
      g.stroke();
    }
  }
}

// A book of sections (poems / stories) → array of pages { w, h, draw(g) }.
export function typesetBook(entry, W = 420, H = 595) {
  const M = { top: 70, bottom: 64, left: 56, right: 56 };
  const pages = [];
  let ops;
  let y;
  const text = (x, yy, font, s, extra = {}) => ops.push({ t: 'text', x, y: yy, font, text: s, ...extra });
  const newPage = () => {
    ops = [];
    pages.push(ops);
    y = M.top;
    text(W / 2, 40, `italic 9px ${SERIF}`, entry.title, { align: 'center', color: FADED });
  };

  // title page
  ops = [];
  pages.push(ops);
  text(W / 2, H * 0.36, `bold 30px ${SERIF}`, entry.title, { align: 'center' });
  if (entry.subtitle) text(W / 2, H * 0.36 + 30, `italic 13px ${SERIF}`, entry.subtitle, { align: 'center', color: FADED });
  text(W / 2, H * 0.5, `20px ${SERIF}`, '❦', { align: 'center', color: FADED });
  text(W / 2, H * 0.6, `14px ${SERIF}`, entry.author, { align: 'center' });
  if (entry.note) text(W / 2, H - 70, `italic 9px ${SERIF}`, entry.note, { align: 'center', color: FADED });

  const bodyFont = `11.5px ${SERIF}`;
  const lh = 16;
  const width = W - M.left - M.right;
  const fits = (h) => y + h <= H - M.bottom;

  for (const sec of entry.sections) {
    newPage();
    text(W / 2, y + 8, `bold 17px ${SERIF}`, sec.title, { align: 'center' });
    y += 30;
    if (sec.byline) {
      text(W / 2, y, `italic 10px ${SERIF}`, sec.byline, { align: 'center', color: FADED });
      y += 14;
    }
    ops.push({ t: 'rule', x1: W / 2 - 24, x2: W / 2 + 24, y: y + 2 });
    y += 24;

    if (sec.verse) {
      for (const raw of sec.text.trim().split('\n')) {
        const line = raw.trim();
        if (!line) { y += lh * 0.6; continue; }
        const indent = /^\s{2,}/.test(raw) ? 16 : 0;
        wrap(line, bodyFont, (i) => width - 24 - indent - (i ? 14 : 0)).forEach((part, i) => {
          if (!fits(lh)) newPage();
          text(M.left + 12 + indent + (i ? 14 : 0), y, bodyFont, part);
          y += lh;
        });
      }
    } else {
      sec.text.trim().split(/\n\s*\n/).forEach((para, p) => {
        const words = para.replace(/\s+/g, ' ').trim();
        if (p === 0) {
          // drop cap: a big first letter with the first two lines tucked beside it
          const cap = words[0];
          const capFont = `bold 38px ${SERIF}`;
          const capW = measure(capFont, cap) + 5;
          if (!fits(lh * 3)) newPage();
          text(M.left, y + lh * 1.35, capFont, cap, { color: '#7a2f22' });
          wrap(words.slice(1), bodyFont, (i) => (i < 2 ? width - capW : width)).forEach((line, i) => {
            if (!fits(lh)) newPage();
            text(M.left + (i < 2 ? capW : 0), y, bodyFont, line);
            y += lh;
          });
        } else {
          wrap(words, bodyFont, (i) => (i ? width : width - 16)).forEach((line, i) => {
            if (!fits(lh)) newPage();
            text(M.left + (i ? 0 : 16), y, bodyFont, line);
            y += lh;
          });
        }
        y += 3;
      });
      if (sec.moral) {
        y += 8;
        wrap(sec.moral, `italic 11px ${SERIF}`, width - 30).forEach((line) => {
          if (!fits(lh)) newPage();
          text(W / 2, y, `italic 11px ${SERIF}`, line, { align: 'center', color: '#7a2f22' });
          y += lh;
        });
      }
    }
    if (fits(30)) text(W / 2, y + 18, `14px ${SERIF}`, '❦', { align: 'center', color: FADED });
  }

  pages.forEach((p, i) => {
    if (i > 0) p.push({ t: 'text', x: W / 2, y: H - 34, font: `10px ${SERIF}`, text: String(i + 1), align: 'center', color: FADED });
  });
  return pages.map((p) => ({ w: W, h: H, draw: (g) => drawOps(g, p) }));
}
