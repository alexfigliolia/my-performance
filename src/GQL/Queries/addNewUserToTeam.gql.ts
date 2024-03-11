import { gql } from "graphql-request";
import { StatsPerUser } from "GQL/Fragments";

export const addNewUserToTeam = gql`
  ${StatsPerUser}
  mutation addNewUserToTeam(
    $name: String!
    $email: String!
    $role: UserRole!
    $teamId: Int!
    $organizationId: Int!
  ) {
    addNewUserToTeam(
      name: $name
      email: $email
      role: $role
      teamId: $teamId
      organizationId: $organizationId
    ) {
      ...StatsPerUser
    }
  }
`;
