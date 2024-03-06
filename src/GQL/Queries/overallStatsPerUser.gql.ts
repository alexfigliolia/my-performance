import { gql } from "graphql-request";

export const overallStatsPerUser = gql`
  query overallStatsPerUser($organizationId: Int!) {
    overallStatsPerUser(organizationId: $organizationId) {
      id
      name
      lines
      commits
    }
  }
`;
