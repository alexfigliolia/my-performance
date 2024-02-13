import React, { Component } from "react";
import { BarGraph } from "Components/BarGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import CSSVars from "Styles/exports.module.scss";
import { Rainbow } from "Tools/Rainbow";
import type { MemberStats } from "Tools/Types";

export class LineStats extends Component<Props> {
  private readonly lines = this.process();
  private static readonly margins = {
    top: 10,
    left: 30,
    right: 0,
    bottom: 0,
  };
  private static readonly colors = Rainbow.gradientList("to bottom");
  private readonly height = parseInt(CSSVars.graphHeight.slice(0, -2));

  private process() {
    const lines: number[] = [];
    const { team, memberStats } = this.props;
    team.forEach(name => {
      lines.push(memberStats[name].lines);
    });
    return lines;
  }

  public override render() {
    return (
      <BarGraph
        id="contributors"
        yData={this.lines}
        height={this.height}
        colors={LineStats.colors}
        margins={LineStats.margins}
        xData={this.props.truncatedNames}
      />
    );
  }
}

interface Props {
  team: string[];
  truncatedNames: string[];
  memberStats: Record<string, MemberStats>;
}

const mSTP = ({ memberStats, team, truncatedNames }: ITeam) => {
  return { memberStats, team, truncatedNames };
};

export const Contributors = connectTeam(mSTP)(LineStats);
