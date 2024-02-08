import { GQLRequest } from "GQL/Client";
import { onboardMutation } from "GQL/Queries";
import type { OnBoardMutation, OnBoardMutationVariables } from "GQL/Types";
import { Platform } from "GQL/Types";
import { BaseModel } from "./BaseModel";
import type { IOnboarding } from "./types";

export class OnboardingModel extends BaseModel<IOnboarding> {
  constructor() {
    super("Onboarding", {
      organizationName: "",
      platform: "",
      username: "",
      email: "",
      password: "",
    });
  }

  public set<K extends keyof IOnboarding>(key: K, value: IOnboarding[K]) {
    this.update(state => {
      state[key] = value;
    });
  }

  public validKey(key: string): key is keyof IOnboarding {
    return key in this.getState();
  }

  public onboard() {
    const payload = this.getState();
    return GQLRequest<OnBoardMutation, OnBoardMutationVariables>({
      query: onboardMutation,
      variables: {
        ...payload,
        platform: this.platform,
      },
    });
  }

  public get platform() {
    if (this.getState().platform === "github") {
      return Platform.Github;
    }
    return Platform.Bitbucket;
  }
}
