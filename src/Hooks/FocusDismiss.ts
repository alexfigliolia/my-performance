import type { Hook } from "Tools/Hooks";

export class FocusDismiss implements Hook {
  dismiss: (e: FocusEvent) => void;
  constructor(dismiss: (e: FocusEvent) => void) {
    this.dismiss = dismiss;
  }

  public initialize() {
    document.addEventListener("focusin", this.dismiss);
  }

  public switch(toggle: boolean) {
    if (toggle) {
      this.initialize();
    } else {
      this.destroy();
    }
  }

  public destroy() {
    document.removeEventListener("focusin", this.dismiss);
  }
}
