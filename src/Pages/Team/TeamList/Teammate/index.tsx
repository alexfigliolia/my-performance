import React, { Component } from "react";
import { Tile } from "Components/Tile";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { Dates } from "Tools/Dates";
import { LineGraph } from "Components/LineGraph";
import type { LineDatum } from "Tools/Types";
import "./styles.scss";

export class TeammateRenderer extends Component<Props> {
  stroke: string;
  data: LineDatum[];
  identifier: string;
  public static dates = Dates.last12Months();
  constructor(props: Props) {
    super(props);
    const { name, dataPoints } = this.props;
    this.data = dataPoints.map((d, i) => ({
      value: d,
      date: TeammateRenderer.dates[i],
    }));
    this.identifier = `${name.split(" ").join("")}Gradient`;
    this.stroke = `url(#${this.identifier})`;
  }

  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { name } = this.props;
    return (
      <Tile className="teammate" heading={name}>
        <LineGraph id={name} height={100} data={this.data} stroke={this.stroke}>
          <defs>
            <linearGradient id={this.identifier} x1="1" x2="0" y1="0" y2="1">
              <stop stopColor="rgba(255, 193, 23, 1)" offset="0" />
              <stop stopColor="rgba(251, 25, 206, 1)" offset="1" />
            </linearGradient>
          </defs>
        </LineGraph>
      </Tile>
    );
  }
}

const mSTP = ({ lines, commits, linesPerMonth }: ITeam, { name }: OwnProps) => {
  return {
    lines: lines[name],
    commits: commits[name],
    dataPoints: linesPerMonth[name],
  };
};

interface OwnProps {
  name: string;
}

interface Props extends OwnProps {
  lines: number;
  commits: number;
  dataPoints: number[];
}

export const Teammate = connectTeam(mSTP)(TeammateRenderer);
