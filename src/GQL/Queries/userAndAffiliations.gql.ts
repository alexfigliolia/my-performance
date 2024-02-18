import { gql } from "graphql-request";

export const userAndAffiliations = gql`
  query userAndAffiliations {
    userAndAffiliations {
      id
      name
      organizations {
        name
        id
        roles {
          role
        }
        installations {
          id
          type
          platform
        }
      }
      github {
        token
      }
    }
  }
`;
