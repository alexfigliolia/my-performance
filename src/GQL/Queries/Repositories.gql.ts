import { gql } from "graphql-request";

export const listAvailableRepositories = gql`
  query listAvailableRepositories($userId: Int!, $sort: String, $page: String) {
    listAvailableRepositories(userId: $userId, sort: $sort, page: $page) {
      id
      name
      description
      html_url
      language
      source
    }
  }
`;
