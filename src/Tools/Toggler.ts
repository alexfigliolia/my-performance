import type { IModals, ModalsModel } from "Models/Modals";
import { ModalStack } from "./ModalStack";

export class Toggler<K extends keyof Omit<IModals, "active">> {
  open: () => void;
  close: () => void;
  private Modals: ModalsModel;
  constructor(key: K, Modals: ModalsModel) {
    this.Modals = Modals;
    const [open, close] = this.create(key);
    this.open = open;
    this.close = close;
  }

  private create(key: K) {
    const closer = () => {
      ModalStack.delete(closer);
      this.Modals.update(state => {
        state[key] = false;
        state.active = !!ModalStack.length;
      });
    };
    const opener = () => {
      if (this.Modals.getState()[key]) {
        return;
      }
      ModalStack.push(closer);
      this.Modals.update(state => {
        state[key] = true;
        state.active = true;
      });
    };
    return [opener, closer];
  }
}
