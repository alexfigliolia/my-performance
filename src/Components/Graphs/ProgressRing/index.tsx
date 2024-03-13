import type { CSSProperties, ReactNode } from "react";
import React, { memo, useMemo } from "react";
import { SVGCircle } from "Components/SVGCircle";
import { SVGRing } from "Components/SVGRing";
import "./styles.scss";

export const ProgressRing = memo(
  function ProgressRing({ progress, children, ringStyle, textFN }: Props) {
    const percentage = useMemo(
      () => (isNaN(progress) ? 0 : progress === Infinity ? 100 : progress),
      [progress],
    );
    return (
      <div className="progress">
        <SVGCircle />
        <SVGRing progress={percentage} style={ringStyle}>
          {children}
        </SVGRing>
        {textFN ? textFN(percentage) : <span>{Math.round(percentage)}%</span>}
      </div>
    );
  },
  (pp, np) => pp.progress === np.progress,
);

interface Props {
  progress: number;
  children?: ReactNode;
  ringStyle?: CSSProperties;
  textFN?: (percentage: number) => ReactNode;
}
