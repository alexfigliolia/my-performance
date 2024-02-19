import React, { memo } from "react";
import { Tile } from "Components/Layouts";
import { useProjects } from "State/Projects";
import { NoProjects } from "./NoProjects";
import "./styles.scss";

export const TrackedProjects = memo(
  function TrackedProjects() {
    const trackedProjects = useProjects(state => state.trackedProjects);
    return (
      <Tile
        className="tracked-projects"
        heading="Tracked Projects"
        subheading="These projects contribute to your team's statistics">
        {trackedProjects.length ? null : <NoProjects />}
      </Tile>
    );
  },
  () => true,
);
