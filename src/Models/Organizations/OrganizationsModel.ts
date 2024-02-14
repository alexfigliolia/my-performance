import { type BaseOrganizationAndUserRole, UserRole } from "GQL";
import { BaseModel } from "Tools/BaseModel";
import type { IOrganizations } from "./types";

export class OrganizationsModel extends BaseModel<IOrganizations> {
  constructor() {
    super("Organizations", {
      current: -1,
      organizations: {},
    });
  }

  public initialize(
    orgs: BaseOrganizationAndUserRole[],
    current = orgs[0]?.id ?? -1,
  ) {
    const organizations: Record<string, BaseOrganizationAndUserRole> = {};
    for (const org of orgs) {
      organizations[org.id] = org;
    }
    this.update(state => {
      state.current = current;
      state.organizations = organizations;
    });
  }

  public selectRole({ current, organizations }: IOrganizations) {
    return organizations?.[current]?.role ?? UserRole.Viewer;
  }
}
