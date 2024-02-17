import { gql } from "graphql-request";

export const createGithubAccount = gql`
  mutation createGithubAccount(
    $code: String!
    $installation_id: Int!
    $name: String!
  ) {
    createGithubAccount(
      code: $code
      installation_id: $installation_id
      name: $name
    )
  }
`;
