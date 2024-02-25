import { Account } from "./routes/Core/Account";
import { Home } from "./routes/Core/Home";
import { Profile } from "./routes/Core/Profile";
import { Projects } from "./routes/Core/Projects";
import { Team } from "./routes/Core/Team";

export class MappedRoutes {
  public static ROUTES = {
    Home: Home,
    Team: Team,
    Projects: Projects,
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