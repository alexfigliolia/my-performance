import { Modals } from "State/Modals";
import { Teams } from "State/Teams";
import { Toasts } from "State/Toasts";
import { BaseModel } from "Tools/BaseModel";
import type { IAddTeam } from "./types";

export class AddTeamModel extends BaseModel<IAddTeam> {
  constructor() {
    super("Add Team", {
      name: "",
      loading: false,
    });
  }

  public closePanel = () => {
    Modals.newTeamToggle.close();
  };

  public async createTeam() {
    const { name } = this.getState();
    if (name.length < 3) {
      return Toasts.dispatch({
        type: "error",
        title: "Whoops!",
        message: "Please specify a name of at least 3 characters",
      });
    }
    this.set("loading", true);
    try {
      await Teams.createTeam(name);
      this.reset();
      this.closePanel();
    } catch (error) {
      this.set("loading", false);
      Toasts.dispatch({
        type: "error",
        title: "Network Error",
        message: "There was an issue creating your team. Please try again",
      });
    }
  }
}
