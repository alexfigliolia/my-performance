import { gql } from "graphql-request";

export const listGithubUserRepositories = gql`
  query listGithubUserRepositories($sort: String, $page: String) {
    listGithubUserRepositories(sort: $sort, page: $page) {
      id
      name
      description
      html_url
      language
      source
    }
  }
`;

export const listGithubInstallationRepositories = gql`
  query listGithubInstallationRepositories(
    $page: String
    $installation_id: Int!
  ) {
    listGithubInstallationRepositories(
      page: $page
      installation_id: $installation_id
    ) {
      id
      name
      description
      html_url
      language
      source
    }
  }
`;

export const listAvailableRepositories = gql`
  query listAvailableRepositories(
    $page: String
    $installation_id: Int!
    $type: InstallationType!
    $organization_name: String!
  ) {
    listAvailableRepositories(
      page: $page
      type: $type
      installation_id: $installation_id
      organization_name: $organization_name
    ) {
      id
      name
      description
      html_url
      language
      source
    }
  }
`;
