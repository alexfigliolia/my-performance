import React, { Component, Fragment } from "react";
import { AddUser } from "Components/AddUser";
import { TeamSize } from "./TeamSize";
import "./styles.scss";

export class AdminProfile extends Component {
  public override render() {
    return (
      <Fragment>
        <div className="admin-row">
          <TeamSize />
        </div>
        <AddUser />
      </Fragment>
    );
  }
}
