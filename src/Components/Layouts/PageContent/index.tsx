import type { ReactNode } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class PageContent extends Component<Props> {
  public override render() {
    const { className = "", children } = this.props;
    return <div className={`page-content ${className}`}>{children}</div>;
  }
}

interface Props {
  className: string;
  children: ReactNode;
}
