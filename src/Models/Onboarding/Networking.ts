import type {
  CreateGithubAccountMutation,
  CreateGithubAccountMutationVariables,
} from "GQL";
import {
  createGithubAccount,
  GQLRequest,
  GQLSubscription,
  installationSetupSubscription,
  Platform,
} from "GQL";
import type { IOnboarding, ISubscription } from "./types";

export class Networking {
  state: IOnboarding;
  Subscription: ISubscription;
  constructor(state: IOnboarding) {
    this.state = state;
    this.Subscription = new GQLSubscription(installationSetupSubscription, {
      platform: Platform.Github,
      installation_id: state.installation_id,
    }) as ISubscription;
  }

  public subscribe() {
    this.Subscription.open();
    return new Promise((resolve, reject) => {
      this.Subscription.onData(data => {
        const { id } = data.data?.installationSetup ?? {};
        if (typeof id === "number") {
          this.Subscription.close();
          void this.createUserAccount().then(resolve);
        }
      });
      this.Subscription.onError(reject);
    });
  }

  public unsubscribe() {
    return this.Subscription.close();
  }

  private createUserAccount() {
    const { code, orgName, installation_id } = this.state;
    return GQLRequest<
      CreateGithubAccountMutation,
      CreateGithubAccountMutationVariables
    >({
      query: createGithubAccount,
      variables: {
        code: code!,
        name: orgName,
        installation_id: installation_id!,
      },
    });
  }
}
