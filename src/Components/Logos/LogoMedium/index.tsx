import React, { Component } from "react";
import "./styles.scss";

export class LogoMedium extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <h1 className="logo-medium">
        <span>my</span>Performance
      </h1>
    );
  }
}
