import type {
  CreateTeamMutation,
  CreateTeamMutationVariables,
  MyTeamsQuery,
  MyTeamsQueryVariables,
  TotalTeamsQuery,
  TotalTeamsQueryVariables,
} from "GQL";
import { createTeam, GQLServiceRequest, myTeams, totalTeams } from "GQL";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { ITeams } from "./types";

export class TeamsModel extends BaseModel<ITeams> {
  constructor() {
    super("Team", {
      myTeams: [],
      totalTeams: 0,
    });
  }

  public async countTeams(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      TotalTeamsQuery,
      TotalTeamsQueryVariables
    >({
      query: totalTeams,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      this.update(state => {
        state.totalTeams = response.data.totalTeams;
      });
    }
  }

  public async getMyTeams(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      MyTeamsQuery,
      MyTeamsQueryVariables
    >({
      query: myTeams,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      this.update(state => {
        state.myTeams = response.data.myTeams;
      });
    }
  }

  public async createTeam(name: string) {
    const response = await GQLServiceRequest<
      CreateTeamMutation,
      CreateTeamMutationVariables
    >({
      query: createTeam,
      variables: {
        name,
        organizationId: Organizations.getState().current,
      },
    });
    if (response.data) {
      this.update(state => {
        state.totalTeams = state.totalTeams + 1;
        state.myTeams = [...state.myTeams, response.data.createTeam];
      });
    }
  }
}
