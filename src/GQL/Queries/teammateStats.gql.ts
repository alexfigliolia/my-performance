import { gql } from "graphql-request";
import { TeammateStats } from "GQL/Fragments";

export const teammateStats = gql`
  ${TeammateStats}
  query teammateStats($organizationId: Int!, $userId: Int!) {
    teammateStats(organizationId: $organizationId, userId: $userId) {
      id
      name
      lines
      commits
      teams {
        ...TeammateStats
      }
    }
  }
`;
