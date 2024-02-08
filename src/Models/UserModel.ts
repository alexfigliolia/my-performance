import type { User } from "GQL";
import { BaseModel } from "./BaseModel";
import type { IUser } from "./types";

export class UserModel extends BaseModel<IUser> {
  constructor() {
    super("User", {
      id: -1,
      name: "",
      email: "",
      verified: false,
    });
  }

  public setUser({ id, name, email, verified }: User) {
    this.update(state => {
      state.id = id;
      state.name = name;
      state.email = email;
      state.verified = verified;
    });
  }
}
