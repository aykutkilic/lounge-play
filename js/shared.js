// Shared between the browser client and the Node server.
// Everything a person can "say" or order is defined here, and the server
// rejects anything that isn't on these lists — so the lounges stay emoji-only.

export const MAX_PER_ROOM = 24;

export const AVATARS = [
  '🦊', '🐻', '🐼', '🐨', '🐸', '🐯', '🦁', '🐵', '🐰', '🐱',
  '🐶', '🦉', '🐧', '🐙', '🦄', '🐢', '🐹', '🦔', '🐮', '🐷',
];

export const COLORS = [
  '#e07a5f', '#f2cc8f', '#81b29a', '#5c6f9e', '#b07bac', '#f4a261',
  '#2a9d8f', '#e76f51', '#8ecae6', '#ffb4a2', '#c9ada7', '#90be6d',
];

export const EMOJIS = [
  '😊', '😄', '😂', '🥰', '😍', '😌', '😴', '🤔', '😮', '😢', '😎', '🥳', '🤗', '😇', '🙃', '😋', '😅', '🥺',
  '👋', '👍', '👏', '🙌', '🤝', '✌️', '🙏', '🫶', '👀',
  '❤️', '🧡', '💛', '💚', '💙', '💜', '✨', '🔥', '🎉', '⭐', '💯',
  '🎵', '🎶', '🎧', '☕', '🍵', '🍰', '🌿', '🌧️', '🌙', '☀️', '🌈', '📚', '💤', '💭', '❓', '❗',
];

// Emojis that also float up from the avatar as a little burst.
export const BURST_EMOJIS = new Set(['❤️', '🧡', '💛', '💚', '💙', '💜', '✨', '🎉', '⭐', '🔥', '🥰', '😍', '👏', '🫶', '🎶', '🎵']);

export const ITEMS = {
  '☕': { kind: 'drink', hot: true },
  '🍵': { kind: 'drink', hot: true },
  '🫖': { kind: 'drink', hot: true },
  '🧋': { kind: 'drink' },
  '🧃': { kind: 'drink' },
  '🥛': { kind: 'drink' },
  '🥥': { kind: 'drink' },
  '🍹': { kind: 'drink' },
  '🥐': { kind: 'snack' },
  '🍩': { kind: 'snack' },
  '🍪': { kind: 'snack' },
  '🧁': { kind: 'snack' },
  '🍰': { kind: 'snack' },
  '🥨': { kind: 'snack' },
  '🌰': { kind: 'snack' },
  '🍓': { kind: 'snack' },
  '🍜': { kind: 'snack', hot: true },
  '🥟': { kind: 'snack', hot: true },
  '🍉': { kind: 'snack' },
  '🍦': { kind: 'snack' },
};

// How long (ms) an item lasts before it's finished.
export const ITEM_LIFETIME = { drink: 150_000, snack: 90_000 };

const BASE_MENU = ['☕', '🍵', '🧋', '🥐', '🍩', '🍪', '🧁'];

export function roomMenu(room) {
  return [...BASE_MENU, ...room.specials];
}

// Seats each furniture type provides, in index order.
export const SEAT_COUNTS = {
  sofa: 3, loveseat: 2, armchair: 1, beanbag: 1, chair: 1, stool: 1,
  swing: 1, lounger: 1, hammock: 1, cushion: 1, bench: 3,
};

export function seatExists(room, seatId) {
  if (typeof seatId !== 'string') return false;
  const m = /^(\d+):(\d+)$/.exec(seatId);
  if (!m) return false;
  const item = room.layout[Number(m[1])];
  return !!item && Number(m[2]) < (SEAT_COUNTS[item.type] || 0);
}

