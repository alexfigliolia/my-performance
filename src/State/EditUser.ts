import { connect } from "@figliolia/react-galena";
import { EditUserModel } from "Models/EditUserModel";

export const EditUser = new EditUserModel();

export const connectEditUser = connect(EditUser);
