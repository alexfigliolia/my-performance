import React, { Component } from "react";
import "./styles.scss";

export class LogoSmall extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <h1 className="logo-small">
        <span>my</span>Perf
      </h1>
    );
  }
}