// Layout convention: room is centred on the origin, x across, z toward the
// viewer. `r` is the yaw in degrees; r = 0 means the piece faces +z.
export const ROOMS = [
  {
    id: 'fireside',
    name: 'Fireside Library',
    emoji: '🔥',
    tagline: 'crackling fire · leather & books · jazzy lo-fi',
    size: { w: 18, d: 14 },
    specials: ['🫖', '🌰', '🍰'],
    counter: { x: 7.6, z: 3.2, r: -90 },
    layout: [
      { type: 'fireplace', x: 0, z: -6.55, r: 0 },
      { type: 'rug', x: 0, z: -2.2, w: 7.5, d: 5.2, pattern: 'persian' },
      { type: 'sofa', x: 0, z: 0.6, r: 180, color: '#7a3b2e' },
      { type: 'armchair', x: -3.5, z: -2.9, r: 90, color: '#5b3a29' },
      { type: 'armchair', x: 3.5, z: -2.9, r: -90, color: '#5b3a29' },
      { type: 'coffeeTable', x: 0, z: -2.4, r: 0 },
      { type: 'bookshelf', x: -8.55, z: -3.4, r: 90 },
      { type: 'bookshelf', x: -8.55, z: 0.4, r: 90 },
      { type: 'libraryShelf', x: -4.6, z: -6.6, r: 0, books: ['sonnets', 'poems', 'fables'] },
      { type: 'bookshelf', x: 4.6, z: -6.6, r: 0 },
      { type: 'window', x: 8.95, z: -3.2, r: -90, view: 'night' },
      { type: 'counter', x: 7.6, z: 3.2, r: -90 },
      { type: 'beanbag', x: -6.2, z: 4.4, r: 30, color: '#a0522d' },
      { type: 'beanbag', x: -4.2, z: 5.4, r: 10, color: '#6b8e23' },
      { type: 'cushion', x: -7.2, z: 2.6, r: 60, color: '#c08552' },
      { type: 'roundTable', x: 3.0, z: 4.6 },
      { type: 'chair', x: 1.9, z: 4.6, r: 90 },
      { type: 'chair', x: 4.1, z: 4.6, r: -90 },
      { type: 'floorLamp', x: -2.4, z: 1.7 },
      { type: 'floorLamp', x: 6.8, z: -5.8 },
      { type: 'floorLamp', x: -7.6, z: 5.8 },
      { type: 'plant', kind: 'fiddle', x: -7.7, z: -6.0 },
      { type: 'plant', kind: 'snake', x: 7.9, z: -6.0 },
      { type: 'plant', kind: 'monstera', x: 2.6, z: 1.9 },
      { type: 'plant', kind: 'fern', x: 8.0, z: 0.4 },
      { type: 'plant', kind: 'fern', x: -8.0, z: 3.2 },
      { type: 'turntable', x: -2.4, z: -6.35, r: 0 },
      { type: 'painting', x: -8.97, z: 3.9, r: 90, w: 1.6, h: 1.1 },
      { type: 'cat', x: 1.5, z: -4.9, r: 200 },
      { type: 'sideTable', x: -4.7, z: -1.6 },
      { type: 'magazineRack', x: 2.45, z: -6.35, r: 0, books: ['gazette', 'starlight'] },
      { type: 'door', x: -8.97, z: 5.2, r: 90 },
    ],
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse Café',
    emoji: '🌿',
    tagline: 'sunlit glass · a jungle of plants · bossa beats',
    size: { w: 18, d: 14 },
    specials: ['🫖', '🍓', '🧃'],
    counter: { x: -4.5, z: -6.1, r: 0 },
    layout: [
      { type: 'counter', x: -4.5, z: -6.1, r: 0 },
      { type: 'plant', kind: 'tree', x: 1.2, z: -2.2 },
      { type: 'bench', x: 1.2, z: 0.15, r: 0, color: '#c8a26b' },
      { type: 'roundTable', x: -5.2, z: -1.6 },
      { type: 'chair', x: -6.3, z: -1.6, r: 90, color: '#e9e3d3' },
      { type: 'chair', x: -4.1, z: -1.6, r: -90, color: '#e9e3d3' },
      { type: 'roundTable', x: -5.2, z: 3.2 },
      { type: 'chair', x: -6.3, z: 3.2, r: 90, color: '#e9e3d3' },
      { type: 'chair', x: -4.1, z: 3.2, r: -90, color: '#e9e3d3' },
      { type: 'roundTable', x: 6.4, z: 3.6 },
      { type: 'chair', x: 5.3, z: 3.6, r: 90, color: '#e9e3d3' },
      { type: 'chair', x: 7.5, z: 3.6, r: -90, color: '#e9e3d3' },
      { type: 'swing', x: 6.6, z: -4.6, r: -35 },
      { type: 'swing', x: 3.8, z: -5.4, r: -10 },
      { type: 'loveseat', x: 1.6, z: 4.9, r: 180, color: '#d9c7a7' },
      { type: 'beanbag', x: -1.6, z: 3.8, r: 45, color: '#e9b44c' },
      { type: 'plant', kind: 'monstera', x: -8.0, z: -6.0 },
      { type: 'plant', kind: 'palm', x: 8.0, z: -6.0 },
      { type: 'plant', kind: 'fiddle', x: 8.1, z: 0.2 },
      { type: 'plant', kind: 'snake', x: -8.1, z: 0.8 },
      { type: 'plant', kind: 'fern', x: -8.1, z: -2.6 },
      { type: 'plant', kind: 'fern', x: 8.1, z: -2.4 },
      { type: 'plant', kind: 'cactus', x: -1.2, z: -6.2 },
      { type: 'plant', kind: 'flowers', x: 0.2, z: -6.2 },
      { type: 'plant', kind: 'flowers', x: 4.0, z: 6.2 },
      { type: 'plant', kind: 'monstera', x: -8.0, z: 5.8 },
      { type: 'plant', kind: 'palm', x: 8.0, z: 6.0 },
      { type: 'plant', kind: 'hanging', x: -2.6, z: -3.6 },
      { type: 'plant', kind: 'hanging', x: 4.6, z: -1.2 },
      { type: 'plant', kind: 'hanging', x: -2.2, z: 1.4 },
      { type: 'plant', kind: 'hanging', x: 4.2, z: 1.6 },
      { type: 'plant', kind: 'hanging', x: -6.4, z: 0.8 },
      { type: 'turntable', x: -1.0, z: 5.9, r: 180 },
      { type: 'cat', x: -2.6, z: -0.6, r: 40 },
    ],
  },
  {
    id: 'rooftop',
    name: 'Rainy Rooftop',
    emoji: '🌧️',
    tagline: 'city lights · gentle rain · a crackling fire pit',
    size: { w: 18, d: 14 },
    specials: ['🍜', '🥟', '🫖'],
    counter: { x: 7.0, z: 4.4, r: -90 },
    layout: [
      { type: 'pergola', x: 0, z: -1.6, w: 11, d: 7.5 },
      { type: 'firepit', x: 0, z: -1.4 },
      { type: 'sofa', x: 0, z: -4.4, r: 0, color: '#6b7a99' },
      { type: 'loveseat', x: -3.6, z: -1.2, r: 90, color: '#6b7a99' },
      { type: 'loveseat', x: 3.6, z: -1.2, r: -90, color: '#6b7a99' },
      { type: 'beanbag', x: -1.3, z: 1.6, r: 160, color: '#c96f53' },
      { type: 'beanbag', x: 1.3, z: 1.6, r: 200, color: '#e2b04a' },
      { type: 'counter', x: 7.0, z: 4.4, r: -90 },
      { type: 'stool', x: 5.9, z: 3.5, r: 90 },
      { type: 'stool', x: 5.9, z: 4.6, r: 90 },
      { type: 'stool', x: 5.9, z: 5.7, r: 90 },
      { type: 'neonSign', x: 0, z: -6.75, r: 0, text: 'chill', color: '#ff5fa2' },
      { type: 'plant', kind: 'grass', x: -8.0, z: -6.0 },
      { type: 'plant', kind: 'grass', x: -8.0, z: -3.0 },
      { type: 'plant', kind: 'tree', x: 7.8, z: -5.6, small: true },
      { type: 'plant', kind: 'grass', x: 8.0, z: -2.2 },
      { type: 'plant', kind: 'snake', x: -8.0, z: 1.2 },
      { type: 'plant', kind: 'fern', x: -6.0, z: 6.0 },
      { type: 'plant', kind: 'cactus', x: 3.6, z: 6.2 },
      { type: 'cushion', x: -6.0, z: 3.6, r: 30, color: '#6c5b7b' },
      { type: 'cushion', x: -4.4, z: 4.6, r: -20, color: '#355c7d' },
      { type: 'sideTable', x: -5.3, z: 4.0 },
      { type: 'lantern', x: -2.6, z: 4.5 },
      { type: 'lantern', x: 4.6, z: -5.8 },
      { type: 'lantern', x: -6.4, z: -5.8 },
      { type: 'turntable', x: -4.6, z: -5.9, r: 0 },
    ],
  },
  {
    id: 'terrace',
    name: 'Sunset Terrace',
    emoji: '🌅',
    tagline: 'ocean breeze · golden hour · sunny grooves',
    size: { w: 18, d: 14 },
    specials: ['🥥', '🍹', '🍉', '🍦'],
    counter: { x: 7.2, z: 1.0, r: -90 },
    layout: [
      { type: 'counter', x: 7.2, z: 1.0, r: -90 },
      { type: 'stool', x: 6.1, z: -0.2, r: 90 },
      { type: 'stool', x: 6.1, z: 1.0, r: 90 },
      { type: 'stool', x: 6.1, z: 2.2, r: 90 },
      { type: 'lounger', x: -5.4, z: -4.6, r: 180, color: '#f1e3c6' },
      { type: 'lounger', x: -3.2, z: -4.6, r: 180, color: '#f1e3c6' },
      { type: 'lounger', x: -1.0, z: -4.6, r: 180, color: '#f1e3c6' },
      { type: 'hammock', x: 3.4, z: -4.8, r: 180 },
      { type: 'rug', x: -3.6, z: 2.6, w: 5.2, d: 4, pattern: 'stripes' },
      { type: 'coffeeTable', x: -3.6, z: 2.6, r: 0, low: true },
      { type: 'cushion', x: -5.2, z: 2.6, r: 90, color: '#f28482' },
      { type: 'cushion', x: -2.0, z: 2.6, r: -90, color: '#84a59d' },
      { type: 'cushion', x: -3.6, z: 1.2, r: 0, color: '#f6bd60' },
      { type: 'cushion', x: -3.6, z: 4.0, r: 180, color: '#f5cac3' },
      { type: 'sofa', x: 2.2, z: 4.6, r: 180, color: '#f4efe6' },
      { type: 'armchair', x: 4.5, z: 2.6, r: -110, color: '#f4efe6' },
      { type: 'plant', kind: 'palm', x: -8.0, z: -5.8 },
      { type: 'plant', kind: 'palm', x: 8.0, z: -5.8 },
      { type: 'plant', kind: 'palm', x: -8.0, z: 5.8 },
      { type: 'plant', kind: 'flowers', x: 0.8, z: 6.2 },
      { type: 'plant', kind: 'cactus', x: 8.1, z: 5.9 },
      { type: 'plant', kind: 'grass', x: -8.0, z: 0.4 },
      { type: 'lantern', x: -6.8, z: 0.0 },
      { type: 'lantern', x: 1.4, z: -6.0 },
      { type: 'lantern', x: -0.8, z: 6.0 },
      { type: 'stringLights', points: [[-8.6, -6.6], [-8.6, 6.6], [8.6, 6.6], [8.6, -6.6]], height: 3.4 },
      { type: 'turntable', x: 4.6, z: 6.1, r: 180 },
    ],
  },
];

