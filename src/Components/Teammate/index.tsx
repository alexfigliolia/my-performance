import React, { memo, useMemo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { OverallStats } from "Models/Team";
import { useTeam } from "State/Team";
import { Controller } from "./Controller";
import { Output } from "./Output";
import { Stats } from "./Stats";
import "./styles.scss";

export const Teammate = memo(function Teammate({
  name,
  lines,
  commits,
  linesPerMonth,
}: OverallStats) {
  const totalLines = useTeam(state => state.totalLines);
  const output = useMemo(
    () => Math.floor((lines * 100) / totalLines),
    [lines, totalLines],
  );
  const [color1, color2] = Controller.getColors(output);
  const ID = useMemo(() => name.replaceAll(" ", ""), [name]);

  return (
    <ListItemTile className="teammate">
      <div className="row">
        <Output id={ID} color1={color1} color2={color2} progress={output} />
        <Stats
          id={ID}
          name={name}
          lines={lines}
          color1={color1}
          color2={color2}
          commits={commits}
          recentPullRequests={40}
          linesPerMonth={linesPerMonth}
        />
      </div>
    </ListItemTile>
  );
});
