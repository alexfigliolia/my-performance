import { GQLOperation } from "GQL";
import { UserRole } from "GQL/Types";
import { Modals } from "State/Modals";
import { Team } from "State/Team";
import { BaseModel } from "Tools/BaseModel";
import type { IAddUser } from "./types";

export class AddUserModel extends BaseModel<IAddUser> {
  constructor() {
    super("Add User", {
      name: "",
      role: "",
      email: "",
      loading: false,
    });
  }

  public enumerateRole() {
    switch (this.getState().role) {
      case "Engineer":
      default:
        return UserRole.Viewer;
      case "Manager":
        return UserRole.Manager;
      case "Administractor":
        return UserRole.Admin;
    }
  }

  public async createUser() {
    const success = await GQLOperation.wrapOperation(async () => {
      this.set("loading", true);
      const { name, email } = this.getState();
      await Team.addNewUser({
        name,
        email,
        role: this.enumerateRole(),
      });
      Modals.createUserToggle.close();
      this.reset();
    });
    if (!success) {
      this.set("loading", false);
    }
  }
}
