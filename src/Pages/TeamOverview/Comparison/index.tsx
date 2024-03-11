import React, { memo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { CommitComparison } from "./CommitComparison";
import { LineComparison } from "./LineComparison";
import { ProjectComparison } from "./ProjectComparison";
import "./styles.scss";

export const Comparison = memo(
  function Comparison(_: PropLess) {
    return (
      <div className="comparison-row">
        <ListItemTile heading="Team Projects">
          <ProjectComparison />
        </ListItemTile>
        <ListItemTile heading="Team Code">
          <LineComparison />
        </ListItemTile>
        <ListItemTile heading="Team Commits">
          <CommitComparison />
        </ListItemTile>
      </div>
    );
  },
  () => true,
);
