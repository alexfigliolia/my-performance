import type { Callback } from "Types/Generics";

export class Debouncer<T extends Callback = Callback> {
  public FN: T;
  threshold: number;
  private debouncer: ReturnType<typeof setTimeout> | null = null;
  constructor(FN: T, threshold: number) {
    this.FN = FN;
    this.threshold = threshold;
  }

  public execute(...args: Parameters<T>) {
    if (this.debouncer) {
      this.clear();
    }
    this.debouncer = setTimeout(() => {
      void this.FN(...args);
      this.clear();
    }, this.threshold);
  }

  public clear() {
    if (this.debouncer) {
      clearTimeout(this.debouncer);
      this.debouncer = null;
    }
  }
}