export const ROOM_BY_ID = Object.fromEntries(ROOMS.map((r) => [r.id, r]));

// ---------------------------------------------------------------- library & maid

// The borrowable books/magazines of a room (from shelves and racks in its layout).
export function libraryIds(room) {
  return room.layout.flatMap((item) => item.books || []);
}

export const MAID_SPEED = 1.9; // m/s
export const MAID_AFTER = 15_000; // a left book waits at least this long before the maid comes
export const MAID_EVERY = 40_000; // and she visits at most this often

function front(item, d) {
  const a = ((item.r || 0) * Math.PI) / 180;
  return { x: item.x + Math.sin(a) * d, z: item.z + Math.cos(a) * d };
}

// The maid's round: in through the door, pick up each left book (nearest
// first), put them back where they live, and out again. Server and clients
// compute the same plan, so everyone sees the same walk with the same timing.
// books: [{ id, x, z }] -> { stops: [{ kind, x, z, ids, at, wait }], duration } (seconds)
export function maidPlan(room, books) {
  const doorItem = room.layout.find((i) => i.type === 'door');
  if (!doorItem || !books.length) return null;
  const homes = room.layout.filter((i) => i.books);
  const door = front(doorItem, 0.8);
  const stops = [{ kind: 'door', ...door, wait: 1.0 }];
  let cur = door;
  const todo = [...books];
  while (todo.length) {
    todo.sort((a, b) => Math.hypot(a.x - cur.x, a.z - cur.z) - Math.hypot(b.x - cur.x, b.z - cur.z));
    const b = todo.shift();
    stops.push({ kind: 'pick', x: b.x, z: b.z, ids: [b.id], wait: 0.8 });
    cur = b;
  }
  for (const home of homes) {
    const ids = books.filter((b) => home.books.includes(b.id)).map((b) => b.id);
    if (ids.length) stops.push({ kind: 'shelve', ...front(home, 0.75), ids, wait: 1.2 });
  }
  stops.push({ kind: 'exit', ...door, wait: 0.8 });
  let t = 0;
  let prev = stops[0];
  for (const st of stops) {
    t += Math.hypot(st.x - prev.x, st.z - prev.z) / MAID_SPEED;
    st.at = t;
    t += st.wait;
    prev = st;
  }
  return { stops, duration: t };
}
