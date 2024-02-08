import { CreateLazyComponent } from "Components/LazyComponent";
import { LazyRoute } from "Routes/mixins";
import { Authenticator } from "Tools/Authenticator";
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
    return Authenticator.validateSession();
  },
  children: [Home, Team, Profile, Account, CoreCatch],
});
