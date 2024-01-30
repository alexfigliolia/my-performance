import { CreateLazyComponent } from "Components/LazyComponent";
import { LazyRoute } from "Routes/mixins";
import { Home } from "./Home";
import { Team } from "./Team";
import { Profile } from "./Profile";
import { Account } from "./Account";
import { CoreCatch } from "./CoreCatch";

export const Core = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Core"),
  }),
  children: [Home, Team, Profile, Account, CoreCatch],
});
