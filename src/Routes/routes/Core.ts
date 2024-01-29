import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";
import { Home } from "./Home";
import { Team } from "./Team";
import { Profile } from "./Profile";
import { Account } from "./Account";
import { CoreCatch } from "./CoreCatch";

export const Core = new Route({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Core"),
  }),
  children: [Home, Team, Profile, Account, CoreCatch],
});
