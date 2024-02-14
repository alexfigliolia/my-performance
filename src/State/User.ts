import { connect } from "@figliolia/react-galena";
import { UserModel } from "Models/User";

export const User = new UserModel();

export const connectUser = connect(User);
