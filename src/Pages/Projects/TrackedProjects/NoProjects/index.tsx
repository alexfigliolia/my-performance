import React, { Component } from "react";
import { CreatePie } from "Components/Art";
import "./styles.scss";

export class NoProjects extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="no-projects">
        <div className="art">
          <CreatePie />
        </div>
        <div className="text">
          <p>Welcome!</p>
          <p>
            To get started, select the repositories your team contributes to
            below
          </p>
        </div>
      </div>
    );
  }
}
