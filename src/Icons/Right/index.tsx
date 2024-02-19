import type { CSSProperties } from "react";
import React, { Component } from "react";
import type { OptionalChildren } from "Types/React";

export class Right extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { children, pathStyle } = this.props;
    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          style={pathStyle}
          d="M16.707,18.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L15.293,6.707a1,1,0,0,1,1.414-1.414l6,6a1,1,0,0,1,0,1.414Z"
        />
        {children}
      </svg>
    );
  }
}

interface Props extends OptionalChildren {
  pathStyle?: CSSProperties;
}
