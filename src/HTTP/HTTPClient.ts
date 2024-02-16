import { EventEmitter } from "@figliolia/event-emitter";
import type { Listener, Stream } from "./types";

export abstract class HTTPClient extends EventEmitter<Stream> {
  public readonly destination: string;
  protected readonly listeners: Listener[] = [];
  constructor(destination: string) {
    super();
    this.destination = destination;
  }

  abstract close(): void;
  abstract open(requestInit: RequestInit): void;
  abstract onError(callback: (error: Error) => void): void;
  abstract onData(callback: (data: Response) => void): void;

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
