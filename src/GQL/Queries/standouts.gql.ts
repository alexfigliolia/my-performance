import { gql } from "graphql-request";

export const standouts = gql`
  query standouts($teamId: Int!, $organizationId: Int!) {
    standouts(teamId: $teamId, organizationId: $organizationId) {
      id
      name
      lines
      increase
    }
  }
`;
