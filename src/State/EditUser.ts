import { connect } from "@figliolia/react-galena";
import { EditUserModel } from "Models/EditUser";

export const EditUser = new EditUserModel();

export const connectEditUser = connect(EditUser);
