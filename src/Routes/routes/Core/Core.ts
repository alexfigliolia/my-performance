import { Authenticator } from "Authentication";
import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Account } from "./Account";
import { CoreCatch } from "./CoreCatch";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Team } from "./Team";

export const Core = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Core"),
  }),
  loader: async () => {
    await Authenticator.verifySession();
    await Organizations.initialize();
    return null;
  },
  children: [Home, Team, Projects, Profile, Account, CoreCatch],
});
