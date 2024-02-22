import { gql } from "graphql-request";

export const listAvailableRepositories = gql`
  query listAvailableRepositories(
    $offset: Int
    $limit: Int
    $sort: String
    $search: String
    $organizationId: Int!
  ) {
    listAvailableRepositories(
      offset: $offset
      limit: $limit
      sort: $sort
      search: $search
      organizationId: $organizationId
    ) {
      id
      name
      description
      html_url
      language
      platform
      api_url
      tracked
    }
  }
`;
