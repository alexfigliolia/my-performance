import { gql } from "graphql-request";

export const standouts = gql`
  query standouts($organizationId: Int!) {
    standouts(organizationId: $organizationId) {
      id
      name
      lines
      increase
    }
  }
`;
