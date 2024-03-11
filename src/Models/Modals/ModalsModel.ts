import { BaseModel } from "Tools/BaseModel";
import { ModalStack } from "Tools/ModalStack";
import { Toggler } from "Tools/Toggler";
import type { IModals } from "./types";

export class ModalsModel extends BaseModel<IModals> {
  public newTeamToggle = new Toggler("newTeamOpen", this);
  public createUserToggle = new Toggler("userCreation", this);
  public githubAccessToggle = new Toggler("githubAccessWindow", this);
  public bitbucketAccessToggle = new Toggler("bitbucketAccessWindow", this);
  constructor() {
    super("Modals", {
      active: false,
      menuOpen: false,
      newTeamOpen: false,
      userCreation: false,
      githubAccessWindow: false,
      bitbucketAccessWindow: false,
    });
  }

  public toggleMenu() {
    this.update(state => {
      state.menuOpen = !state.menuOpen;
      if (state.menuOpen) {
        ModalStack.push(this.closeMenu);
      } else {
        ModalStack.delete(this.closeMenu);
      }
    });
  }

  public closeMenu = () => {
    if (this.getState().menuOpen) {
      this.update(state => {
        state.menuOpen = false;
      });
      ModalStack.delete(this.closeMenu);
    }
  };
}
