import type { ReactNode } from "react";
import React from "react";
import "./styles.scss";

export function PageContent({ children, className = "" }: Props) {
  return <div className={`page-content ${className}`}>{children}</div>;
}

interface Props {
  className: string;
  children: ReactNode;
}
