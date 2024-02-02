import React, { Component, Fragment } from "react";
import { MyRecentWork } from "./MyRecentWork";
import { PersonalStats } from "./PersonalStats";
import { YourCollaborators } from "./YourCollaborators";

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
