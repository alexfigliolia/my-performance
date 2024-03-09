import { connect, createUseState } from "@figliolia/react-galena";
import { ModalsModel } from "Models/Modals";

export const Modals = new ModalsModel();

export const connectModals = connect(Modals);
export const useModals = createUseState(Modals);
