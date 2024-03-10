import React, { Component } from "react";
import { Down } from "Icons/Down";
import { Up } from "Icons/Up";
import { Numbers } from "Tools/Numbers";
import { ComparisonRing } from "../ComparisonRing";
import "./styles.scss";

export class TrendTile extends Component<Props> {
  private icon(trend: number) {
    if (trend >= 0) {
      return <Up />;
    }
    return <Down />;
  }

  public override render() {
    const { id, type, contributed, color1, color2, trend, total, progress } =
      this.props;
    return (
      <div className={`trend-tile ${type}`}>
        <div className="stats">
          <div className="trend">
            {this.icon(trend)}
            <div className="wow">
              <span>{Math.round(trend)}%</span>
              <span>Week over Week</span>
            </div>
          </div>
          <ComparisonRing
            id={id}
            progress={progress}
            color1={color1}
            color2={color2}
          />
        </div>
        <div className="description">
          {Numbers.format(contributed)} of out {Numbers.format(total)} {type}
        </div>
      </div>
    );
  }
}

interface Props {
  id: string;
  type: string;
  total: number;
  trend: number;
  color1: string;
  color2: string;
  progress: number;
  contributed: number;
}
