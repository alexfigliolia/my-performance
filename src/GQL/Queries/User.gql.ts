import { gql } from "graphql-request";

export const UserAndAffiliationsFragment = gql`
  fragment UserAndAffiliationsFragment on UserAndAffiliations {
    user {
      id
      name
      github {
        id
        token
      }
    }
    organizations {
      id
      name
      role
    }
  }
`;
