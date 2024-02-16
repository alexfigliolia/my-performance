import { HTTPClient } from "./HTTPClient";
import { Poller } from "./Poller";

export class WebSocketClient extends HTTPClient {
  public Poller?: Poller;
  public Socket?: WebSocket;

  public open(requestInit: RequestInit) {
    if (typeof window.WebSocket === undefined) {
      this.Poller = new Poller(this.destination);
      return this.Poller.open(requestInit);
    }
    this.Socket = new WebSocket(this.destination);
    this.subscribeInternal();
  }

  public close() {
    if (this.Socket) {
      this.Socket.close();
      this.unsubscribeInternal();
    }
  }

  public onData(callback: (response: Response) => void) {
    const ID = this.on("on-data", callback);
    this.listeners.push({ ID, event: "on-data" });
  }

  public onError(callback: (error: Error) => void) {
    const ID = this.on("on-error", callback);
    this.listeners.push({ ID, event: "on-error" });
  }

  private subscribeInternal() {
    if (!this.Socket) {
      return;
    }
    this.Socket.addEventListener("error", this.emitError);
    this.Socket.addEventListener("message", this.emitMessage);
  }

  private unsubscribeInternal() {
    if (!this.Socket) {
      return;
    }
    this.Socket.removeEventListener("error", this.emitError);
    this.Socket.removeEventListener("message", this.emitMessage);
  }

  private emitMessage = (event: MessageEvent) => {
    this.emit("on-data", new Response(event.data));
  };

  private emitError = (_: Event) => {
    this.emit("on-error", new Error("WS error"));
  };
}
