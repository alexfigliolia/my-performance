import React, { Component } from "react";
import { SVGGradient } from "Components/Gradients";
import { LineGraph } from "Components/Graphs";
import { Tile } from "Components/Layouts";
import { Rank } from "Components/Rank";
import type { IPersonalProgress } from "State/Connections";
import { personalProgressConnection } from "State/Connections";
import CSSVars from "Styles/exports.module.scss";
import { Dates } from "Tools/Dates";
import type { LineDatum } from "Types/Graphs";
import "./styles.scss";

class PersonalStatsRenderer extends Component<Props> {
  private data: LineDatum[];
  private static LAST_12_MONTHS = Dates.last12Months();
  constructor(props: Props) {
    super(props);
    const { linesPerMonth } = this.props;
    this.data = PersonalStatsRenderer.LAST_12_MONTHS.map((date, i) => ({
      date,
      value: linesPerMonth[i],
    }));
  }

  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Tile
        heading="Personal Stats"
        className="personal-stats"
        subheading="Your line contributions per month">
        <Rank rank={1} />
        <LineGraph
          height={200}
          data={this.data}
          id="personalStats"
          stroke="url(#personalStatsGradient)"
          margins={{ left: 25 }}>
          <SVGGradient
            color1={CSSVars.teal}
            id="personalStatsGradient"
            color2={CSSVars.lightPurple}
          />
        </LineGraph>
      </Tile>
    );
  }
}

const mSTP = ([{ name }, { memberStats }]: IPersonalProgress) => {
  return { linesPerMonth: memberStats[name].linesPerMonth };
};

interface Props {
  linesPerMonth: number[];
}

export const PersonalStats = personalProgressConnection(mSTP)(
  PersonalStatsRenderer,
);
