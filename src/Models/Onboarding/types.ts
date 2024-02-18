import type { GQLSubscription } from "GQL/Client";
import type {
  InstallationSetupQueryQueryVariables,
  InstallationSetupSubscriptionSubscription,
} from "GQL/Types";

export interface IOnboarding {
  orgName: string;
  ID: string | null;
  code: string | null;
  action: string | null;
  installation_id: number | null;
}

export type OnboardingCache = {
  [K in keyof IOnboarding]: string;
} & { ID: string };

export type ISubscription = GQLSubscription<
  InstallationSetupSubscriptionSubscription,
  InstallationSetupQueryQueryVariables
>;