import { gql } from "graphql-request";

export const overallStatsPerUser = gql`
  query overallStatsPerUser($organizationId: Int!) {
    overallStatsPerUser(organizationId: $organizationId) {
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
