import { rng, hashString } from './textures.js';

// Generative lo-fi, synthesized live with Web Audio in each listener's own
// browser. Every note is derived from (room, bar number), so each lounge has
// its own tune; it starts from the intro when you walk in. Nothing is streamed
// or synced between people.

const mtof = (m) => 440 * 2 ** ((m - 69) / 12);

function noiseBuffer(ctx, seconds, fill) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) fill(buf.getChannelData(ch), ctx.sampleRate);
  return buf;
}

function brown(data) {
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
    data[i] = last * 3.5;
  }
}

function pink(data) {
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < data.length; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + w * 0.0555179;
    b1 = 0.99332 * b1 + w * 0.0750759;
    b2 = 0.969 * b2 + w * 0.153852;
    b3 = 0.8665 * b3 + w * 0.3104856;
    b4 = 0.55 * b4 + w * 0.5329522;
    b5 = -0.7616 * b5 - w * 0.016898;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
    b6 = w * 0.115926;
  }
}

export class Music {
  constructor() {
    this.ctx = null;
    this.volume = 0.6;
    this.muted = false;
    this.session = null;
  }

  ensure() {
    if (!this.ctx) {
      const ctx = new AudioContext();
      this.ctx = ctx;
      this.master = ctx.createGain();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 3;
      this.master.connect(comp).connect(ctx.destination);
      this.applyVolume();

      this.reverb = ctx.createConvolver();
      this.reverb.buffer = noiseBuffer(ctx, 3, (d, sr) => {
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 2.6 * Math.exp(-i / (sr * 0.9));
      });
      this.reverbOut = ctx.createGain();
      this.reverbOut.gain.value = 0.35;
      this.reverb.connect(this.reverbOut).connect(this.master);

      this.whiteBuf = noiseBuffer(ctx, 1, (d) => { for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; });
      this.crackleBuf = noiseBuffer(ctx, 5, (d, sr) => {
        for (let i = 0; i < d.length; i++) {
          d[i] = (Math.random() * 2 - 1) * 0.012;
          if (Math.random() < 3 / sr * 6) {
            const amp = (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? -1 : 1);
            for (let k = 0; k < 40 && i + k < d.length; k++) d[i + k] += amp * Math.exp(-k / 6);
          }
        }
      });
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  setVolume(v) {
    this.volume = v;
    this.applyVolume();
  }

  setMuted(m) {
    this.muted = m;
    this.applyVolume();
  }

  applyVolume() {
    if (!this.master) return;
    const v = this.muted ? 0 : this.volume;
    this.master.gain.setTargetAtTime(v * v * 0.9, this.ctx.currentTime, 0.1);
  }

  play(roomId, cfg) {
    this.ensure();
    this.stop();
    const ctx = this.ctx;
    const out = ctx.createGain();
    out.gain.setValueAtTime(0, ctx.currentTime);
    out.gain.linearRampToValueAtTime(1, ctx.currentTime + 2.5);
    out.connect(this.master);

    // music bus: warm low-pass + gentle saturation = lo-fi tone
    const music = ctx.createGain();
    music.gain.value = 0.9;
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.value = cfg.tone;
    tone.Q.value = 0.5;
    const sat = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = (i / 512) - 1; curve[i] = Math.tanh(x * 1.6) / Math.tanh(1.6); }
    sat.curve = curve;
    music.connect(sat).connect(tone).connect(out);
    const send = ctx.createGain();
    send.gain.value = 0.5;
    send.connect(this.reverb);

    // wobbly tape: slow LFO on the tone filter
    const wob = ctx.createOscillator();
    const wobGain = ctx.createGain();
    wob.frequency.value = 0.15;
    wobGain.gain.value = cfg.tone * 0.12;
    wob.connect(wobGain).connect(tone.frequency);
    wob.start();

    const s = {
      roomId, cfg, out, music, send, nodes: [wob], timers: [],
      seed: hashString(roomId), start: ctx.currentTime + 0.15, nextStep: 0, bars: new Map(),
    };
    this.session = s;

    // vinyl crackle
    const crackle = ctx.createBufferSource();
    crackle.buffer = this.crackleBuf;
    crackle.loop = true;
    const cg = ctx.createGain();
    cg.gain.value = 0.22;
    const chp = ctx.createBiquadFilter();
    chp.type = 'highpass';
    chp.frequency.value = 900;
    crackle.connect(chp).connect(cg).connect(out);
    crackle.start();
    s.nodes.push(crackle);

    this.ambience(s, cfg.ambience);
    s.timers.push(setInterval(() => this.schedule(s), 50));
    this.schedule(s);
  }

  stop() {
    const s = this.session;
    if (!s) return;
    this.session = null;
    s.timers.forEach(clearInterval);
    s.timers.forEach(clearTimeout);
    const t = this.ctx.currentTime;
    s.out.gain.cancelScheduledValues(t);
    s.out.gain.setValueAtTime(s.out.gain.value, t);
    s.out.gain.linearRampToValueAtTime(0, t + 0.8);
    setTimeout(() => {
      for (const n of s.nodes) { try { n.stop(); } catch { /* already stopped */ } }
      s.out.disconnect();
    }, 1000);
  }

  // ---------------------------------------------------------------- sequencer

  schedule(s) {
    if (this.session !== s) return;
    const stepDur = 60 / s.cfg.bpm / 4;
    const now = this.ctx.currentTime;
    // background tabs only get timer ticks about once a second, so schedule further ahead
    const horizon = now + (document.hidden ? 1.5 : 0.3);
    // if we fell far behind (e.g. the tab was asleep), skip ahead instead of playing a burst
    if (s.start + s.nextStep * stepDur < now - 0.2) s.nextStep = Math.ceil((now - s.start) / stepDur);
    while (s.start + s.nextStep * stepDur < horizon) {
      const step = s.nextStep++;
      const swing = step % 2 ? s.cfg.swing * stepDur : 0;
      const time = s.start + step * stepDur + swing;
      if (time > now - 0.01) this.playStep(s, step, Math.max(time, now), stepDur);
    }
  }

  bar(s, n) {
    let b = s.bars.get(n);
    if (b) return b;
    const r = rng(s.seed ^ Math.imul(n + 1, 2654435761));
    const cfg = s.cfg;
    const section = Math.floor(n / 8) % 4; // 0 intro · 1 groove · 2 groove + lead · 3 breakdown
    const chord = cfg.progression[n % cfg.progression.length];
    b = {
      section, chord,
      chordHits: [[0, 14]].concat(r() < 0.5 ? [[10, 5]] : r() < 0.5 ? [[6, 3]] : []),
      kick: section === 1 || section === 2 ? cfg.kick.concat(r() < 0.3 ? [14] : []) : section === 3 && n % 2 ? [0] : [],
      snare: section === 1 || section === 2 ? [4, 12].concat(r() < 0.2 ? [15] : []) : [],
      hats: section === 0 ? [] : [0, 2, 4, 6, 8, 10, 12, 14].concat(r() < 0.3 ? [7, 15] : []),
      hatVel: Array.from({ length: 16 }, () => 0.5 + r() * 0.5),
      bass: section === 0 ? [] : [[0, 6, chord.bass]].concat(r() < 0.6 ? [[r() < 0.5 ? 8 : 10, 4, chord.bass + (r() < 0.5 ? 7 : 12)]] : []),
      lead: [],
    };
    if (section >= 2 || (section === 1 && n % 4 === 3)) {
      // start each phrase from a seeded note so every listener hears the same melody
      let idx = Math.floor(r() * cfg.scale.length);
      for (let st = 0; st < 16; st += 2) {
        if (r() < cfg.density) {
          idx = Math.max(0, Math.min(cfg.scale.length - 1, idx + Math.floor(r() * 5) - 2));
          b.lead.push([st, 2 + Math.floor(r() * 3) * 2, cfg.scale[idx], 0.6 + r() * 0.4]);
        }
      }
    }
    s.bars.set(n, b);
    if (s.bars.size > 8) s.bars.delete(s.bars.keys().next().value);
    return b;
  }

  playStep(s, step, time, stepDur) {
    const n = Math.floor(step / 16);
    const i = step % 16;
    const b = this.bar(s, n);
    for (const [at, len] of b.chordHits) if (at === i) this.keys(s, time, b.chord.notes, len * stepDur, at === 0 ? 0.8 : 0.5);
    if (b.kick.includes(i)) this.kick(s, time);
    if (b.snare.includes(i)) this.snare(s, time, i === 15 ? 0.3 : 0.8);
    if (b.hats.includes(i)) this.hat(s, time, b.hatVel[i] * (i % 4 === 2 ? 1 : 0.6));
    for (const [at, len, note] of b.bass) if (at === i) this.bass(s, time, note, len * stepDur);
    for (const [at, len, note, vel] of b.lead) if (at === i) this.lead(s, time, note, len * stepDur, vel);
  }

  // ---------------------------------------------------------------- instruments

  env(g, time, peak, attack, decay, sustain, end, release) {
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(peak, time + attack);
    g.gain.setTargetAtTime(peak * sustain, time + attack, decay);
    g.gain.setValueAtTime(peak * sustain, end);
    g.gain.setTargetAtTime(0.0001, end, release);
  }

  keys(s, time, notes, dur, vel) {
    const ctx = this.ctx;
    notes.forEach((m, k) => {
      const t = time + k * 0.012; // a lazy strum
      const g = ctx.createGain();
      this.env(g, t, 0.07 * vel, 0.015, 0.4, 0.45, t + dur, 0.35);
      g.connect(s.music);
      g.connect(s.send);
      for (const [type, mult, amp, det] of [['sine', 1, 1, 0], ['triangle', 1, 0.35, 6], ['sine', 2, 0.12, 0]]) {
        const o = ctx.createOscillator();
        o.type = type;
        o.frequency.value = mtof(m) * mult;
        o.detune.value = det + (Math.random() - 0.5) * 6;
        const a = ctx.createGain();
        a.gain.value = amp;
        o.connect(a).connect(g);
        o.start(t);
        o.stop(t + dur + 1.8);
      }
    });
  }

  bass(s, time, m, dur) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    this.env(g, time, 0.22, 0.01, 0.25, 0.6, time + dur, 0.08);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 420;
    g.connect(lp).connect(s.music);
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = mtof(m);
    const o2 = ctx.createOscillator();
    o2.type = 'triangle';
    o2.frequency.value = mtof(m);
    const g2 = ctx.createGain();
    g2.gain.value = 0.3;
    o.connect(g);
    o2.connect(g2).connect(g);
    for (const x of [o, o2]) { x.start(time); x.stop(time + dur + 0.6); }
  }

