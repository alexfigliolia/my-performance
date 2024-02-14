import { gql } from "graphql-request";

export const loginWithGithub = gql`
  mutation loginWithGithub($code: String!) {
    loginWithGithub(code: $code) {
      id
    }
  }
`;
