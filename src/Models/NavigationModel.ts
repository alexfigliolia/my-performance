import type { To } from "react-router-dom";
import { BaseModel } from "./BaseModel";
import type { INavigation } from "./types";
import type { Navigator } from "Tools/Types";

export class NavigationModel extends BaseModel<INavigation> {
  public navigate!: (to: To) => Promise<void>;
  constructor() {
    super("Navigation", {
      search: "",
      pathname: "/",
      menuOpen: false,
    });
  }

  public register(navigate: Navigator) {
    this.navigate = navigate;
  }

  public setRoute({ search, pathname }: Omit<INavigation, "menuOpen">) {
    this.update(state => {
      state.search = search;
      state.pathname = pathname;
    });
  }

  public toggleMenu() {
    this.update(state => {
      state.menuOpen = !state.menuOpen;
    });
  }

  public closeMenu() {
    if (this.getState().menuOpen) {
      this.update(state => {
        state.menuOpen = false;
      });
    }
  }
}
