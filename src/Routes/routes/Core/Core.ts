import { Authenticator } from "Authentication";
import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Account } from "./Account";
import { CoreCatch } from "./CoreCatch";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Team } from "./Team";

export const Core = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Core"),
  }),
  loader: () => {
    return Authenticator.verifySession();
  },
  children: [Home, Team, Profile, Account, CoreCatch],
});
