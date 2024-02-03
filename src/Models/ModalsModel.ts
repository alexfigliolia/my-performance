import CSSVars from "Styles/exports.module.scss";
import { Stack } from "Tools/Stack";
import { TaskQueue } from "Tools/TaskQueue";
import { BaseModel } from "./BaseModel";
import type { IModals } from "./types";

export class ModalsModel extends BaseModel<IModals> {
  private readonly stack = new Stack<() => void>();
  public static transitionDuration = parseInt(
    CSSVars.modalTransitionDuration.slice(0, -2),
  );
  constructor() {
    super("Modals", {
      active: false,
      editUser: false,
      userCreation: false,
    });
  }

  public invokeNext() {
    const FN = this.stack.peek();
    if (FN) {
      return new Promise<void>(resolve => {
        FN();
        TaskQueue.deferTask(resolve, ModalsModel.transitionDuration);
      });
    }
  }

  public toggleUserCreation = this.activate("userCreation");

  public toggleEditUser = this.activate("editUser");

  private activate<K extends keyof Omit<IModals, "active">>(key: K) {
    const toggler = () => {
      this.update(state => {
        if (!state[key]) {
          this.stack.push(toggler);
        } else {
          this.stack.pop();
        }
        state.active = !state[key];
        state[key] = !state[key];
      });
    };
    return toggler;
  }
}
