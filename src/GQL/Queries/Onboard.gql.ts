import { gql } from "graphql-request";

export const onboardMutation = gql`
  mutation onBoard(
    $username: String!
    $email: String!
    $password: String!
    $organizationName: String!
  ) {
    onboard(
      username: $username
      email: $email
      password: $password
      organizationName: $organizationName
    ) {
      id
    }
  }
`;
