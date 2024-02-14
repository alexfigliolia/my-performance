import type { IModals } from "Models/Modals";
import { Modals } from "State/Modals";
import { ModalStack } from "./ModalStack";

export class Toggler<K extends keyof Omit<IModals, "active">> {
  open: () => void;
  close: () => void;
  constructor(key: K) {
    const [open, close] = this.create(key);
    this.open = open;
    this.close = close;
  }

  private create(key: K) {
    const closer = () => {
      ModalStack.delete(closer);
      Modals.update(state => {
        state[key] = false;
        state.active = !!ModalStack.length;
      });
    };
    const opener = () => {
      if (Modals.getState()[key]) {
        return;
      }
      ModalStack.push(closer);
      Modals.update(state => {
        state[key] = true;
        state.active = true;
      });
    };
    return [opener, closer];
  }
}
