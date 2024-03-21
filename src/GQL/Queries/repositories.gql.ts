import { gql } from "graphql-request";
import { RepositoryFragment } from "GQL/Fragments";

export const availableRepositories = gql`
  ${RepositoryFragment}
  query availableRepositories(
    $offset: Int
    $limit: Int
    $search: String
    $organizationId: Int!
    $sort: RepositorySortKeys
  ) {
    availableRepositories(
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

export const availableRepositoriesStream = gql`
  ${RepositoryFragment}
  subscription availableRepositoriesStream(
    $offset: Int
    $limit: Int
    $search: String
    $organizationId: Int!
    $sort: RepositorySortKeys
  ) {
    availableRepositoriesStream(
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

export const trackedRepositories = gql`
  query trackedRepositories($organizationId: Int!, $teamId: Int) {
    trackedRepositories(organizationId: $organizationId, teamId: $teamId) {
      id
      name
    }
  }
`;

export const trackRepository = gql`
  mutation trackRepository(
    $teamId: Int!
    $repositoryId: Int!
    $organizationId: Int!
  ) {
    trackRepository(
      teamId: $teamId
      repositoryId: $repositoryId
      organizationId: $organizationId
    ) {
      id
      name
    }
  }
`;
