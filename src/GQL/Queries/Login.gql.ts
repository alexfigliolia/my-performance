import { gql } from "graphql-request";
import { UserAndAffiliationsFragment } from "./User.gql";

export const loginMutation = gql`
  ${UserAndAffiliationsFragment}
  mutation Login($email: String!, $password: !String) {
    login(email: $email, password: $password) {
      ...UserAndAffiliationsFragment
    }
  }
`;
