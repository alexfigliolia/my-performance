import type {
  CreateTeamMutation,
  CreateTeamMutationVariables,
  MyTeamsQuery,
  MyTeamsQueryVariables,
  OverallStatsPerUserQuery,
  OverallStatsPerUserQueryVariables,
  StandoutsQuery,
  StandoutsQueryVariables,
  TeamsQuery,
  TeamsQueryVariables,
} from "GQL";
import {
  createTeam,
  GQLServiceRequest,
  myTeams,
  overallStatsPerUser,
  standouts,
  teams,
} from "GQL";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { ITeam } from "./types";

export class Networking extends BaseModel<ITeam> {
  public async getTeams(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<TeamsQuery, TeamsQueryVariables>({
      query: teams,
      variables: {
        organizationId,
        omitCurrentUser: true,
      },
    });
    if (response.data) {
      this.update(state => {
        state.teams = response.data.teams;
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
        state.myTeams = [...state.myTeams, response.data.createTeam];
      });
    }
  }

  public async highestContributors(
    organizationId = Organizations.getState().current,
  ) {
    const response = await GQLServiceRequest<
      OverallStatsPerUserQuery,
      OverallStatsPerUserQueryVariables
    >({
      query: overallStatsPerUser,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      const { users, totalLines, totalCommits } =
        response.data.overallStatsPerUser;
      this.update(state => {
        state.team = users;
        state.totalLines = totalLines;
        state.totalCommits = totalCommits;
      });
    }
  }

  public async getStandouts(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      StandoutsQuery,
      StandoutsQueryVariables
    >({
      query: standouts,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      this.update(state => {
        state.standouts = response.data.standouts;
      });
    }
  }
}
