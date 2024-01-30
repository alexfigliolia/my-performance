import React, { Component, Fragment } from "react";
import type { PropLess } from "Tools/Types";
import { Greeting } from "Components/Greeting";
import { Comparison } from "./Comparison";
import "./styles.scss";

export default class Team extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Greeting type="team" />
        <div className="team-content">
          <Comparison />
        </div>
      </Fragment>
    );
  }
}
