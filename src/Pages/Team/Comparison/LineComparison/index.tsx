import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { teamProgressConnection } from "State/Connections";
import { TrendTile } from "../TrendTile";
import "./styles.scss";

class LineComparisonRenderer extends Component<Props> {
  public override render() {
    const { lines, trendLines, totalLines, progress } = this.props;
    return (
      <TrendTile
        type="lines"
        total={lines}
        trend={trendLines}
        progress={progress}
        id="lineComparison"
        contributed={totalLines}
        color1="rgba(255, 193, 23, 1)"
        color2="rgba(251, 25, 206, 1)"
      />
    );
  }
}

const mSTP = ([
  { totalLines, trendCommits, trendLines },
  { lines },
]: ReactiveStates<typeof teamProgressConnection>) => {
  return {
    lines,
    totalLines,
    trendLines,
    trendCommits,
    progress: Math.round((totalLines * 100) / lines),
  };
};

interface Props {
  lines: number;
  progress: number;
  totalLines: number;
  trendLines: number;
  trendCommits: number;
}

export const LineComparison = teamProgressConnection(mSTP)(
  LineComparisonRenderer,
);
