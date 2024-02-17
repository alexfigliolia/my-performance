import { BaseModel } from "Tools/BaseModel";
import type { IUser } from "./types";

export class UserModel extends BaseModel<IUser> {
  constructor() {
    super("User", {
      id: -1,
      name: "",
      githubToken: "",
    });
  }

  public setUser({ id, name, githubToken }: IUser) {
    this.update(state => {
      state.id = id;
      state.name = name;
      state.githubToken = githubToken;
    });
  }
}
