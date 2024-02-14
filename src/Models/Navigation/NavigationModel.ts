import type { Location, To } from "react-router-dom";
import { Modals } from "State/Modals";
import { BaseModel } from "Tools/BaseModel";
import type { Navigator, Router } from "Tools/Types";
import type { INavigation } from "./types";

export class NavigationModel extends BaseModel<INavigation> {
  public navigate!: (to: To) => Promise<void>;
  constructor() {
    super("Navigation", {
      search: "",
      pathname: "/",
    });
  }

  public register(Router: Router) {
    this.setRoute(Router.state.location);
    Router.subscribe(state => {
      this.setRoute(state.location);
    });
    const navigate = this.wrapNavigation(Router.navigate.bind(Router));
    // @ts-ignore;
    Router.navigate = navigate;
    this.navigate = navigate;
  }

  private wrapNavigation(nav: Navigator) {
    return async (...args: Parameters<Navigator>) => {
      if (Modals.getState().active) {
        await Modals.invokeNext();
      }
      return nav(...args);
    };
  }

  public setRoute({ search, pathname }: Location) {
    this.update(state => {
      state.search = search;
      state.pathname = pathname;
    });
  }
}
