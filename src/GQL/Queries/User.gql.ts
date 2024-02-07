import { gql } from "graphql-request";

export const UserAndAffiliationsFragment = gql`
  fragment UserAndAffiliationsFragment on UserAndAffiliations {
    user {
      id
      name
      email
      verified
    }
    organizations {
      id
      name
      platform
      role
    }
  }
`;
