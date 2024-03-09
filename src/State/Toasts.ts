import { createUseState } from "@figliolia/react-galena";
import { ToastModel } from "Models/Toasts";

export const Toasts = new ToastModel();

export const useToasts = createUseState(Toasts);
