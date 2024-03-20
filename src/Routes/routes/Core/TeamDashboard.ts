import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Team } from "State/Team";

export const TeamDashboard = new LazyRoute({
  path: "/teams/:id/dashboard",
  Component: CreateLazyComponent({
    loader: () => import("Pages/TeamDashboard"),
  }),
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void Promise.allSettled([
        void Team.teamMesh(current),
        void Team.recentPullRequests(current),
      ]);
    });
    return null;
  },
});
