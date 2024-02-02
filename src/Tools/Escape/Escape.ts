import type { IEscape } from "./types";

export class Escape {
  keys: Set<string>;
  callback: () => void;
  constructor({ keys = ["Escape"], callback }: IEscape) {
    this.keys = new Set(keys);
    this.callback = callback;
  }

  public initialize() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  public switch(toggle: boolean) {
    if (toggle) {
      return this.initialize();
    }
    this.destroy();
  }

  public destroy() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (this.keys.has(e.key)) {
      this.callback();
    }
  };
}
