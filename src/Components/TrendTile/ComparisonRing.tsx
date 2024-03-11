import React, { memo } from "react";
import { ProgressRing } from "Components/Graphs";

export const ComparisonRing = memo(
  function ComparisonRing({ id, color1, color2, progress }: Props) {
    return (
      <ProgressRing progress={progress}>
        <linearGradient id={id} x1="1" x2="0" y1="0" y2="1">
          <stop stopColor={color1} offset="0" />
          <stop stopColor={color2} offset="1" />
        </linearGradient>
      </ProgressRing>
    );
  },
  (pp, np) => pp.progress === np.progress,
);

interface Props {
  id: string;
  color1: string;
  color2: string;
  progress: number;
}
