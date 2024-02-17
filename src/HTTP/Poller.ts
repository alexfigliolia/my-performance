import { HTTPClient } from "./HTTPClient";

export class Poller extends HTTPClient {
  public interval: number;
  private intervalID: ReturnType<typeof setInterval> | null = null;
  constructor(destination: string, interval = 3000) {
    super(destination);
    this.interval = interval;
  }

  public open(requestInit: RequestInit) {
    this.clearInterval();
    this.initiate(requestInit);
  }

  public close() {
    this.clearInterval();
    this.unsubscribe();
  }

  private initiate(requestInit: RequestInit) {
    this.clearInterval();
    this.intervalID = setInterval(() => {
      void this.request(requestInit);
    }, this.interval);
  }

  private async request(requestInit: RequestInit) {
    try {
      const data = await fetch(this.destination, requestInit);
      this.emit("on-data", data);
    } catch (error: any) {
      this.emit("on-error", error as Error);
    }
  }

  private clearInterval() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  }
}
