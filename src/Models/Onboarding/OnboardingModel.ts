import { TimedPromise } from "@figliolia/promises";
import { Navigation } from "State/Navigation";
import { BaseModel } from "Tools/BaseModel";
import { TaskQueue } from "Tools/TaskQueue";
import { LocalStorage } from "./LocalStorage";
import { Networking } from "./Networking";
import type { IOnboarding } from "./types";
import "url-search-params-polyfill";

export class OnboardingModel extends BaseModel<IOnboarding> {
  private storage: LocalStorage;
  private timer: ReturnType<typeof setTimeout> | null = null;
  constructor() {
    const storage = new LocalStorage();
    super("Onboarding", {
      ID: null,
      code: null,
      action: null,
      installation_id: null,
      orgName: storage.get("orgName"),
    });
    this.storage = storage;
  }

  public initialize() {
    const params = new URLSearchParams(Navigation.getState().search);
    const installation_id = params.get("installation_id");
    this.update(state => {
      state.ID = params.get("state");
      state.code = params.get("code");
      state.action = params.get("setup_action");
      state.installation_id =
        installation_id === null ? null : parseInt(installation_id);
    });
  }

  public resetAll() {
    this.resetInstallationParams();
    this.storage.resetOrganization();
    this.update(state => {
      state.orgName = "";
    });
  }

  public resetInstallationParams() {
    this.storage.resetInstallationParams();
    this.clearQueryParams();
    this.update(state => {
      state.ID = null;
      state.code = null;
      state.action = null;
      state.installation_id = null;
    });
  }

  public clearQueryParams() {
    const { origin, pathname } = location;
    history.replaceState({}, document.title, origin + pathname);
    Navigation.setRoute({ search: "", pathname });
  }

  public setName(name: string) {
    this.update(state => {
      state.orgName = name;
    });
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.storage.set("orgName", this.getState().orgName);
    }, 250);
  }

  public get validInstallation() {
    const { ID, code, action, installation_id } = this.getState();
    return (
      code &&
      installation_id &&
      action === "install" &&
      this.storage.matchID(ID)
    );
  }

  public get validAuthentication() {
    const { ID, code, action, installation_id } = this.getState();
    return (
      code &&
      installation_id &&
      action === "install" &&
      this.storage.matchID(ID)
    );
  }

  public cacheID(ID: string) {
    this.storage.set("ID", ID);
  }

  public listenForInstallation() {
    if (!this.validInstallation) {
      this.resetInstallationParams();
      // TODO toast error
      return null;
    }
    const networking = new Networking(this.getState());
    const TP = new TimedPromise(() => networking.subscribe(), 1500);
    void TP.run().then(({ remainingMS }) => {
      TaskQueue.deferTask(() => {
        this.resetAll();
        void Navigation.navigate("/projects");
      }, remainingMS);
    });
    return networking;
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
