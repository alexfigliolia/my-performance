import type { Callback } from "Types/Generics";

export class Throttler<T extends Callback = Callback> {
  public FN: T;
  threshold: number;
  public throttled = false;
  private throttler: ReturnType<typeof setTimeout> | null = null;
  constructor(FN: T, threshold: number) {
    this.FN = FN;
    this.threshold = threshold;
  }

  public execute(...args: Parameters<T>) {
    if (this.throttled) {
      return;
    }
    this.throttled = true;
    void this.FN(...args);
    this.throttler = setTimeout(() => {
      this.clear();
    }, this.threshold);
  }

  public clear() {
    this.throttled = false;
    this.clearThrottle();
  }

  private clearThrottle() {
    if (this.throttler) {
      clearTimeout(this.throttler);
      this.throttler = null;
    }
  }
}
