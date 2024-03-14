import React, { Fragment, memo, useMemo, useRef } from "react";
import { ProgressRing } from "Components/Graphs";
import { useTeams } from "State/Teams";
import { Controller } from "../Controller";
import "./styles.scss";

export const Projects = memo(
  function Projects({ id, total }: Props) {
    const gradientID = useRef(`${id}Projects`);
    const totalProjects = useTeams(state => state.totalProjects);
    const progress = useMemo(
      () => (total * 100) / totalProjects,
      [total, totalProjects],
    );
    const [color1, color2] = Controller.getColors(progress);
    return (
      <ProgressRing
        animate
        progress={progress}
        ringStyle={{
          "--progress-stroke": Controller.toGradientURL(gradientID.current),
        }}
        textFN={percentage => (
          <Fragment>
            <span>{Math.round(percentage)}%</span>
            <span>of projects</span>
          </Fragment>
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
