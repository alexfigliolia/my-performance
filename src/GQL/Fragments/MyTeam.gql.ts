import { gql } from "graphql-request";

export const TeamFragment = gql`
  fragment TeamFragment on Team {
    id
    name
    users {
      id
      name
    }
    projects {
      repository {
        id
        name
      }
    }
  }
`;

export const MyTeamFragment = gql`
  fragment MyTeamFragment on CurrentUsersTeam {
    id
    name
    role {
      role
    }
    users {
      id
      name
    }
    projects {
      repository {
        id
        name
      }
    }
  }
`;
