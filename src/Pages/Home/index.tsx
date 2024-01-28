import React, { Component, Fragment } from "react";
import { Header } from "Components/Header";
import type { PropLess } from "Tools/Types";
import { MobileMenu } from "Components/MobileMenu";
import { IndexScreen } from "Components/IndexScreen";
import { Greeting } from "Components/Greeting";
import { Tile } from "Components/Tile";
import { Contributors } from "./Contributors";
import { Collaboration } from "./Collaboration";
import "./styles.scss";

export default class Home extends Component<PropLess> {
  public override render() {
    return (
      <Fragment>
        <Header />
        <IndexScreen id="dashboard">
          <Greeting type="dashboard" />
          <div className="dashboard-content">
            <div className="row">
              <Tile heading="Contributors">
                <Contributors />
              </Tile>
              <Tile heading="Collaboration">
                <Collaboration />
              </Tile>
            </div>
          </div>
        </IndexScreen>
        <MobileMenu />
      </Fragment>
    );
  }
}
