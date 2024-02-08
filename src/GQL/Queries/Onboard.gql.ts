import { gql } from "graphql-request";

export const onboardMutation = gql`
  mutation onBoard(
    $name: String!
    $email: String!
    $password: String!
    $organizationName: String!
  ) {
    onboard(
      name: $name
      email: $email
      password: $password
      organizationName: $organizationName
    ) {
      id
    }
  }
`;
