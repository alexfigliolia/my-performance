import { gql } from "graphql-request";

export const overallStatsPerUser = gql`
  query overallStatsPerUser($teamId: Int!, $organizationId: Int!) {
    overallStatsPerUser(teamId: $teamId, organizationId: $organizationId) {
      name
      totalLines
      totalCommits
      users {
        id
        name
        lines
        commits
        linesPerMonth
      }
    }
  }
`;
