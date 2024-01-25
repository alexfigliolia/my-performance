import { BaseModel } from "./BaseModel";
import type { IScreen } from "./types";

export class ScreenModel extends BaseModel<IScreen> {
  public static initialized = false;
  constructor() {
    super("Screen", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  public initialize() {
    if (ScreenModel.initialized) {
      return false;
    }
    window.addEventListener("resize", this.resize);
  }

  public destroy() {
    ScreenModel.initialized = false;
    window.removeEventListener("resize", this.resize);
  }

  private resize = () => {
    this.update(state => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    });
  };
}
