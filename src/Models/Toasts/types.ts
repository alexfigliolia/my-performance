export interface IToast {
  type: "info" | "error" | "warning" | "success";
  message: string;
}

export interface IToasts {
  toasts: IToast[];
}
