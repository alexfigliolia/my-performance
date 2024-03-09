import type { ReactNode } from "react";
import type { QuickStack } from "Generics/QuickStack";

export type ToastType = "info" | "error" | "warning" | "success";

export interface ToastDispatch {
  type: ToastType;
  title?: string;
  message: string;
  icon?: ReactNode;
}

export interface IToast extends ToastDispatch {
  id: string;
}

export interface IToasts {
  toasts: QuickStack<string, IToast>;
}
