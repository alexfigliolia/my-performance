import { gql } from "graphql-request";
import { UserAndAffiliationsFragment } from "./User.gql";

export const onboardMutation = gql`
  ${UserAndAffiliationsFragment}
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
      ...UserAndAffiliationsFragment
    }
  }
`;
