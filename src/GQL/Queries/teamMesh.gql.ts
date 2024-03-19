import { gql } from "graphql-request";

export const teamMesh = gql`
  query teamMesh($teamId: Int!, $organizationId: Int!) {
    teamMesh(teamId: $teamId, organizationId: $organizationId) {
      key
      mesh
    }
  }
`;
