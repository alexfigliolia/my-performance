import React, { memo, useRef } from "react";
import { ProgressRing } from "Components/Graphs";
import { useTeams } from "State/Teams";
import { Controller } from "../Controller";
import "./styles.scss";

export const Projects = memo(
  function Projects({ id, total }: Props) {
    const gradientID = useRef(`${id}Projects`);
    const [color1, color2] = Controller.getColors(total);
    const totalProjects = useTeams(state => state.totalProjects);
    return (
      <ProgressRing
        progress={(total * 100) / totalProjects}
        ringStyle={{
          "--progress-stroke": Controller.toGradientURL(gradientID.current),
        }}
        textFN={percentage => (
          <div className="description">
            <span>{Math.round(percentage)}%</span>
            <span>of projects</span>
          </div>
        )}>
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
