import { connect } from "@figliolia/react-galena";
import { AuthModel } from "Models/AuthModel";

export const Authentication = new AuthModel();

export const connectAuth = connect(Authentication);
