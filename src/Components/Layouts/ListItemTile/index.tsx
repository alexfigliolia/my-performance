import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import type { Props as TileProps } from "Components/Layouts/Tile";
import { Tile } from "Components/Layouts/Tile";
import "./styles.scss";

export function ListItemTile({ children, className = "", ...rest }: Props) {
  return (
    <Tile className={`list-item-tile ${className}`} {...rest}>
      {children}
    </Tile>
  );
}

interface Props extends HTMLAttributes<HTMLDivElement>, TileProps {
  className?: string;
  children: ReactNode;
}
