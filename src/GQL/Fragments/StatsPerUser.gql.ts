import { gql } from "graphql-request";

export const StatsPerUser = gql`
  fragment StatsPerUser on TeamStats {
    id
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
`;
