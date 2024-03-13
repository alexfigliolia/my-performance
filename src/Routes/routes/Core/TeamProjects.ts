import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Team } from "State/Team";

export const TeamProjects = new LazyRoute({
  path: "/teams/:id/projects",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Projects"),
  }),
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void Team.trackedProjects(current);
    });
    return null;
  },
});
