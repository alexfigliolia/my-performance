import React, { Component } from "react";
import { SVGGradient } from "Components/Gradients";
import { LineGraph } from "Components/Graphs";
import type { MemberStats } from "Models/Team";
import { Dates } from "Tools/Dates";
import { Numbers } from "Tools/Numbers";
import type { LineDatum } from "Types/Graphs";
import "./styles.scss";

export class Stats extends Component<Props> {
  data: LineDatum[];
  gradientID: string;
  gradientStroke: string;
  private ID = this.props.name.replaceAll(" ", "");
  static readonly GRAPH_MARGINS = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  static readonly months = Dates.last12Months();
  constructor(props: Props) {
    super(props);
    const { id, linesPerMonth } = this.props;
    this.gradientID = `${id}LineGradient`;
    this.gradientStroke = `url(#${this.gradientID})`;
    this.data = Stats.months.map((date, i) => ({
      date,
      value: linesPerMonth[i],
    }));
  }

  public override render() {
    const { name, lines, commits, recentPullRequests, color1, color2 } =
      this.props;
    return (
      <div className="stats">
        <span className="name searchable">{name}</span>
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
          id={this.ID}
          height={30}
          data={this.data}
          stroke={this.gradientStroke}
          margins={Stats.GRAPH_MARGINS}>
          <SVGGradient color1={color1} color2={color2} id={this.gradientID} />
        </LineGraph>
      </div>
    );
  }
}

interface Props extends MemberStats {
  id: string;
  name: string;
  color1: string;
  color2: string;
}
