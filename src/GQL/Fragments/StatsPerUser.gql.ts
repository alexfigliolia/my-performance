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

export const TeammateProfileStats = gql`
  fragment TeammateProfileStats on TeammateCollaborator {
    id
    name
    lines
    commits
    pullRequests
    linesPerMonth
    totalLines
  }
`;

export const TeammateProfileFragment = gql`
  fragment TeammateProfileFragment on TeammateProfile {
    id
    name
    lines
    commits
    linesPerMonth
    pullRequests {
      id
      date
      author
      project
      description
    }
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
