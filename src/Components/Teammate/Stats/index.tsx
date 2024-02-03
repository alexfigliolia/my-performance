import React, { Component } from "react";
import { LineGraph } from "Components/LineGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { Dates } from "Tools/Dates";
import { Numbers } from "Tools/Numbers";
import type { LineDatum, MemberStats } from "Tools/Types";
import "./styles.scss";

class StatsRenderer extends Component<Props> {
  data: LineDatum[];
  gradientID: string;
  gradientStroke: string;
  static readonly GRAPH_MARGINS = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  static readonly months = Dates.last12Months();
  constructor(props: Props) {
    super(props);
    const { name, linesPerMonth } = this.props;
    this.gradientID = `${name}LineGradient`;
    this.gradientStroke = `url(#${this.gradientID})`;
    this.data = StatsRenderer.months.map((date, i) => ({
      date,
      value: linesPerMonth[i],
    }));
  }

  public override render() {
    const { name, lines, commits, recentPullRequests, color1, color2 } =
      this.props;
    return (
      <div className="stats">
        <span className="name">{name}</span>
        <table>
          <thead>
            <tr>
              <th>Lines</th>
              <th>Commits</th>
              <th>PR&apos;s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Numbers.format(lines)}</td>
              <td>{Numbers.format(commits)}</td>
              <td>{Numbers.format(recentPullRequests)}</td>
            </tr>
          </tbody>
        </table>
        <LineGraph
          id={name}
          height={30}
          data={this.data}
          stroke={this.gradientStroke}
          margins={StatsRenderer.GRAPH_MARGINS}>
          <defs>
            <linearGradient id={this.gradientID}>
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
        </LineGraph>
      </div>
    );
  }
}

interface OwnProps {
  name: string;
  color1: string;
  color2: string;
}

interface Props extends MemberStats, OwnProps {}

const mSTP = ({ memberStats }: ITeam, { name }: OwnProps) => {
  return { ...memberStats[name] };
};

export const Stats = connectTeam(mSTP)(StatsRenderer);
