import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";

export const Team = new Route({
  path: "/team",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Team"),
  }),
});
