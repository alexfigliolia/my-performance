import type { Platform } from "GQL";
import { InstallationType, UserRole } from "GQL";
import { User } from "State/User";
import { LoaderRegistry } from "Tools/LoaderRegistry";
import { Networking } from "./Networking";
import type { IOrganizations, UserScope } from "./types";

export class OrganizationsModel extends Networking {
  Registry = new LoaderRegistry<UserScope>();
  constructor() {
    super("Organizations", {
      current: -1,
      organizations: {},
    });
  }

  public initialize() {
    return this.Registry.load(async () => {
      const scope = await this.initializeFromNetwork();
      const { user, current, organizations } = scope;
      User.setUser(user);
      this.update(state => {
        state.current = current;
        state.organizations = organizations;
      });
      return scope;
    });
  }

  public selectRole({ current, organizations }: IOrganizations) {
    return organizations?.[current]?.role ?? UserRole.Viewer;
  }

  public getRepositoryQueryParams(platform: Platform) {
    const { current, organizations } = this.getState();
    const org = organizations[current];
    if (!org) {
      return this.defaultRepositoryQueryParams;
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
