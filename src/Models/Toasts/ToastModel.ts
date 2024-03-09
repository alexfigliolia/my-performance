import { AutoIncrementingID } from "@figliolia/event-emitter";
import { QuickStack } from "Generics/QuickStack";
import { BaseModel } from "Tools/BaseModel";
import type { IToasts, ToastDispatch } from "./types";

export class ToastModel extends BaseModel<IToasts> {
  private static IDs = new AutoIncrementingID();
  constructor() {
    super("Toaster", {
      toasts: new QuickStack(),
    });
  }

  public dispatch(toast: ToastDispatch) {
    this.update(state => {
      const id = ToastModel.IDs.get();
      state.toasts.set(id, { id, ...toast });
      state.toasts = new QuickStack(state.toasts);
    });
  }

  public delete(id: string) {
    this.update(state => {
      state.toasts.delete(id);
      state.toasts = new QuickStack(state.toasts);
    });
  }
}
