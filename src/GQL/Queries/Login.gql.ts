import { gql } from "graphql-request";

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;
