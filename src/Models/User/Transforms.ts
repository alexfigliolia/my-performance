import type { AffiliatedUser } from "./types";

export class UserTransforms {
  public static transformAffiliation<T extends AffiliatedUser>(response: T) {
    const { github, ...user } = response;
    return { ...user, githubToken: github?.token || "" };
  }
}
