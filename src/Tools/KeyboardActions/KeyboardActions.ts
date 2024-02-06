import type { Hook } from "Tools/Hooks";
import type { KeyMap } from "./types";

export class KeyboardActions implements Hook {
  keyMap: KeyMap;
  constructor(keyMap: KeyMap) {
    this.keyMap = keyMap;
  }

  public initialize() {
    window.addEventListener("keydown", this.invokeKeyMap);
  }

  public switch(toggle: boolean) {
    if (toggle) {
      return this.initialize();
    }
    this.destroy();
  }

  public destroy() {
    window.removeEventListener("keydown", this.invokeKeyMap);
  }

  private invokeKeyMap = (e: KeyboardEvent) => {
    const { key, keyCode, which } = e;
    if (key in this.keyMap) {
      return this.keyMap[key]();
    }
    if (keyCode in this.keyMap) {
      return this.keyMap[key]();
    }
    if (which in this.keyMap) {
      return this.keyMap[key]();
    }
  };
}
