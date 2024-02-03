import React, { Component, Fragment } from "react";
import { AddUser } from "Components/AddUser";
import { EditUser } from "Components/EditUser";
import { Greeting } from "Components/Greeting";
import type { PropLess } from "Tools/Types";
import { Comparison } from "./Comparison";
import { TeamList } from "./TeamList";
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
          <TeamList />
        </div>
        <AddUser />
        <EditUser />
      </Fragment>
    );
  }
}
