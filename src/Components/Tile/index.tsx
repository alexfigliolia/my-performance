import type { ReactNode } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class Tile extends Component<Props> {
  public override render() {
    const {
      nodeRef,
      heading,
      children,
      subheading,
      className = "",
    } = this.props;
    return (
      <div className={`tile ${className}`} ref={nodeRef}>
        <div>
          {heading && <span className="t-heading">{heading}</span>}
          {subheading && <span className="t-subheading">{subheading}</span>}
          {children}
        </div>
      </div>
    );
  }
}

interface Props {
  heading?: string;
  subheading?: string;
  children: ReactNode;
  className?: string;
  nodeRef?: (node: HTMLDivElement) => void;
}
