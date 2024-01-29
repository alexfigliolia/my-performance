import React, { Component, Fragment } from "react";
import { Header } from "Components/Header";
import type { PropLess } from "Tools/Types";
import { MobileMenu } from "Components/MobileMenu";
import { IndexScreen } from "Components/IndexScreen";
import { Greeting } from "Components/Greeting";
import { Tile } from "Components/Tile";
import { SectionDescription } from "Components/SectionDescription";
import { RecentWork } from "./RecentWork";
import { Standouts } from "./Standouts";
import { OverviewRow } from "./OverviewRow";
import "./styles.scss";

export default class Home extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Header />
        <IndexScreen id="dashboard">
          <Greeting type="dashboard" />
          <div className="dashboard-content">
            <OverviewRow />
            <Standouts />
            <div className="row work">
              <SectionDescription title="Recent Work" subtitle="" />
              <Tile>
                <RecentWork />
              </Tile>
            </div>
          </div>
        </IndexScreen>
        <MobileMenu />
      </Fragment>
    );
  }
}
