import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";

export const TeamOverview = new LazyRoute({
  path: "/teams/:id",
  Component: CreateLazyComponent({
    loader: () => import("Pages/TeamOverview"),
  }),
});
