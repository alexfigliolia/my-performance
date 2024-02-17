import type {
  UserAndAffiliationsQuery,
  UserAndAffiliationsQueryVariables,
} from "GQL";
import { GQLRequest, userAndAffiliations } from "GQL";
import { UserTransforms } from "Models/User";
import type { IOrganization } from "./types";

export class Networking {
  public static async fetch() {
    const affiliations = await this.GQL();
    const { organizations, ...rest } = affiliations.data.userAndAffiliations;
    const orgs: Record<string, IOrganization> = {};
    for (const org of organizations) {
      const { installations, roles, ...rest } = org;
      orgs[rest.id] = {
        ...rest,
        role: roles[0].role || "viewer",
        installations: installations.map(v => v.platform),
      };
    }
    return {
      organizations: orgs,
      current: organizations[0].id || -1,
      user: UserTransforms.transformAffiliation(rest),
    };
  }

  private static GQL() {
    return GQLRequest<
      UserAndAffiliationsQuery,
      UserAndAffiliationsQueryVariables
    >({
      query: userAndAffiliations,
      variables: {},
    });
  }
}
