import type { OnBoardMutation, OnBoardMutationVariables } from "GQL";
import { GQLRequest, onboardMutation } from "GQL";
import { BaseModel } from "./BaseModel";
import type { IOnboarding } from "./types";

export class OnboardingModel extends BaseModel<IOnboarding> {
  constructor() {
    super("Onboarding", {
      name: "",
      organizationName: "",
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
    return GQLRequest<OnBoardMutation, OnBoardMutationVariables>({
      query: onboardMutation,
      variables: this.getState(),
    });
  }
}
