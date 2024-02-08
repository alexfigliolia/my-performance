import React, { Component } from "react";
import { BarGraph } from "Components/BarGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import CSSVars from "Styles/exports.module.scss";
import { Rainbow } from "Tools/Rainbow";
import type { MemberStats } from "Tools/Types";

export class LineStats extends Component<Props> {
  private readonly lines: number[];
  private readonly labels: string[];
  private static readonly margins = {
    top: 10,
    left: 30,
    right: 0,
    bottom: 0,
  };
  private static readonly colors = Rainbow.gradientList("to bottom");
  private readonly height = parseInt(CSSVars.graphHeight.slice(0, -2));
  constructor(props: Props) {
    super(props);
    const { lines, labels } = this.process();
    this.lines = lines;
    this.labels = labels;
  }

  private process() {
    const lines: number[] = [];
    const labels: string[] = [];
    const { team, memberStats } = this.props;
    team.forEach(name => {
      const [first, ...rest] = name.split(" ");
      const last = rest[rest.length - 1]?.[0];
      if (last) {
        labels.push(`${first} ${last}.`);
      } else {
        labels.push(first);
      }
      lines.push(memberStats[name].lines);
    });
    return { lines, labels };
  }

  public override render() {
    return (
      <BarGraph
        id="contributors"
        yData={this.lines}
        xData={this.labels}
        height={this.height}
        colors={LineStats.colors}
        margins={LineStats.margins}
      />
    );
  }
}

interface Props {
  team: string[];
  memberStats: Record<string, MemberStats>;
}

const mSTP = ({ memberStats, team }: ITeam) => {
  return { memberStats, team };
};

export const Contributors = connectTeam(mSTP)(LineStats);
