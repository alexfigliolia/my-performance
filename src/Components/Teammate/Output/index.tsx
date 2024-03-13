import React, { memo, useMemo } from "react";
import { ProgressRing } from "Components/Graphs";
import "./styles.scss";

export const Output = memo(function Output({
  id,
  color1,
  color2,
  progress,
}: Props) {
  const gradientID = useMemo(() => `${id}Output`, [id]);
  return (
    <ProgressRing
      progress={progress}
      ringStyle={{ "--progress-stroke": `url(#${gradientID})` }}>
      <linearGradient id={gradientID} x1="1" x2="0" y1="0" y2="1">
        <stop stopColor={color1} offset="0" />
        <stop stopColor={color2} offset="1" />
      </linearGradient>
    </ProgressRing>
  );
});

interface Props {
  id: string;
  color1: string;
  color2: string;
  progress: number;
}
