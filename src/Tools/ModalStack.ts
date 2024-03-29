export class ModalStack {
  private static readonly storage = new Set<() => void>();

  public static get length() {
    return this.storage.size;
  }

  public static peek(): (() => void) | undefined {
    return Array.from(this.storage.values())[this.length - 1];
  }

  public static pop = () => {
    const FN = this.peek();
    if (FN) {
      this.storage.delete(FN);
      FN();
      this.detachListener();
    }
    return FN;
  };

  public static push(FN: () => void) {
    if (this.storage.has(FN)) {
      return;
    }
    if (!this.length) {
      window.addEventListener("keydown", this.onEscape);
    }
    this.storage.add(FN);
  }

  public static delete(FN: () => void) {
    this.storage.delete(FN);
    this.detachListener();
  }

  public static clearAll() {
    for (const FN of this.storage) {
      FN();
    }
    this.storage.clear();
    this.detachListener();
  }

  private static detachListener() {
    if (!this.length) {
      window.removeEventListener("keydown", this.onEscape);
    }
  }

  private static onEscape = (e: KeyboardEvent) => {
    if ("key" in e && e.key === "Escape") {
      return this.pop();
    }
    if ("keyCode" in e && e.keyCode === 27) {
      return this.pop();
    }
    if ("which" in e && e.which === 27) {
      return this.pop();
    }
  };
}
