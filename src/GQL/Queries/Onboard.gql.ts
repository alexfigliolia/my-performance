import { gql } from "graphql-request";

export const onboardMutation = gql`
  mutation onBoard(
    $username: String!
    $email: String!
    $password: String!
    $organizationName: String!
    $platform: Platform!
  ) {
    onboard(
      username: $username
      email: $email
      password: $password
      platform: $platform
      organizationName: $organizationName
    ) {
      id
    }
  }
`;
