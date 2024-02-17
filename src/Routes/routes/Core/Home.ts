import { CreateLazyComponent } from "Components/LazyComponent";
import { LazyRoute } from "Routes/mixins";

export const Home = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Home"),
  }),
});
