import React, { memo } from "react";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import { TrendTile } from "../TrendTile";
import "./styles.scss";

export const CommitComparison = memo(
  function CommitComparison(_: PropLess) {
    const { totalCommits, trendCommits } = useTeam(state => state);
    const commits = 100000;
    const progress = Math.round((totalCommits * 100) / commits);
    return (
      <TrendTile
        type="commits"
        total={commits}
        progress={progress}
        trend={trendCommits}
        id="commitComparison"
        color1="rgb(33 242 165)"
        color2="rgb(33 211 242)"
        contributed={totalCommits}
      />
    );
  },
  () => true,
);
