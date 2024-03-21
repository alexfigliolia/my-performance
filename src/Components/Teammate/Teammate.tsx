import React, { memo, useCallback, useMemo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { TeammateCollaborator } from "GQL/Types";
import { Navigation } from "State/Navigation";
import { Controller } from "./Controller";
import { Output } from "./Output";
import { Stats } from "./Stats";
import "./styles.scss";

export const Teammate = memo(function Teammate({
  id,
  name,
  lines,
  commits,
  totalLines,
  pullRequests,
  linesPerMonth,
}: Omit<TeammateCollaborator, "__typename">) {
  const output = useMemo(
    () => Math.floor((lines * 100) / totalLines),
    [lines, totalLines],
  );
  const [color1, color2] = Controller.getColors(output);
  const ID = useMemo(() => name.replaceAll(" ", ""), [name]);

  const navigate = useCallback(() => {
    void Navigation.navigate(`/teammate/${id}`);
  }, [id]);

  return (
    <ListItemTile
      role="link"
      tabIndex={0}
      onClick={navigate}
      className="teammate">
      <div className="row">
        <Output id={ID} color1={color1} color2={color2} progress={output} />
        <Stats
          id={ID}
          name={name}
          lines={lines}
          color1={color1}
          color2={color2}
          commits={commits}
          pullRequests={pullRequests}
          linesPerMonth={linesPerMonth}
        />
      </div>
    </ListItemTile>
  );
});
