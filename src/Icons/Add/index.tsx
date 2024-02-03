import React, { Component } from "react";
import type { OptionalChildren } from "Tools/Types";

export class Add extends Component<OptionalChildren> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        className="add-icon"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11,17V13H7a1,1,0,0,1,0-2h4V7a1,1,0,0,1,2,0v4h4a1,1,0,0,1,0,2H13v4a1,1,0,0,1-2,0Z" />
        {this.props.children}
      </svg>
    );
  }
}
