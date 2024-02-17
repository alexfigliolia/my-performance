import { gql } from "graphql-request";

export const verifySessionMutation = gql`
  mutation VerifySession {
    verifySession
  }
`;
