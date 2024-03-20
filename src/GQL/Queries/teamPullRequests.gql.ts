import { gql } from "graphql-request";

export const teamPullRequests = gql`
  query teamPullRequests($page: Int, $teamId: Int!, $organizationId: Int!) {
    teamPullRequests(
      page: $page
      teamId: $teamId
      organizationId: $organizationId
    ) {
      id
      date
      author
      project
      description
    }
  }
`;
