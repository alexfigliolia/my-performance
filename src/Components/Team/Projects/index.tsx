import React, { memo, useRef } from "react";
import { ProgressRing } from "Components/Graphs";
import { useProjects } from "State/Projects";
import { Controller } from "../Controller";
import "./styles.scss";

export const Projects = memo(
  function Projects({ id, total }: Props) {
    const gradientID = useRef(`${id}Projects`);
    const [color1, color2] = Controller.getColors(total);
    const orgProjects = useProjects(state => state.totalProjects);

    return (
      <ProgressRing
        progress={(total * 100) / orgProjects}
        ringStyle={{ "--progress-stroke": `url(#${gradientID.current})` }}>
        <linearGradient id={gradientID.current} x1="1" x2="0" y1="0" y2="1">
          <stop stopColor={color1} offset="0" />
          <stop stopColor={color2} offset="1" />
        </linearGradient>
      </ProgressRing>
    );
  },
  (pp, np) => pp.total === np.total,
);

interface Props {
  id: string;
  total: number;
}
