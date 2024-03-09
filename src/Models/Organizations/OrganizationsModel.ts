import { UserRole } from "GQL";
import { User } from "State/User";
import type { LoadTask } from "Tools/LoaderRegistry";
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

  public registerIfUninitialized(loader: LoadTask<UserScope>) {
    if (this.getState().current === -1) {
      return this.Registry.register(loader);
    }
    return loader({
      ...this.getState(),
      user: User.getState(),
    });
  }

  public selectRole({ current, organizations }: IOrganizations) {
    return organizations?.[current]?.role ?? UserRole.Viewer;
  }
}
