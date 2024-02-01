import type { ReactNode } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class Left extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { children } = this.props;
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className="left-arrow"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
        {children}
      </svg>
    );
  }
}

interface Props {
  children: ReactNode;
}