  lead(s, time, m, dur, vel) {
    const ctx = this.ctx;
    const type = s.cfg.lead;
    const g = ctx.createGain();
    g.connect(s.music);
    g.connect(s.send);
    const f = mtof(m);
    const parts = {
      keys: [['sine', 1, 1], ['sine', 3, 0.08]],
      pluck: [['triangle', 1, 1], ['sine', 2, 0.2]],
      bell: [['sine', 1, 1], ['sine', 2.76, 0.25], ['sine', 5.4, 0.08]],
      marimba: [['sine', 1, 1], ['sine', 4, 0.25]],
    }[type] || [['sine', 1, 1]];
    const decay = { keys: 0.6, pluck: 0.25, bell: 0.9, marimba: 0.18 }[type] ?? 0.4;
    const peak = 0.06 * vel;
    this.env(g, time, peak, 0.006, decay, type === 'keys' ? 0.3 : 0.05, time + dur, 0.3);
    let dest = g;
    if (type === 'pluck') {
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(3500, time);
      lp.frequency.exponentialRampToValueAtTime(700, time + 0.3);
      lp.connect(g);
      dest = lp;
    }
    for (const [wave, mult, amp] of parts) {
      const o = ctx.createOscillator();
      o.type = wave;
      o.frequency.value = f * mult;
      const a = ctx.createGain();
      a.gain.value = amp;
      o.connect(a).connect(dest);
      o.start(time);
      o.stop(time + dur + 2);
    }
  }

