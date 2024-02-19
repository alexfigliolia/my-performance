import { GQLRequest } from "GQL/Client";
import { trackedRepositories } from "GQL/Queries";

export class Networking {
  public static initializeProjects(organizationId: number) {
    return GQLRequest({
      query: trackedRepositories,
      variables: {
        organizationId,
      },
    });
  }
}
