import { gql } from "graphql-request";

export const trackedRepositories = gql`
  query trackedRepositories($organizationId: Int!) {
    trackedRepositories(organizationId: $organizationId) {
      id
      name
      description
      html_url
      language
      platform
      api_url
      platform
      platform_id
      tracked
    }
  }
`;

export const trackRepository = gql`
  mutation trackRepository($id: Int!) {
    trackRepository(id: $id) {
      id
      name
      description
      html_url
      language
      platform
      api_url
      platform
      platform_id
    }
  }
`;
