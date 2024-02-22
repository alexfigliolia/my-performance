import type { Callback } from "Types/Generics";

export class Throttler<T extends Callback = Callback> {
  public FN: T;
  threshold: number;
  public queued = false;
  private throttler: ReturnType<typeof setTimeout> | null = null;
  constructor(FN: T, threshold: number) {
    this.FN = FN;
    this.threshold = threshold;
  }

  public execute(...args: Parameters<T>) {
    if (this.throttler) {
      return this.enqueue();
    }
    void this.dequeue(...args);
    this.throttler = setTimeout(() => {
      if (this.queued) {
        void this.dequeue(...args);
      }
      this.clear();
    }, this.threshold);
  }

  public clear() {
    if (this.throttler) {
      clearTimeout(this.throttler);
      this.throttler = null;
    }
    this.queued = false;
  }

  private enqueue() {
    if (!this.queued) {
      this.queued = true;
    }
  }

  private dequeue(...args: Parameters<T>) {
    this.queued = false;
    return this.FN(...args);
  }
}
