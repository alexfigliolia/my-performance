import type { User } from "GQL";
import { BaseModel } from "Tools/BaseModel";
import type { IUser } from "./types";

export class UserModel extends BaseModel<IUser> {
  constructor() {
    super("User", {
      id: -1,
      name: "",
    });
  }

  public setUser({ id, name }: User) {
    this.update(state => {
      state.id = id;
      state.name = name;
    });
  }
}
