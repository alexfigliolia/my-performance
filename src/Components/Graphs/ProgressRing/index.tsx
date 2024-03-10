import type { CSSProperties, ReactNode } from "react";
import React, { memo } from "react";
import { SVGCircle } from "Components/SVGCircle";
import { SVGRing } from "Components/SVGRing";
import "./styles.scss";

export const ProgressRing = memo(
  function ProgressRing({ progress, children, ringStyle }: Props) {
    const percentage = isNaN(progress) ? 0 : progress;
    return (
      <div className="progress">
        <SVGCircle />
        <SVGRing progress={percentage} style={ringStyle}>
          {children}
        </SVGRing>
        <span>{Math.round(percentage)}%</span>
      </div>
    );
  },
  (pp, np) => pp.progress === np.progress,
);

interface Props {
  progress: number;
  children?: ReactNode;
  ringStyle?: CSSProperties;
}
