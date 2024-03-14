import type { CSSProperties, ReactNode } from "react";
import React, { memo, useMemo } from "react";
import { SVGCircle } from "Components/SVGCircle";
import { SVGRing } from "Components/SVGRing";
import { useAnimatedTrigger } from "Hooks/useAnimatedTrigger";
import "./styles.scss";

export const ProgressRing = memo(
  function ProgressRing({
    textFN,
    animate,
    progress,
    children,
    ringStyle,
  }: Props) {
    const percentage = useMemo(
      () => (isNaN(progress) ? 0 : progress === Infinity ? 100 : progress),
      [progress],
    );
    const value = useAnimatedTrigger(animate ? 0 : percentage, percentage);
    return (
      <div className="progress">
        <SVGCircle />
        <SVGRing progress={value} style={ringStyle}>
          {children}
        </SVGRing>
        {textFN ? (
          <div>{textFN(percentage)}</div>
        ) : (
          <span>{Math.round(percentage)}%</span>
        )}
      </div>
    );
  },
  (pp, np) => pp.progress === np.progress,
);

interface Props {
  progress: number;
  animate?: boolean;
  children?: ReactNode;
  ringStyle?: CSSProperties;
  textFN?: (percentage: number) => ReactNode;
}
