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
    }
  }
`;
