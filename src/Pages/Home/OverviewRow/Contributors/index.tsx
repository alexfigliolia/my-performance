import React, { memo, useRef } from "react";
import { BarGraph } from "Components/Graphs";
import { useOnMount } from "Hooks/useOnMount";
import { Team, useTeam } from "State/Team";
import CSSVars from "Styles/exports.module.scss";
import { Rainbow } from "Tools/Rainbow";
import type { PropLess } from "Types/React";

export const Contributors = memo(
  function Contributors(_: PropLess) {
    const margins = useRef({
      top: 10,
      left: 30,
      right: 0,
      bottom: 0,
    });
    const colors = useRef(Rainbow.gradientList("to bottom"));
    const height = useRef(parseInt(CSSVars.graphHeight.slice(0, -2)));
    const xData = useTeam(state => state.team.map(v => v.name));
    const yData = useTeam(state => state.team.map(v => v.lines));

    useOnMount(() => {
      void Team.highestContributors();
    });

    return (
      <BarGraph
        id="contributors"
        xData={xData}
        yData={yData}
        height={height.current}
        colors={colors.current}
        margins={margins.current}
      />
    );
  },
  () => true,
);
