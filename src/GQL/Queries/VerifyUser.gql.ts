import { gql } from "graphql-request";
import { UserAndAffiliationsFragment } from "./User.gql";

export const verifySessionMutation = gql`
  ${UserAndAffiliationsFragment}
  mutation VerifySession {
    verifySession {
      ...UserAndAffiliationsFragment
    }
  }
`;
