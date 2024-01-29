import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";

export const Profile = new Route({
  path: "/profile",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Profile"),
  }),
});
