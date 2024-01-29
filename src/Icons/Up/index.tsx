import React, { Component } from "react";

export class Up extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M17.77,8.36,13.54,3.28a2.08,2.08,0,0,0-3.08,0L6.23,8.36A1,1,0,0,0,7,10H9V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10h2a1,1,0,0,0,.77-1.64Z" />
      </svg>
    );
  }
}
