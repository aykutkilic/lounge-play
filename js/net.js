// Thin WebSocket client: JSON messages, auto-reconnect, and a server clock
// estimate (used to keep the music in sync for everyone in a room).

export class Net extends EventTarget {
  constructor() {
    super();
    this.ws = null;
    this.offset = 0;
    this.bestRtt = Infinity;
    this.pendingJoin = null;
    this.connected = false;
    this.connect();
  }

  connect() {
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(`${proto}://${location.host}/ws`);
    this.ws = ws;
    ws.onopen = () => {
      this.connected = true;
      this.bestRtt = Infinity;
      if (this.pendingJoin) ws.send(JSON.stringify(this.pendingJoin));
      this.pendingJoin = null;
      this.syncClock();
      this.dispatchEvent(new CustomEvent('open'));
    };
    ws.onmessage = (ev) => {
      let msg;
      try { msg = JSON.parse(ev.data); } catch { return; }
      if (msg.t === 'pong') {
        const now = this.localNow();
        const rtt = now - msg.c;
        if (rtt < this.bestRtt) {
          this.bestRtt = rtt;
          this.offset = msg.s - (msg.c + rtt / 2);
        }
        return;
      }
      this.dispatchEvent(new CustomEvent(msg.t, { detail: msg }));
    };
    ws.onclose = () => {
      const was = this.connected;
      this.connected = false;
      clearInterval(this.pingTimer);
      if (was) this.dispatchEvent(new CustomEvent('close'));
      setTimeout(() => this.connect(), 1500);
    };
  }

  syncClock() {
    let n = 0;
    clearInterval(this.pingTimer);
    const ping = () => this.send({ t: 'ping', c: this.localNow() });
    ping();
    this.pingTimer = setInterval(() => {
      ping();
      // a quick burst first, then a slow trickle to follow drift
      if (++n === 6) {
        clearInterval(this.pingTimer);
        this.pingTimer = setInterval(() => { this.bestRtt *= 1.5; ping(); }, 15000);
      }
    }, 400);
  }

  localNow() {
    return performance.timeOrigin + performance.now();
  }

  serverNow(local = this.localNow()) {
    return local + this.offset;
  }

  send(msg) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(msg));
    else if (msg.t === 'join') this.pendingJoin = msg; // sent as soon as we're connected
  }

  async counts() {
    const list = await (await fetch('api/rooms')).json();
    return Object.fromEntries(list.map((x) => [x.id, x.count]));
  }

  on(type, fn) {
    this.addEventListener(type, (e) => fn(e.detail));
  }
}
