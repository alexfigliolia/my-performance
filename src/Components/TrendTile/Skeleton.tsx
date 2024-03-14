import React, { memo } from "react";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Skeleton = memo(
  function Skeleton(_: PropLess) {
    return (
      <div className={`trend-tile skeleton`}>
        <div className="stats">
          <div className="trend">
            <div className="icon" />
            <div className="wow">
              <span />
              <span />
            </div>
          </div>
          <div className="progress skeleton-progress" />
        </div>
        <div className="description" />
      </div>
    );
  },
  () => true,
);
