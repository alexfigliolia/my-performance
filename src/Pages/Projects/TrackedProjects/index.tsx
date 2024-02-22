import React, { memo, useCallback } from "react";
import { Tile } from "Components/Layouts";
import { useProjects } from "State/Projects";
import { Instructions } from "./Instructions";
import "./styles.scss";

export const TrackedProjects = memo(
  function TrackedProjects() {
    const tracking = useProjects(state => state.trackedProjects.size);

    const text = useCallback((total: number) => {
      if (!total) {
        return "You are not tracking any projects yet";
      }
      return `You are currently tracking ${total} project${total === 1 ? "" : "s"}`;
    }, []);

    return (
      <Tile
        className="tracked-projects"
        heading="Tracked Projects"
        subheading={text(tracking)}>
        <Instructions />
      </Tile>
    );
  },
  () => true,
);
