import React, { Component } from "react";
import type { OptionalChildren } from "Types/React";

export class Right extends Component<OptionalChildren> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { children } = this.props;
    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.707,18.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L15.293,6.707a1,1,0,0,1,1.414-1.414l6,6a1,1,0,0,1,0,1.414Z" />
        {children}
      </svg>
    );
  }
}
