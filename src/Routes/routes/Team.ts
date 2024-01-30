import { CreateLazyComponent } from "Components/LazyComponent";
import { LazyRoute } from "Routes/mixins";

export const Team = new LazyRoute({
  path: "/team",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Team"),
  }),
});
