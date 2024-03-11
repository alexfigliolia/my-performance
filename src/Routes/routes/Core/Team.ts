import { redirect } from "react-router-dom";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Team as TeamState } from "State/Team";
import { TeamDashboard } from "./TeamDashboard";
import { TeamOverview } from "./TeamOverview";
import { TeamProjects } from "./TeamProjects";

export const Team = new LazyRoute({
  path: "/teams/:id",
  loader: ({ params }) => {
    if (!params.id) {
      throw redirect("/");
    }
    TeamState.setID(parseInt(params.id));
    void Organizations.registerIfUninitialized(({ current }) => {
      void TeamState.teamStats(current);
      void TeamState.getStandouts(current);
    });
    return null;
  },
  children: [TeamOverview, TeamDashboard, TeamProjects],
});
