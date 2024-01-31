import React, { Component, Fragment } from "react";
import { LineGraph } from "Components/LineGraph";
import type { IPersonalProgress } from "State/Connections";
import { personalProgressConnection } from "State/Connections";
import CSSVars from "Styles/exports.module.scss";
import { Dates } from "Tools/Dates";
import type { LineDatum } from "Tools/Types";
import { Tile } from "Components/Tile";
import { Rank } from "Components/Rank";
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
        <Fragment>
          <Rank rank={1} />
          <LineGraph
            height={200}
            data={this.data}
            id="personalStats"
            stroke="url(#personalStatsGradient)"
            margins={{ left: 25 }}>
            <defs>
              <linearGradient id="personalStatsGradient">
                <stop offset="0%" stopColor={CSSVars.teal} />
                <stop offset="100%" stopColor={CSSVars.lightPurple} />
              </linearGradient>
            </defs>
          </LineGraph>
        </Fragment>
      </Tile>
    );
  }
}

const mSTP = ([{ memberName }, { memberStats }]: IPersonalProgress) => {
  return { linesPerMonth: memberStats[memberName].linesPerMonth };
};

interface Props {
  linesPerMonth: number[];
}

export const PersonalStats = personalProgressConnection(mSTP)(
  PersonalStatsRenderer,
);
