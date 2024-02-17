import { BaseModel } from "Tools/BaseModel";
import type { IToast, IToasts } from "./types";

export class ToastModel extends BaseModel<IToasts> {
  constructor() {
    super("Toaster", {
      toasts: [],
    });
  }

  public dispatch(toast: IToast) {
    this.update(state => {
      state.toasts = [...state.toasts, toast];
    });
  }

  public removeAtIndex(index: number) {
    this.update(state => {
      state.toasts = state.toasts.filter((_, i) => i !== index);
    });
  }
}
