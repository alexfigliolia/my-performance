import React, { Component } from "react";
import { Tile } from "Components/Tile";
import type { IStandout } from "Tools/Types";
import { Up } from "Icons/Up";
import { Down } from "Icons/Down";
import "./styles.scss";

export class Standout extends Component<IStandout> {
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
    const { author, delta, lines } = this.props;
    return (
      <Tile heading={author}>
        <div className="standout">
          <div className="lines">
            <span className={`indicator ${this.getClass(delta)}`} />
            <span className="total">{lines}</span>
          </div>
          <div className="delta">
            {this.getIndicator(delta)}
            <span className="total">
              {delta > 0 ? "+" : ""}
              {delta}%
            </span>
          </div>
        </div>
      </Tile>
    );
  }
}
