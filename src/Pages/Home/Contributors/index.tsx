import { BarGraph } from "Components/BarGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import React, { Component } from "react";

export class LineStats extends Component<Props> {
  private lines = this.process();

  private process() {
    const { lines } = this.props;
    return Object.keys(lines).map(name => {
      return { label: name, value: lines[name] };
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
  lines: Record<string, number>;
}

const mSTP = ({ lines }: ITeam) => {
  return { lines };
};

export const Contributors = connectTeam(mSTP)(LineStats);
