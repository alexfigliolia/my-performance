import type { Hook } from "Tools/Hooks";

export class TapDismiss implements Hook {
  dismiss: (e: MouseEvent) => void;
  constructor(dismiss: (e: MouseEvent) => void) {
    this.dismiss = dismiss;
  }

  public initialize() {
    document.addEventListener("click", this.dismiss);
  }

  public switch(toggle: boolean) {
    if (toggle) {
      this.initialize();
    } else {
      this.destroy();
    }
  }

  public destroy() {
    document.removeEventListener("click", this.dismiss);
  }
}
