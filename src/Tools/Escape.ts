import { AutoIncrementingID } from "@figliolia/event-emitter";
import type { Hook } from "Tools/Hooks";

export class Escape implements Hook {
  ID?: string;
  callback: () => void;
  private static readonly IDs = new AutoIncrementingID();
  private static readonly stack = new Map<string, Escape>();
  constructor(callback: () => void) {
    this.callback = callback;
  }

  public initialize() {
    if (this.ID) {
      return;
    }
    if (!Escape.stack.size) {
      window.addEventListener("keydown", Escape.onKeyDown);
    }
    this.ID = Escape.IDs.get();
    Escape.stack.set(this.ID, this);
  }

  public switch(toggle: boolean) {
    if (toggle) {
      return this.initialize();
    }
    this.destroy();
  }

  public destroy() {
    if (!this.ID) {
      return;
    }
    Escape.stack.delete(this.ID);
    this.ID = undefined;
    if (!Escape.stack.size) {
      Escape.IDs.reset();
      window.removeEventListener("keydown", Escape.onKeyDown);
    }
  }

  private static onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      let ID = Escape.IDs.last();
      while (Escape.stack.size) {
        if (!Escape.stack.has(ID)) {
          ID = `${parseInt(ID) - 1}`;
          continue;
        } else {
          const instance = this.stack.get(ID);
          if (instance && instance.ID) {
            instance.callback();
            instance.destroy();
            return;
          }
        }
      }
    }
  };
}
