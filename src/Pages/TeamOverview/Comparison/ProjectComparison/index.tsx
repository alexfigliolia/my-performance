import React, { memo } from "react";
import { useTeam } from "State/Team";
import { useTeams } from "State/Teams";
import type { PropLess } from "Types/React";
import { TrendTile } from "../TrendTile";
import "./styles.scss";

export const ProjectComparison = memo(
  function ProjectComparison(_: PropLess) {
    const totalProjects = useTeams(state => state.totalProjects);
    const teamProjects = useTeam(state => state.trackedProjects.size);
    const progress = Math.round((teamProjects * 100) / totalProjects);
    return (
      <TrendTile
        type="projects"
        progress={progress}
        trend={teamProjects}
        total={totalProjects}
        id="projectComparison"
        color1="rgb(62 186 248)"
        color2="rgb(198 111 255)"
        contributed={totalProjects}
      />
    );
  },
  () => true,
);
