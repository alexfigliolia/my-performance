import React, { memo } from "react";
import { TrendTile } from "Components/TrendTile";
import { useTeam } from "State/Team";
import { useTeams } from "State/Teams";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const LineComparison = memo(
  function LineComparison(_: PropLess) {
    const lines = useTeam(state => state.totalLines);
    const lineTrend = useTeam(state => state.lineTrend);
    const totalLines = useTeams(state => state.totalLines);
    return (
      <TrendTile
        type="lines"
        total={totalLines}
        trend={lineTrend}
        id="lineComparison"
        contributed={lines}
        color1="rgba(255, 193, 23, 1)"
        color2="rgba(251, 25, 206, 1)"
      />
    );
  },
  () => true,
);
