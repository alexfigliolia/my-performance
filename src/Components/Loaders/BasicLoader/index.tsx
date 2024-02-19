import React, { Component } from "react";
import type { OptionalChildren } from "Types/React";
import "./styles.scss";

export class BasicLoader extends Component<OptionalChildren> {
  override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="basic-loader">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle
            cx="50"
            cy="50"
            r="32"
            strokeWidth="8"
            strokeDasharray="50.26548245743669 50.26548245743669"
            fill="none"
            strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            />
          </circle>
          {this.props.children}
        </svg>
      </div>
    );
  }
}
