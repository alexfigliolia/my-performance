import { connect } from "@figliolia/react-galena";
import { ModalsModel } from "Models/ModalsModel";

export const Modals = new ModalsModel();

export const connectModals = connect(Modals);
