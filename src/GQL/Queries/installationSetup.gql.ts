import { gql } from "graphql-request";

export const installationSetupStream = gql`
  subscription installationSetupStream(
    $installation_id: Int!
    $platform: Platform!
  ) {
    installationSetupStream(
      installation_id: $installation_id
      platform: $platform
    ) {
      id
    }
  }
`;

export const installationSetup = gql`
  query installationSetup($installation_id: Int!, $platform: Platform!) {
    installationSetup(installation_id: $installation_id, platform: $platform) {
      id
    }
  }
`;
