import { BaseModel } from "Tools/BaseModel";
import type { IPlatform, PlatformCredentials } from "./types";

export class PlatformModel extends BaseModel<IPlatform> {
  constructor() {
    super("Platforms", {
      github: null,
    });
  }

  public setGithubCredentials(credentials: PlatformCredentials | null) {
    this.update(state => {
      state.github = credentials;
    });
  }
}
