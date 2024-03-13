import React, { Component } from "react";
import { CreatePie } from "Components/Art";
import "./styles.scss";

export class Instructions extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="select-project-instructions">
        <div className="art">
          <CreatePie />
        </div>
        <div className="text">
          <p>
            To track contributions, select the repositories your team
            contributes to below
          </p>
        </div>
      </div>
    );
  }
}
