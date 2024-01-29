import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";

export const Home = new Route({
  path: "/home",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Home"),
  }),
});
