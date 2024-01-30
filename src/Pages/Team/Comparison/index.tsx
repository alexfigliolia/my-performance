import React, { Component } from "react";
import { Tile } from "Components/Tile";
import { LineComparison } from "./LineComparison";
import { CommitComparison } from "./CommitComparison";
import "./styles.scss";

export class Comparison extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="comparison-row">
        <Tile heading="Team Code">
          <LineComparison />
        </Tile>
        <Tile heading="Team Commits">
          <CommitComparison />
        </Tile>
      </div>
    );
  }
}
