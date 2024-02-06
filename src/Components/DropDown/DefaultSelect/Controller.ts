import { FocusDismiss } from "Tools/FocusDismiss";
import type { Hook } from "Tools/Hooks";
import { Hooks } from "Tools/Hooks";
import { KeyboardActions } from "Tools/KeyboardActions";
import { TapDismiss } from "Tools/TapDismiss";
import { Navigator } from "./Navigator";

export class Controller extends Navigator implements Hook {
  hooks: Hooks;
  closer: () => void;
  container?: HTMLDivElement;
  closeOnBlur = (e: FocusEvent | MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target && !this.container?.contains(target)) {
      this.closer();
    }
  };
  constructor(closer: () => void) {
    super();
    this.closer = closer;
    this.hooks = new Hooks(
      new TapDismiss(this.closeOnBlur),
      new KeyboardActions(this.actions),
      new FocusDismiss(this.closeOnBlur),
    );
  }

  public node(type: "list" | "container") {
    return (node: HTMLDivElement) => {
      if (type === "list") {
        return super.register(node);
      }
      this.container = node;
    };
  }

  public initialize() {
    this.hooks.initialize();
  }

  public switch(toggle: boolean) {
    this.hooks.switch(toggle);
  }

  public destroy() {
    this.focused = null;
    this.hooks.destroy();
  }
}
