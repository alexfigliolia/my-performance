import type {
  TrackedRepositoriesQuery,
  TrackedRepositoriesQueryVariables,
  TrackRepositoryMutation,
  TrackRepositoryMutationVariables,
} from "GQL";
import { GQLRequest, trackedRepositories, trackRepository } from "GQL";
import { BaseModel } from "Tools/BaseModel";
import type { IProjects } from "./types";

export class Networking extends BaseModel<IProjects> {
  protected trackedProjects(organizationId: number) {
    return GQLRequest<
      TrackedRepositoriesQuery,
      TrackedRepositoriesQueryVariables
    >({
      query: trackedRepositories,
      variables: {
        organizationId,
      },
    });
  }

  protected trackProject(id: number) {
    return GQLRequest<
      TrackRepositoryMutation,
      TrackRepositoryMutationVariables
    >({
      query: trackRepository,
      variables: {
        id,
      },
    });
  }
}