  kick(s, time) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(110, time);
    o.frequency.exponentialRampToValueAtTime(42, time + 0.12);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(0.55, time + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.38);
    o.connect(g).connect(s.music);
    o.start(time);
    o.stop(time + 0.4);
  }

  noiseHit(s, time, { type, freq, q = 1, peak, decay }) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.whiteBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(peak, time + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, time + decay);
    src.connect(f).connect(g).connect(s.music);
    src.start(time, Math.random() * 0.5);
    src.stop(time + decay + 0.05);
  }

  snare(s, time, vel) {
    this.noiseHit(s, time, { type: 'bandpass', freq: 1700, q: 0.7, peak: 0.22 * vel, decay: 0.2 });
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(190, time);
    o.frequency.exponentialRampToValueAtTime(120, time + 0.08);
    g.gain.setValueAtTime(0.12 * vel, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);
    o.connect(g).connect(s.music);
    o.start(time);
    o.stop(time + 0.15);
  }

  hat(s, time, vel) {
    this.noiseHit(s, time, { type: 'highpass', freq: 7000, q: 0.5, peak: 0.05 * vel, decay: 0.045 });
  }

  // ---------------------------------------------------------------- ambience

  loopNoise(s, fill, seconds, chain) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer(ctx, seconds, fill);
    src.loop = true;
    let node = src;
    for (const n of chain) node = node.connect(n);
    node.connect(s.out);
    src.start();
    s.nodes.push(src);
  }

  filter(type, freq, q = 0.7) {
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    return f;
  }

  gain(v) {
    const g = this.ctx.createGain();
    g.gain.value = v;
    return g;
  }

  ambience(s, kind) {
    const ctx = this.ctx;
    if (kind === 'rain') {
      this.loopNoise(s, pink, 4, [this.filter('lowpass', 2400), this.gain(0.42)]);
      this.loopNoise(s, (d, sr) => {
        for (let i = 0; i < d.length; i++) {
          d[i] = 0;
          if (Math.random() < 140 / sr) for (let k = 0; k < 60 && i + k < d.length; k++) d[i + k] += (Math.random() * 2 - 1) * 0.5 * Math.exp(-k / 10);
        }
      }, 3, [this.filter('bandpass', 3500, 0.6), this.gain(0.25)]);
    } else if (kind === 'fire') {
      this.loopNoise(s, brown, 5, [this.filter('lowpass', 500), this.gain(0.35)]);
      this.loopNoise(s, (d, sr) => {
        for (let i = 0; i < d.length; i++) {
          d[i] = 0;
          if (Math.random() < 9 / sr) {
            const amp = 0.3 + Math.random() * 0.7;
            const len = 60 + Math.random() * 300;
            for (let k = 0; k < len && i + k < d.length; k++) d[i + k] += (Math.random() * 2 - 1) * amp * Math.exp(-k / (len / 5));
          }
        }
      }, 6, [this.filter('bandpass', 2200, 0.5), this.gain(0.3)]);
    } else if (kind === 'waves') {
      const lp = this.filter('lowpass', 700);
      const swell = this.gain(0.2);
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.09;
      const depth = this.gain(0.18);
      lfo.connect(depth).connect(swell.gain);
      lfo.start();
      s.nodes.push(lfo);
      this.loopNoise(s, brown, 6, [lp, swell]);
      const foam = this.gain(0.04);
      const foamDepth = this.gain(0.04);
      lfo.connect(foamDepth).connect(foam.gain);
      this.loopNoise(s, pink, 4, [this.filter('bandpass', 2500, 0.4), foam]);
    } else if (kind === 'birds') {
      this.loopNoise(s, pink, 4, [this.filter('bandpass', 900, 0.3), this.gain(0.03)]);
      const chirp = () => {
        if (this.session !== s) return;
        const t0 = ctx.currentTime + 0.05;
        const base = 2400 + Math.random() * 1800;
        const count = 2 + Math.floor(Math.random() * 4);
        for (let k = 0; k < count; k++) {
          const t = t0 + k * (0.09 + Math.random() * 0.05);
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.frequency.setValueAtTime(base, t);
          o.frequency.exponentialRampToValueAtTime(base * (1.3 + Math.random() * 0.4), t + 0.05);
          o.frequency.exponentialRampToValueAtTime(base * 0.9, t + 0.08);
          g.gain.setValueAtTime(0.0001, t);
          g.gain.linearRampToValueAtTime(0.025, t + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
          const pan = ctx.createStereoPanner();
          pan.pan.value = Math.random() * 2 - 1;
          o.connect(g).connect(pan).connect(s.out);
          pan.connect(this.reverb);
          o.start(t);
          o.stop(t + 0.1);
        }
        s.timers.push(setTimeout(chirp, 2500 + Math.random() * 6000));
      };
      s.timers.push(setTimeout(chirp, 1500));
    }
  }
}
