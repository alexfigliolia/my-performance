import React, { Component } from "react";
import { Tile } from "Components/Layouts";
import { Down } from "Icons/Down";
import { Up } from "Icons/Up";
import type { IStandout } from "Models/Team";
import "./styles.scss";

export class Standout extends Component<Omit<IStandout, "id">> {
  private getClass(delta: number) {
    if (delta < 0) {
      return "red";
    }
    if (delta < 10) {
      return "orange";
    }
    return "blue";
  }

  private getIndicator(delta: number) {
    if (delta > 0) {
      return <Up />;
    }
    return <Down />;
  }

  public override render() {
    const { name, increase, lines } = this.props;
    return (
      <Tile heading={name}>
        <div className="standout">
          <div className="lines">
            <span className={`indicator ${this.getClass(increase)}`} />
            <svg className="total" viewBox="0 0 56 18">
              <text x="0" y="15">
                {lines}
              </text>
            </svg>
          </div>
          <div className="delta">
            {this.getIndicator(increase)}
            <svg className="total" viewBox="0 0 56 18">
              <text x="100%" y="15" textAnchor="end">
                {increase > 0 ? "+" : ""}
                {increase}%
              </text>
            </svg>
          </div>
        </div>
      </Tile>
    );
  }
}
