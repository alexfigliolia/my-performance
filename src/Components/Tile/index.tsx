import type { ReactNode } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class Tile extends Component<Props> {
  public override render() {
    const { heading, children } = this.props;
    return (
      <div className="tile">
        <div>
          {heading && <span className="t-heading">{heading}</span>}
          {children}
        </div>
      </div>
    );
  }
}

interface Props {
  heading?: string;
  children: ReactNode;
}
