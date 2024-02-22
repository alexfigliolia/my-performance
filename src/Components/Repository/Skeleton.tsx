import React, { memo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { PropLess } from "Types/React";
import "./style.scss";

export const RepositorySkeleton = memo(
  function RepositorySkeleton(_: PropLess) {
    return (
      <ListItemTile className="repo skeleton">
        <div className="repo-source" />
        <div className="repo-title" />

        <div className="language">
          <div className="dot" />
          <span />
        </div>
        <div className="description">
          <div />
          <div />
        </div>
        <div className="track-action skeleton-action">
          <button disabled>Track this repo</button>
        </div>
      </ListItemTile>
    );
  },
  () => true,
);
