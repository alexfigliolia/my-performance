import React, { Component, Fragment } from "react";
import { Header } from "Components/Header";
import type { PropLess } from "Tools/Types";
import { MobileMenu } from "Components/MobileMenu";
import { IndexScreen } from "Components/IndexScreen";
import { Greeting } from "Components/Greeting";
import { Tile } from "Components/Tile";
import { Contributors } from "./Contributors";
import { Collaboration } from "./Collaboration";
import { RecentWork } from "./RecentWork";
import "./styles.scss";

export default class Home extends Component<PropLess> {
  public override render() {
    return (
      <Fragment>
        <Header />
        <IndexScreen id="dashboard">
          <Greeting type="dashboard" />
          <div className="dashboard-content">
            <div className="row overview">
              <Tile
                heading="Contributors"
                subheading="Here you'll find your highest contributors by lines of code">
                <Contributors />
              </Tile>
              <Tile
                heading="Collaboration"
                subheading="Here you'll find which engineers collaborate with one another">
                <Collaboration />
              </Tile>
            </div>
            <div className="row work">
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
