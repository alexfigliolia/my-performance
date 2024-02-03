import type { Hook } from "./types";

export class Hooks implements Hook {
  hooks: Hook[];
  constructor(...hooks: Hook[]) {
    this.hooks = hooks;
  }

  public register(hook: Hook) {
    this.hooks.push(hook);
  }

  public initialize() {
    for (const hook of this.hooks) {
      hook.initialize();
    }
  }

  public switch(toggle: boolean) {
    for (const hook of this.hooks) {
      hook.switch(toggle);
    }
  }

  public destroy() {
    for (const hook of this.hooks) {
      hook.destroy();
    }
  }
}
