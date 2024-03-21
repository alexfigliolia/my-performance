import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Teams as TeamsState } from "State/Teams";

export const Teams = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Teams"),
  }),
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void Promise.allSettled([
        TeamsState.getMyTeams(current),
        TeamsState.countLinesAndCommits(current),
      ]);
    });
    return null;
  },
});
