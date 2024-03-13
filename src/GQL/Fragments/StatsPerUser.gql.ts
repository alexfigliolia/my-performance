import { gql } from "graphql-request";

export const StatsPerUser = gql`
  fragment StatsPerUser on TeamStats {
    id
    name
    lineTrend
    totalLines
    commitTrend
    totalCommits
    users {
      id
      name
      lines
      commits
      linesPerMonth
    }
    projects {
      trend
      trackedProjects {
        id
        name
      }
    }
  }
`;
