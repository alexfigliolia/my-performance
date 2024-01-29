import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";
import { Home } from "./Home";
import { Team } from "./Team";
import { Profile } from "./Profile";
import { Account } from "./Account";

export const Core = new Route({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Core"),
  }),
  children: [Home, Team, Profile, Account],
});
