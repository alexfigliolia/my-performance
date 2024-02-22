import { GQLRequest } from "GQL/Client";
import { trackedRepositories } from "GQL/Queries";
import type {
  TrackedRepositoriesQuery,
  TrackedRepositoriesQueryVariables,
} from "GQL/Types";
import { BaseModel } from "Tools/BaseModel";
import type { IProjects, IRepository } from "./types";

export class ProjectsModel extends BaseModel<IProjects> {
  constructor() {
    super("Project", {
      name: "My Perf",
      lines: 10_000_000,
      commits: 1_000_000,
      projectOrder: [],
      trackedProjects: {},
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
      const order: number[] = [];
      const projects: Record<number, IRepository> = {};
      response.data.trackedRepositories.forEach(project => {
        const { platform_id } = project;
        order.push(platform_id);
        projects[platform_id] = project;
      });

      this.update(state => {
        state.projectOrder = order;
        state.trackedProjects = projects;
      });
    } catch (error) {
      // TODO - toast the error
    }
  }
}
