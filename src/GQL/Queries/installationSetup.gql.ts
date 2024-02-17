import { gql } from "graphql-request";

export const installationSetupSubscription = gql`
  subscription installationSetupSubscription(
    $installation_id: Int!
    $platform: Platform!
  ) {
    installationSetup(installation_id: $installation_id, platform: $platform) {
      id
    }
  }
`;

export const installationSetupQuery = gql`
  query installationSetupQuery($installation_id: Int!, $platform: Platform!) {
    installationSetup(installation_id: $installation_id, platform: $platform) {
      id
    }
  }
`;
