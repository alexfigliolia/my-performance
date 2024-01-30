import React, { Component } from "react";
import { BarGraph } from "Components/BarGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import type { MemberStats } from "Tools/Types";

export class LineStats extends Component<Props> {
  private lines = this.process();

  private process() {
    const { memberStats } = this.props;
    return Object.keys(memberStats).map(name => {
      return { label: name, value: memberStats[name].lines };
    });
  }

  private format = (axis: number) => {
    if (axis === 0) {
      return `${0}`;
    }
    if (axis >= 1_000_000) {
      return `${Math.floor(axis / 1_000_000)}M`;
    }
    return `${Math.floor(axis / 1000)}K`;
  };

  public override render() {
    return <BarGraph zeroMin data={this.lines} yAxisFormatter={this.format} />;
  }
}

interface Props {
  memberStats: Record<string, MemberStats>;
}

const mSTP = ({ memberStats }: ITeam) => {
  return { memberStats };
};

export const Contributors = connectTeam(mSTP)(LineStats);
