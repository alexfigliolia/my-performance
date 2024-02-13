import { gql } from "graphql-request";

export const onboardWithGithub = gql`
  mutation onboardWithGithub($name: String!, $code: String!) {
    onboardWithGithub(name: $name, code: $code) {
      id
    }
  }
`;
