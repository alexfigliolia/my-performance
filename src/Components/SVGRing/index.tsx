import type { CSSProperties, ReactNode } from "react";
import React, { memo } from "react";
import "./styles.scss";

export const SVGRing = memo(function SVGRing({
  style,
  children,
  progress = 100,
}: Props) {
  return (
    <svg
      className="progress-ring"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        r="50"
        style={{
          ...style,
          strokeDashoffset: 314 - (progress * 314) / 100,
        }}
      />
      {children}
    </svg>
  );
});

interface Props {
  progress?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
