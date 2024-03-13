import React, { memo } from "react";
import { TrendTile } from "Components/TrendTile";
import { useTeam } from "State/Team";
import { useTeams } from "State/Teams";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const CommitComparison = memo(
  function CommitComparison(_: PropLess) {
    const commits = useTeam(state => state.totalCommits);
    const commitTrend = useTeam(state => state.commitTrend);
    const totalCommits = useTeams(state => state.totalCommits);
    return (
      <TrendTile
        type="commits"
        total={totalCommits}
        trend={commitTrend}
        contributed={commits}
        id="commitComparison"
        color1="rgb(33 242 165)"
        color2="rgb(33 211 242)"
      />
    );
  },
  () => true,
);
