import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";

export const Home = new Route({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Home"),
  }),
});
