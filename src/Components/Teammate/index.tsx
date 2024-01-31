import React, { Component } from "react";
import { Tile } from "Components/Tile";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { Output } from "./Output";
import { Stats } from "./Stats";
import "./styles.scss";

class TeammateRenderer extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  private getColors(output: number) {
    if (output < 5) {
      return ["rgba(255, 122, 122, 1)", "rgba(255, 21, 126, 1)"];
    }
    if (output < 10) {
      return ["rgba(255, 220, 122, 1)", "rgba(255, 132, 0, 1)"];
    }
    return ["rgba(133, 255, 122, 1)", "rgba(23, 225, 191, 1)"];
  }

  public override render() {
    const { name, output } = this.props;
    const [color1, color2] = this.getColors(output);
    return (
      <Tile className="teammate">
        <div className="row">
          <Output id={name} progress={output} color1={color1} color2={color2} />
          <Stats name={name} color1={color1} color2={color2} />
        </div>
      </Tile>
    );
  }
}

const mSTP = ({ memberStats, totalLines }: ITeam, { name }: OwnProps) => {
  const stats = memberStats[name];
  return {
    output: Math.round((stats.lines * 100) / totalLines),
  };
};

interface OwnProps {
  name: string;
}

interface Props extends OwnProps {
  output: number;
}

export const Teammate = connectTeam(mSTP)(TeammateRenderer);
