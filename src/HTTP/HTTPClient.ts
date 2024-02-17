import { EventEmitter } from "@figliolia/event-emitter";
import type { Listener, Stream } from "./types";

export abstract class HTTPClient<T = Response> extends EventEmitter<Stream<T>> {
  public readonly destination: string;
  protected readonly listeners: Listener[] = [];
  constructor(destination: string) {
    super();
    this.destination = destination;
  }

  abstract close(): void;
  abstract open(requestInit: RequestInit): void;

  public onData(callback: (response: T) => void) {
    this.listeners.push({
      event: "on-data",
      ID: this.on("on-data", callback),
    });
  }

  public onError(callback: (error: Error) => void) {
    this.listeners.push({
      event: "on-error",
      ID: this.on("on-error", callback),
    });
  }

  public unsubscribe() {
    while (this.listeners.length) {
      const listener = this.listeners.pop();
      if (listener) {
        const { ID, event } = listener;
        this.off(event, ID);
      }
    }
  }
}
