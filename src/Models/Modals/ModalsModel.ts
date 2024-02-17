import CSSVars from "Styles/exports.module.scss";
import { BaseModel } from "Tools/BaseModel";
import { ModalStack } from "Tools/ModalStack";
import { Toggler } from "Tools/Toggler";
import type { IModals } from "./types";

export class ModalsModel extends BaseModel<IModals> {
  editUserToggle = new Toggler("editUser", this);
  createUserToggle = new Toggler("userCreation", this);
  githubAccessToggle = new Toggler("githubAccessWindow", this);
  bitbucketAccessToggle = new Toggler("bitbucketAccessWindow", this);
  public static transitionDuration = parseInt(
    CSSVars.modalTransitionDuration.slice(0, -2),
  );
  constructor() {
    super("Modals", {
      active: false,
      editUser: false,
      menuOpen: false,
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

  public openCreateUser() {
    this.createUserToggle.open();
  }

  public closeCreateUser() {
    this.createUserToggle.close();
  }

  public openEditUser() {
    this.editUserToggle.open();
  }

  public closeEditUser() {
    this.editUserToggle.close();
  }

  public openGithubAccessWindow() {
    this.githubAccessToggle.open();
  }

  public closeGithubAccessWindow() {
    this.githubAccessToggle.close();
  }

  public openBitbucketAccessWindow() {
    this.bitbucketAccessToggle.open();
  }

  public closeBitbucketAccessWindow() {
    this.bitbucketAccessToggle.close();
  }
}
