import type { Callback } from "Types/Generics";

export class Throttler {
  threshold: number;
  public FN: Callback;
  public throttled = false;
  private throttler: ReturnType<typeof setTimeout> | null = null;
  constructor(FN: Callback, threshold: number) {
    this.FN = FN;
    this.threshold = threshold;
  }

  public execute() {
    if (this.throttled) {
      return;
    }
    this.throttled = true;
    void this.FN();
    this.throttler = setTimeout(() => {
      this.clear();
    });
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
