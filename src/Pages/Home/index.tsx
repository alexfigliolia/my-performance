import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import type { PropLess } from "Tools/Types";
import { OverviewRow } from "./OverviewRow";
import { RecentWork } from "./RecentWork";
import { Standouts } from "./Standouts";
import "./styles.scss";

export default class Home extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Greeting type="dashboard" />
        <div className="dashboard-content">
          <OverviewRow />
          <Standouts />
          <RecentWork />
        </div>
      </Fragment>
    );
  }
}
