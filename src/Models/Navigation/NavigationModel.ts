import { BaseModel } from "Tools/BaseModel";
import type { Router } from "Types/Routing";
import type { INavigation } from "./types";

export class NavigationModel extends BaseModel<INavigation> {
  navigate!: Router["navigate"];
  constructor() {
    super("Navigation", {
      search: window.location.search,
      pathname: window.location.pathname,
    });
  }

  public register(Router: Router) {
    this.setRoute(Router.state.location);
    Router.subscribe(state => {
      this.setRoute(state.location);
    });
    this.navigate = Router.navigate.bind(Router);
  }

  public setRoute<T extends INavigation>({ search, pathname }: T) {
    this.update(state => {
      state.search = search;
      state.pathname = pathname;
    });
  }
}
