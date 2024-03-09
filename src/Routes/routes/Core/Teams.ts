import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Projects } from "State/Projects";
import { Team as TeamState } from "State/Team";

export const Teams = new LazyRoute({
  path: "/teams",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Teams"),
  }),
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void Promise.allSettled([
        TeamState.getTeams(current),
        TeamState.getMyTeams(current),
        Projects.totalProjects(current),
      ]);
    });
    return null;
  },
});
