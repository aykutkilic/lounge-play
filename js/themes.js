import * as TX from './textures.js';

// Look & sound of each lounge. Room layouts live in shared.js; this file is
// client-only: materials, lighting, ambience and the generative music recipe.
// Chord voicings are MIDI note numbers.

export const THEMES = {
  fireside: {
    background: '#1c130e',
    fog: ['#1c130e', 40, 90],
    exposure: 1.15,
    floor: () => TX.woodPlanks({ base: '#7a4e30', repeat: [3, 2.4] }),
    slab: '#2f2118',
    walls: { kind: 'solid', height: 4.2, paper: { base: '#3d5747', accent: '#45614f' }, wainscot: '#4a3020', trim: '#2a1c13' },
    outside: 'none',
    hemi: ['#ffd9b0', '#2b1a10', 0.3],
    key: { color: '#ffdcb0', intensity: 0.6, pos: [5, 14, 9] },
    envIntensity: 0.22,
    particles: 'dust',
    dustColor: '#ffcf8a',
    wood: '#5a3b28',
    shelfWood: '#4a3020',
    counter: '#3b4d3f',
    counterTop: '#d9cbb3',
    awning: '#8c2f39',
    curtain: '#7d2b33',
    chairSeat: '#6e4630',
    record: '#e9c46a',
    lampPower: 7,
    music: {
      title: 'hearth & paper',
      bpm: 72,
      swing: 0.3,
      progression: [
        { bass: 38, notes: [53, 57, 60, 64] }, // Dm9
        { bass: 43, notes: [53, 59, 64, 69] }, // G13
        { bass: 36, notes: [52, 55, 59, 62] }, // Cmaj9
        { bass: 45, notes: [55, 59, 60, 64] }, // Am9
      ],
      scale: [60, 62, 64, 67, 69, 72, 74, 76],
      lead: 'keys',
      tone: 2600,
      kick: [0, 10],
      density: 0.32,
      ambience: 'fire',
    },
  },

  greenhouse: {
    background: '#cfe8f5',
    fog: ['#cfe3ee', 60, 260],
    exposure: 0.62,
    floor: () => TX.tiles({ a: '#c97b54', b: '#b96a46', grout: '#eadfce', n: 8, repeat: [3, 2.4] }),
    slab: '#9c8b7a',
    walls: { kind: 'glass', height: 4.2, knee: '#b5674d', frame: '#f4f1ea' },
    roof: true,
    ceiling: 4.2,
    outside: 'garden',
    sun: { elevation: 52, azimuth: 50, turbidity: 2.5, rayleigh: 1.1, clouds: 0.3 },
    hemi: ['#eaf6ff', '#6b8f5a', 0.25],
    key: { color: '#fff4e2', intensity: 2.6, pos: [9, 15, 7] },
    envIntensity: 0.55,
    particles: 'pollen',
    dustColor: '#fff6c8',
    wood: '#b08968',
    counter: '#5e8c61',
    counterTop: '#f2ede4',
    awning: '#5e8c61',
    chairFrame: '#f2ede4',
    tableTop: '#f7f3ec',
    record: '#52b788',
    counterLight: 2,
    greens: ['#2d6a4f', '#40916c', '#52b788', '#1b4332'],
    music: {
      title: 'photosynthesis',
      bpm: 86,
      swing: 0.18,
      progression: [
        { bass: 41, notes: [57, 60, 64, 67] }, // Fmaj9
        { bass: 40, notes: [55, 59, 62, 67] }, // Em7
        { bass: 38, notes: [53, 57, 60, 64] }, // Dm9
        { bass: 43, notes: [53, 60, 62, 67] }, // G7sus
      ],
      scale: [72, 74, 76, 79, 81, 84, 86],
      lead: 'pluck',
      tone: 4200,
      kick: [0, 7, 10],
      density: 0.4,
      ambience: 'birds',
    },
  },

  rooftop: {
    background: '#0b0f1c',
    fog: ['#1a1d27', 35, 150],
    exposure: 1.2,
    floor: () => TX.concrete({ base: '#4d535c', repeat: [3, 2.4] }),
    floorRough: 0.32,
    floorMetal: 0.1,
    slab: '#2a2e36',
    walls: { kind: 'parapet', height: 1.0, color: '#5a5f68', rail: '#8a8f98' },
    outside: 'city',
    sky: [[0, '#07080d'], [0.32, '#12151d'], [0.45, '#2c2a2e'], [0.5, '#46403c'], [0.53, '#181b24'], [1, '#0b0d14']],
    hemi: ['#46506a', '#141218', 0.45],
    key: { color: '#aab8d8', intensity: 0.35, pos: [-6, 14, 6] },
    envIntensity: 1.2,
    particles: 'rain',
    wood: '#4a3a30',
    counter: '#2b3a55',
    counterTop: '#c9c3b8',
    awning: '#2a9d8f',
    record: '#ff5fa2',
    pergolaLight: 4,
    counterLight: 5,
    greens: ['#2f5d50', '#3e7a5e', '#4c956c', '#1e3d32'],
    music: {
      title: 'neon puddles',
      bpm: 70,
      swing: 0.32,
      progression: [
        { bass: 45, notes: [55, 59, 60, 64] }, // Am9
        { bass: 41, notes: [52, 57, 60, 64] }, // Fmaj7
        { bass: 36, notes: [52, 55, 59, 64] }, // Cmaj7
        { bass: 40, notes: [55, 59, 62, 67] }, // Em7
      ],
      scale: [69, 72, 74, 76, 79, 81, 84],
      lead: 'bell',
      tone: 2200,
      kick: [0, 7, 10],
      density: 0.28,
      ambience: 'rain',
    },
  },

  terrace: {
    background: '#f2a46b',
    fog: ['#b98a7c', 90, 420],
    exposure: 0.85,
    floor: () => TX.woodPlanks({ base: '#b0835a', planks: 10, seed: 9, repeat: [3, 2.4] }),
    slab: '#7a5a40',
    slabDepth: 0.35,
    walls: { kind: 'railing', height: 1.05, color: '#8d6748', rope: '#e6d3b3' },
    outside: 'ocean',
    sun: { elevation: 1.6, azimuth: 172, turbidity: 10, rayleigh: 3.2, mie: 0.012, mieG: 0.92, clouds: 0.3 },
    hemi: ['#ffc59a', '#4a3a5a', 0.3],
    key: { color: '#ffb070', intensity: 2.6, pos: [-3, 6, -20] },
    envIntensity: 0.9,
    particles: 'fireflies',
    wood: '#a0764f',
    counter: '#7a5a40',
    counterTop: '#e9d8b4',
    awning: '#e07a5f',
    record: '#f6bd60',
    stringLight: 2.5,
    counterLight: 3,
    greens: ['#3a7d44', '#57a55a', '#6aa84f', '#2d6a4f'],
    music: {
      title: 'golden hour',
      bpm: 90,
      swing: 0.15,
      progression: [
        { bass: 38, notes: [54, 57, 61, 64] }, // Dmaj9
        { bass: 47, notes: [54, 57, 62, 66] }, // Bm7
        { bass: 43, notes: [54, 59, 62, 66] }, // Gmaj7
        { bass: 45, notes: [55, 59, 62, 64] }, // A7sus
      ],
      scale: [66, 69, 71, 74, 76, 78, 81],
      lead: 'marimba',
      tone: 4800,
      kick: [0, 6, 10],
      density: 0.38,
      ambience: 'waves',
    },
  },
};
