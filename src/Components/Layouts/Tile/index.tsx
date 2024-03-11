import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import "./styles.scss";

export function Tile({
  nodeRef,
  heading,
  children,
  subheading,
  className = "",
  ...rest
}: Props) {
  return (
    <div className={`tile ${className}`} ref={nodeRef} {...rest}>
      <div>
        {heading && <span className="t-heading">{heading}</span>}
        {subheading && <span className="t-subheading">{subheading}</span>}
        {children}
      </div>
    </div>
  );
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  subheading?: ReactNode;
  children: ReactNode;
  className?: string;
  nodeRef?: (node: HTMLDivElement) => void;
}
