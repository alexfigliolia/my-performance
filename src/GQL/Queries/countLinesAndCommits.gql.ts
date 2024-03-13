import { gql } from "graphql-request";

export const countLinesAndCommits = gql`
  query countLinesAndCommits($organizationId: Int!) {
    countLinesAndCommits(organizationId: $organizationId) {
      lines
      commits
    }
  }
`;
