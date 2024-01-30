import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { teamProgressConnection } from "State/Connections";
import { TrendTile } from "../TrendTile";
import "./styles.scss";

class CommitComparisonRenderer extends Component<Props> {
  public override render() {
    const { commits, trendCommits, totalCommits, progress } = this.props;
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
  }
}

const mSTP = ([{ totalCommits, trendCommits }, { commits }]: ReactiveStates<
  typeof teamProgressConnection
>) => {
  return {
    commits,
    totalCommits,
    trendCommits,
    progress: Math.round((totalCommits * 100) / commits),
  };
};

interface Props {
  commits: number;
  progress: number;
  totalCommits: number;
  trendCommits: number;
}

export const CommitComparison = teamProgressConnection(mSTP)(
  CommitComparisonRenderer,
);
