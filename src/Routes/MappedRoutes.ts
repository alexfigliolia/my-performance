import { Account } from "./routes/Core/Account";
import { Profile } from "./routes/Core/Profile";
import { Teams } from "./routes/Core/Teams";

export class MappedRoutes {
  public static ROUTES = {
    Teams: Teams,
    Profile: Profile,
    Account: Account,
  };

  public static get list() {
    return Object.keys(MappedRoutes.ROUTES) as unknown as Route[];
  }

  public static getPath<T extends Route>(key: T) {
    return this.ROUTES[key].path!;
  }
}

type Route = keyof (typeof MappedRoutes)["ROUTES"];
