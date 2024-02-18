import type { Platform } from "GQL";
import { InstallationType, UserRole } from "GQL";
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
    const { user, organizations, current } = await Networking.initializeState();
    User.setUser(user);
    this.update(state => {
      state.current = current;
      state.organizations = organizations;
    });
  }

  public selectRole({ current, organizations }: IOrganizations) {
    return organizations?.[current]?.role ?? UserRole.Viewer;
  }

  public getRepositoryQueryParams(platform: Platform) {
    const { current, organizations } = this.getState();
    const org = organizations[current];
    if (!org) {
      return Networking.defaultRepositoryQueryParams;
    }
    const { id = -1, type = InstallationType.Individual } =
      org?.installations?.[platform] ?? {};
    return {
      type,
      installation_id: id,
      organization_name: org.name,
    };
  }
}
