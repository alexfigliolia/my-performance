import React, { Component, Fragment } from "react";
import { TeamSize } from "./TeamSize";
import { AddUser } from "./AddUser";
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
