import React, { Component, Fragment } from "react";
import { PersonalStats } from "./PersonalStats";
import { YourCollaborators } from "./YourCollaborators";
import { MyRecentWork } from "./MyRecentWork";

export class UserProfile extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <PersonalStats />
        <YourCollaborators />
        <MyRecentWork />
      </Fragment>
    );
  }
}
