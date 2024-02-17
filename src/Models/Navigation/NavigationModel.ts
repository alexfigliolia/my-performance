import type { Location } from "react-router-dom";
import { BaseModel } from "Tools/BaseModel";
import type { Router } from "Tools/Types";
import type { INavigation } from "./types";

export class NavigationModel extends BaseModel<INavigation> {
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
  }

  public setRoute({ search, pathname }: Location) {
    this.update(state => {
      state.search = search;
      state.pathname = pathname;
    });
  }
}
