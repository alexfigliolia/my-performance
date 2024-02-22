import { gql } from "graphql-request";
import { RepositoryFragment } from "GQL/Fragments";

export const listAvailableRepositories = gql`
  ${RepositoryFragment}
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
      ...RepositoryFragment
    }
  }
`;
