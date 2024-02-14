import { BrowserStorageClient } from "Generics/PersistedStorage";
import type {
  LoginWithGithubMutation,
  LoginWithGithubMutationVariables,
  OnboardWithGithubMutation,
  OnboardWithGithubMutationVariables,
} from "GQL";
import { GQLRequest, loginWithGithub, onboardWithGithub } from "GQL";
import { BaseModel } from "./BaseModel";
import type { IOnboarding } from "./types";

export class OnboardingModel extends BaseModel<IOnboarding> {
  private storage = new BrowserStorageClient<IOnboarding>();
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
      state.name = this.getCached("name");
    });
  }

  public setName(name: string) {
    this.update(state => {
      state.name = name;
    });
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.setCached("name", this.getState().name);
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

  public loginWithGithub() {
    const { code } = this.getState();
    return GQLRequest<
      LoginWithGithubMutation,
      LoginWithGithubMutationVariables
    >({
      query: loginWithGithub,
      variables: { code },
    });
  }

  public getCached<K extends keyof IOnboarding>(key: K) {
    return this.storage.get(key);
  }

  public setCached<K extends keyof IOnboarding>(key: K, value: string) {
    return this.storage.set(key, value);
  }

  public deleteCached<K extends keyof IOnboarding>(key: K) {
    return this.storage.delete(key);
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
