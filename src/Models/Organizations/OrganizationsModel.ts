import { UserRole } from "GQL";
import { User } from "State/User";
import { BaseModel } from "Tools/BaseModel";
import { Networking } from "./Networking";
import type { IOrganizations } from "./types";

export class OrganizationsModel extends BaseModel<IOrganizations> {
  constructor() {
    super("Organizations", {
      current: -1,
      organizations: {},
    });
  }

  public async initialize() {
    const { user, organizations, current } = await Networking.fetch();
    User.setUser(user);
    this.update(state => {
      state.current = current;
      state.organizations = organizations;
    });
  }

  public selectRole({ current, organizations }: IOrganizations) {
    return organizations?.[current]?.role ?? UserRole.Viewer;
  }
}
