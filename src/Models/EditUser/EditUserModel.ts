import { BaseModel } from "Tools/BaseModel";
import type { IEditUser } from "./types";

export class EditUserModel extends BaseModel<IEditUser> {
  constructor() {
    super("Edit User", {
      name: "",
      email: "",
      position: "",
    });
  }

  public set<K extends keyof IEditUser>(key: K, value: IEditUser[K]) {
    this.update(state => {
      state[key] = value;
    });
  }
}
