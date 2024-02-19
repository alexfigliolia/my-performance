import { GQLRequest } from "GQL/Client";
import { trackedRepositories } from "GQL/Queries";
import type {
  TrackedRepositoriesQuery,
  TrackedRepositoriesQueryVariables,
} from "GQL/Types";
import { BaseModel } from "Tools/BaseModel";
import type { IProjects } from "./types";

export class ProjectsModel extends BaseModel<IProjects> {
  constructor() {
    super("Project", {
      name: "My Perf",
      lines: 10_000_000,
      commits: 1_000_000,
      trackedProjects: [],
    });
  }

  public async initializeProjects(organizationId: number) {
    try {
      const response = await GQLRequest<
        TrackedRepositoriesQuery,
        TrackedRepositoriesQueryVariables
      >({
        query: trackedRepositories,
        variables: {
          organizationId,
        },
      });
      this.update(state => {
        state.trackedProjects = response.data.trackedRepositories;
      });
    } catch (error) {
      // TODO - toast the error
    }
  }
}
