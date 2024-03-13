import React, { memo } from "react";
import { TrendTile } from "Components/TrendTile";
import { useTeam } from "State/Team";
import { useTeams } from "State/Teams";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const ProjectComparison = memo(
  function ProjectComparison(_: PropLess) {
    const projectTrend = useTeam(state => state.projectTrend);
    const totalProjects = useTeams(state => state.totalProjects);
    const teamProjects = useTeam(state => state.trackedProjects.size);
    return (
      <TrendTile
        type="projects"
        trend={projectTrend}
        total={totalProjects}
        id="projectComparison"
        color1="rgb(62 186 248)"
        color2="rgb(198 111 255)"
        contributed={teamProjects}
      />
    );
  },
  () => true,
);
