import React from "react";
import { Error, Info, Success, Warning } from "Icons";
import type { ToastType } from "Models/Toasts";

export class Controller {
  public static getIcon(type: ToastType) {
    switch (type) {
      case "error":
        return <Error />;
      case "info":
        return <Info />;
      case "success":
        return <Success />;
      case "warning":
        return <Warning />;
    }
  }
}
