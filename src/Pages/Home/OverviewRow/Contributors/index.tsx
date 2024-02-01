import React, { Component } from "react";
import CSSVars from "Styles/exports.module.scss";
import { BarGraph } from "Components/BarGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import type { MemberStats } from "Tools/Types";
import { Rainbow } from "Tools/Rainbow";

export class LineStats extends Component<Props> {
  private static readonly margins = {
    top: 10,
    left: 30,
    right: 0,
    bottom: 0,
  };
  private readonly lines = this.process();
  private static readonly colors = Rainbow.gradientList("to bottom");
  private readonly height = parseInt(CSSVars.graphHeight.slice(0, -2));

  private process() {
    const { team, memberStats } = this.props;
    return team.map(name => memberStats[name].lines);
  }

  public override render() {
    const { team } = this.props;
    return (
      <BarGraph
        xData={team}
        id="contributors"
        yData={this.lines}
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
