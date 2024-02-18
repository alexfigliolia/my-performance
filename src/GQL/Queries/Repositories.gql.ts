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
