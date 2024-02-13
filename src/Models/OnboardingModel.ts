import type {
  OnboardWithGithubMutation,
  OnboardWithGithubMutationVariables,
} from "GQL";
import { GQLRequest, onboardWithGithub } from "GQL";
import { PersistedStorage } from "Tools/PersistedStorage";
import { BaseModel } from "./BaseModel";
import type { IOnboarding } from "./types";

export class OnboardingModel extends BaseModel<IOnboarding> {
  private timer: ReturnType<typeof setTimeout> | null = null;
  constructor() {
    super("Onboarding", {
      code: "",
      name: "",
    });
  }

  public setCode(code: string) {
    this.update(state => {
      state.code = code;
    });
  }

  public initializeFromCache() {
    this.update(state => {
      state.name = PersistedStorage.get("organizationName");
    });
  }

  public setName(name: string) {
    this.update(state => {
      state.name = name;
    });
    this.clearTimer();
    this.timer = setTimeout(() => {
      PersistedStorage.set("organizationName", this.getState().name);
    }, 500);
  }

  public onboardWithGithub() {
    return GQLRequest<
      OnboardWithGithubMutation,
      OnboardWithGithubMutationVariables
    >({
      query: onboardWithGithub,
      variables: this.getState(),
    });
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
