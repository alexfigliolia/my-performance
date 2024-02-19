import { gql } from "graphql-request";

export const listGithubUserRepositories = gql`
  query listGithubUserRepositories($sort: String, $page: String) {
    listGithubUserRepositories(sort: $sort, page: $page) {
      name
      description
      html_url
      language
      platform
      api_url
      platform_id
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
      name
      description
      html_url
      language
      platform
      api_url
      platform_id
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
      name
      description
      html_url
      language
      platform
      api_url
      platform_id
    }
  }
`;
