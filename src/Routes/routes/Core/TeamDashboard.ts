import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";

export const TeamDashboard = new LazyRoute({
  path: "/teams/:id/dashboard",
  Component: CreateLazyComponent({
    loader: () => import("Pages/TeamDashboard"),
  }),
});
