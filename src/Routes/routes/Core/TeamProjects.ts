import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";

export const TeamProjects = new LazyRoute({
  path: "/teams/:id/projects",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Projects"),
  }),
});
