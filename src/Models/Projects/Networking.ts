import type {
  TrackedRepositoriesQuery,
  TrackedRepositoriesQueryVariables,
  TrackRepositoryMutation,
  TrackRepositoryMutationVariables,
} from "GQL";
import { GQLServiceRequest, trackedRepositories, trackRepository } from "GQL";
import { BaseModel } from "Tools/BaseModel";
import type { IProjects } from "./types";

export class Networking extends BaseModel<IProjects> {
  protected trackedProjects(organizationId: number) {
    return GQLServiceRequest<
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
    return GQLServiceRequest<
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
