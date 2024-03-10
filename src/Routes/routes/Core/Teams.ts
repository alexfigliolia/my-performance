import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Projects } from "State/Projects";
import { Teams as TeamsState } from "State/Teams";

export const Teams = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Teams"),
  }),
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void Promise.allSettled([
        TeamsState.countTeams(current),
        TeamsState.getMyTeams(current),
        Projects.totalProjects(current),
      ]);
    });
    return null;
  },
});
