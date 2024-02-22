import React, { Component } from "react";
import type { OptionalChildren } from "Types/React";

export class Check extends Component<OptionalChildren> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="check-icon"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z"
        />
        {this.props.children}
      </svg>
    );
  }
}
