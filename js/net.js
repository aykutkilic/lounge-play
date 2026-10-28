// Thin WebSocket client: JSON messages and auto-reconnect.

export class Net extends EventTarget {
  constructor() {
    super();
    this.ws = null;
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
      if (this.pendingJoin) ws.send(JSON.stringify(this.pendingJoin));
      this.pendingJoin = null;
      this.dispatchEvent(new CustomEvent('open'));
    };
    ws.onmessage = (ev) => {
      let msg;
      try { msg = JSON.parse(ev.data); } catch { return; }
      this.dispatchEvent(new CustomEvent(msg.t, { detail: msg }));
    };
    ws.onclose = () => {
      const was = this.connected;
      this.connected = false;
      if (was) this.dispatchEvent(new CustomEvent('close'));
      setTimeout(() => this.connect(), 1500);
    };
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
