import type { ReactNode } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class IndexScreen extends Component<Props> {
  public override render() {
    const { id, children } = this.props;
    return (
      <main className="index-screen" id={id}>
        <div>{children}</div>
      </main>
    );
  }
}

interface Props {
  id: string;
  children: ReactNode;
}
