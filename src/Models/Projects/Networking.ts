import type {
  TotalRepositoriesQuery,
  TotalRepositoriesQueryVariables,
  TrackedRepositoriesQuery,
  TrackedRepositoriesQueryVariables,
  TrackRepositoryMutation,
  TrackRepositoryMutationVariables,
} from "GQL";
import {
  GQLServiceRequest,
  totalRepositories,
  trackedRepositories,
  trackRepository,
} from "GQL";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { IProjects } from "./types";

export class Networking extends BaseModel<IProjects> {
  public async totalProjects(
    organizationId = Organizations.getState().current,
  ) {
    const response = await GQLServiceRequest<
      TotalRepositoriesQuery,
      TotalRepositoriesQueryVariables
    >({
      query: totalRepositories,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      this.update(state => {
        state.totalProjects = response.data.totalRepositories;
      });
    }
  }

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
