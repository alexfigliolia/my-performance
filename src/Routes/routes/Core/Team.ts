import { redirect } from "react-router-dom";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Team as TeamState } from "State/Team";
import { Teams } from "State/Teams";
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
      void Promise.allSettled([
        Teams.countProjects(current),
        TeamState.teamStats(current),
        TeamState.getStandouts(current),
        Teams.countLinesAndCommits(current),
      ]);
    });
    return null;
  },
  children: [TeamOverview, TeamDashboard, TeamProjects],
});
