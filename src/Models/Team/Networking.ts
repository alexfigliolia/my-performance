import type {
  OverallStatsPerUserQuery,
  OverallStatsPerUserQueryVariables,
  StandoutsQuery,
  StandoutsQueryVariables,
} from "GQL";
import { GQLServiceRequest, overallStatsPerUser, standouts } from "GQL";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { ITeam } from "./types";

export class Networking extends BaseModel<ITeam> {
  public async teamStats(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      OverallStatsPerUserQuery,
      OverallStatsPerUserQueryVariables
    >({
      query: overallStatsPerUser,
      variables: {
        organizationId,
        teamId: this.getState().id,
      },
    });
    if (response.data) {
      const { name, users, totalLines, totalCommits } =
        response.data.overallStatsPerUser;
      this.update(state => {
        state.name = name;
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
        teamId: this.getState().id,
      },
    });
    if (response.data) {
      this.update(state => {
        state.standouts = response.data.standouts;
      });
    }
  }
}
