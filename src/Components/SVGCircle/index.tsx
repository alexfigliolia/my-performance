import React, { Component } from "react";
import type { PropLess } from "Types/React";
import "./styles.scss";

export class Circle extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <svg
        pathLength="100"
        className="circle"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>
    );
  }
}
