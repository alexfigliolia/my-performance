import type {
  UserAndAffiliationsQuery,
  UserAndAffiliationsQueryVariables,
} from "GQL";
import { GQLServiceRequest, InstallationType, userAndAffiliations } from "GQL";
import { UserTransforms } from "Models/User";
import { BaseModel } from "Tools/BaseModel";
import type {
  InstallationTable,
  IOrganizations,
  OrganizationTable,
} from "./types";

export class Networking extends BaseModel<IOrganizations> {
  public async initializeFromNetwork() {
    const affiliations = await this.GQL();
    const { organizations, ...rest } = affiliations.data.userAndAffiliations;
    const orgs: OrganizationTable = {};
    for (const org of organizations) {
      const { installations, roles, ...rest } = org;
      const installs = {
        bitbucket: {},
        github: {},
      } as unknown as InstallationTable;
      for (const install of installations) {
        installs[install.platform] = install;
      }
      orgs[rest.id] = {
        ...rest,
        role: roles[0].role || "viewer",
        installations: installs,
      };
    }
    return {
      organizations: orgs,
      current: organizations[0].id || -1,
      user: UserTransforms.transformAffiliation(rest),
    };
  }

  private GQL() {
    return GQLServiceRequest<
      UserAndAffiliationsQuery,
      UserAndAffiliationsQueryVariables
    >({
      query: userAndAffiliations,
      variables: {},
    });
  }
  public get defaultRepositoryQueryParams() {
    return {
      installation_id: -1,
      organization_name: "",
      type: InstallationType.Individual,
    };
  }
}
