import type { ReactNode } from "react";
import React, { Component } from "react";
import { Tile } from "Components/Tile";
import "./styles.scss";

export class ListItemTile extends Component<Props> {
  public override render() {
    const { children, className } = this.props;
    return <Tile className={`list-item-tile ${className}`}>{children}</Tile>;
  }
}

interface Props {
  className: string;
  children: ReactNode;
}
