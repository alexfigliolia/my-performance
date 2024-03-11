import { gql } from "graphql-request";
import { StatsPerUser } from "GQL/Fragments";

export const overallStatsPerUser = gql`
  ${StatsPerUser}
  query overallStatsPerUser($teamId: Int!, $organizationId: Int!) {
    overallStatsPerUser(teamId: $teamId, organizationId: $organizationId) {
      ...StatsPerUser
    }
  }
`;
