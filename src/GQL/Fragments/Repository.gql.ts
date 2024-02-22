import { gql } from "graphql-request";

export const RepositoryFragment = gql`
  fragment RepositoryFragment on AvailableRepository {
    id
    name
    description
    html_url
    language
    platform
    api_url
    platform_id
  }
`;
