import type {
  CreateGithubAccountMutation,
  CreateGithubAccountMutationVariables,
} from "GQL";
import {
  createGithubAccount,
  GQLServiceRequest,
  GQLServiceSubscription,
  installationSetupStream,
  Platform,
} from "GQL";
import type { IOnboarding, ISubscription } from "./types";

export class Networking {
  state: IOnboarding;
  Subscription: ISubscription;
  constructor(state: IOnboarding) {
    this.state = state;
    this.Subscription = new GQLServiceSubscription({
      query: installationSetupStream,
      variables: {
        platform: Platform.Github,
        installation_id: state.installation_id,
      },
    }) as ISubscription;
  }

  public subscribe() {
    this.Subscription.open();
    return new Promise((resolve, reject) => {
      this.Subscription.onData(data => {
        const { id } = data.data?.installationSetupStream ?? {};
        if (typeof id === "number") {
          this.Subscription.closeAll();
          void this.createUserAccount().then(resolve);
        }
      });
      this.Subscription.onError(reject);
    });
  }

  public unsubscribe() {
    return this.Subscription.closeAll();
  }

  private createUserAccount() {
    const { code, orgName, installation_id } = this.state;
    return GQLServiceRequest<
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
