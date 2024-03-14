import React, { memo, useCallback } from "react";
import { AnimatedText } from "Components/AnimatedText";
import { ListItemTile } from "Components/Layouts";
import { Skeleton } from "Components/TrendTile";
import { Navigation } from "State/Navigation";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import { CommitComparison } from "./CommitComparison";
import { LineComparison } from "./LineComparison";
import { ProjectComparison } from "./ProjectComparison";
import "./styles.scss";

export const Comparison = memo(
  function Comparison(_: PropLess) {
    const ID = useTeam(state => state.id);
    const loading = useTeam(state => state.loading);

    const toProjects = useCallback(() => {
      void Navigation.navigate(`/teams/${ID}/projects`);
    }, [ID]);

    const toDashboard = useCallback(() => {
      void Navigation.navigate(`/teams/${ID}/dashboard`);
    }, [ID]);

    return (
      <div className="comparison-row">
        <ListItemTile
          role="link"
          tabIndex={0}
          onClick={toProjects}
          className="team-projects"
          heading={
            <AnimatedText
              text="Team Projects"
              color1="rgb(62, 186, 248)"
              color2="rgb(198, 111, 255)"
            />
          }>
          {loading ? <Skeleton /> : <ProjectComparison />}
        </ListItemTile>
        <ListItemTile
          role="link"
          tabIndex={0}
          className="team-code"
          onClick={toDashboard}
          heading={
            <AnimatedText
              text="Team Code"
              color1="rgb(255, 193, 23)"
              color2="rgb(251, 25, 206)"
            />
          }>
          {loading ? <Skeleton /> : <LineComparison />}
        </ListItemTile>
        <ListItemTile
          role="link"
          tabIndex={0}
          className="team-commits"
          onClick={toDashboard}
          heading={
            <AnimatedText
              text="Team Commits"
              color1="rgb(33, 242, 165)"
              color2="rgb(33, 211, 242)"
            />
          }>
          {loading ? <Skeleton /> : <CommitComparison />}
        </ListItemTile>
      </div>
    );
  },
  () => true,
);
