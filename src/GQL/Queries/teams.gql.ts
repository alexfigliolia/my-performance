import { gql } from "graphql-request";
import { MyTeamFragment, TeamFragment } from "GQL/Fragments";

export const teams = gql`
  ${TeamFragment}
  query teams(
    $search: String
    $offset: Int
    $organizationId: Int!
    $omitCurrentUser: Boolean
  ) {
    teams(
      search: $search
      offset: $offset
      organizationId: $organizationId
      omitCurrentUser: $omitCurrentUser
    ) {
      ...TeamFragment
    }
  }
`;

export const createTeam = gql`
  ${MyTeamFragment}
  mutation createTeam($organizationId: Int!, $name: String!) {
    createTeam(organizationId: $organizationId, name: $name) {
      ...MyTeamFragment
    }
  }
`;

export const myTeams = gql`
  ${MyTeamFragment}
  query myTeams($organizationId: Int!) {
    myTeams(organizationId: $organizationId) {
      ...MyTeamFragment
    }
  }
`;
