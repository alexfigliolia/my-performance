import type { Location, To } from "react-router-dom";
import { BaseModel } from "./BaseModel";
import type { Navigator, Router } from "Tools/Types";
import { Modals } from "State/Modals";
import type { INavigation } from "./types";

export class NavigationModel extends BaseModel<INavigation> {
  public navigate!: (to: To) => Promise<void>;
  constructor() {
    super("Navigation", {
      search: "",
      pathname: "/",
      menuOpen: false,
    });
  }

  private wrapNavigation(nav: Navigator) {
    return async (...args: Parameters<Navigator>) => {
      if (Modals.getState().active) {
        await Modals.invokeNext();
      }
      return nav(...args);
    };
  }

  public register(Router: Router) {
    this.setRoute(Router.state.location);
    Router.subscribe(state => {
      this.setRoute(state.location);
    });
    const navigate = this.wrapNavigation(Router.navigate.bind(Router));
    this.navigate = navigate;
    // @ts-ignore;
    Router.navigate = navigate;
  }

  public setRoute({ search, pathname }: Location) {
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
