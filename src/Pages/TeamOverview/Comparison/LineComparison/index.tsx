import React, { memo } from "react";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import { TrendTile } from "../TrendTile";
import "./styles.scss";

export const LineComparison = memo(
  function LineComparison(_: PropLess) {
    const { totalLines, trendLines } = useTeam(state => state);
    const lines = 10000000;
    const progress = Math.round((totalLines * 100) / lines);

    return (
      <TrendTile
        type="lines"
        total={10000000}
        trend={trendLines}
        progress={progress}
        id="lineComparison"
        contributed={totalLines}
        color1="rgba(255, 193, 23, 1)"
        color2="rgba(251, 25, 206, 1)"
      />
    );
  },
  () => true,
);
