import { gql } from "graphql-request";

export const trackedRepositories = gql`
  query trackedRepositories($organizationId: Int!) {
    trackedRepositories(organizationId: $organizationId) {
      id
      name
    }
  }
`;

export const trackRepository = gql`
  mutation trackRepository($id: Int!) {
    trackRepository(id: $id) {
      id
      name
    }
  }
`;
