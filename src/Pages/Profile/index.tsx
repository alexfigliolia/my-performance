import { Greeting } from "Components/Greeting";
import React, { Component, Fragment } from "react";
import { PersonalStats } from "./PersonalStats";
import { YourCollaborators } from "./YourCollaborators";
import { MyRecentWork } from "./MyRecentWork";
import "./styles.scss";

export default class Profile extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Greeting type="profile" />
        <div className="profile-content">
          <PersonalStats />
          <YourCollaborators />
          <MyRecentWork />
        </div>
      </Fragment>
    );
  }
}
