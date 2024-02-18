import React, { Component } from "react";
import "./styles.scss";

export class LogoLarge extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <h1 className="logo-large">
        <span>my</span>Performance
      </h1>
    );
  }
}
