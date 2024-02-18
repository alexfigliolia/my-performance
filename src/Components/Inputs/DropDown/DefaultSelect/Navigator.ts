export class Navigator {
  list?: HTMLDivElement;
  focused: number | null = null;

  public register(node: HTMLDivElement) {
    this.list = node;
  }

  public get actions() {
    return {
      ArrowUp: this.arrowAction(list => {
        if (this.focused === null) {
          this.focused = 1;
        }
        if (this.focused === 0) {
          this.focused = list.length;
        }
        list[--this.focused].focus();
      }),
      ArrowDown: this.arrowAction(list => {
        if (this.focused === null || this.focused === list.length - 1) {
          this.focused = -1;
        }
        list[++this.focused].focus();
      }),
    };
  }

  private arrowAction<
    F extends (buttons: NodeListOf<HTMLButtonElement>) => void,
  >(func: F) {
    return () => {
      if (!this.list) {
        return;
      }
      func(this.list.querySelectorAll("button"));
    };
  }
}
