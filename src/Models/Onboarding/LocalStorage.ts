import { BrowserStorageClient } from "Generics/PersistedStorage";
import type { OnboardingCache } from "./types";

export class LocalStorage extends BrowserStorageClient<OnboardingCache> {
  public matchID(ID: string | null) {
    return ID === this.get("ID");
  }

  public reset() {
    this.delete("ID");
    this.delete("action");
    this.delete("code");
    this.delete("installation_id");
    this.delete("orgName");
  }
}
