import { GQLServiceRequest } from "GQL/Client";
import { overallStatsPerUser } from "GQL/Queries";
import type {
  OverallStatsPerUserQuery,
  OverallStatsPerUserQueryVariables,
} from "GQL/Types";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { ITeam } from "./types";

export class Networking extends BaseModel<ITeam> {
  public async highestContributors() {
    const response = await GQLServiceRequest<
      OverallStatsPerUserQuery,
      OverallStatsPerUserQueryVariables
    >({
      query: overallStatsPerUser,
      variables: {
        organizationId: Organizations.getState().current,
      },
    });
    if (response.data) {
      this.update(state => {
        state.overallStats = response.data.overallStatsPerUser;
      });
    }
  }
}
