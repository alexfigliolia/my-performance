import { gql } from "graphql-request";

export const TeammateStats = gql`
  fragment TeammateStats on OverallStatsPerUser {
    id
    name
    lines
    commits
    pullRequests
    linesPerMonth
  }
`;

export const StatsPerUser = gql`
  ${TeammateStats}
  fragment StatsPerUser on TeamStats {
    id
    name
    lineTrend
    totalLines
    commitTrend
    totalCommits
    users {
      ...TeammateStats
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
