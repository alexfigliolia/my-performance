import React, { memo } from "react";
import { ListItemTile } from "Components/Layouts";
import { Edit } from "Icons/Edit";
import { Organizations, useOrganizations } from "State/Organizations";
import { useTeam } from "State/Team";
import { Controller } from "./Controller";
import { Output } from "./Output";
import { Stats } from "./Stats";
import "./styles.scss";

export const Teammate = memo(
  function Teammate({ lines, name }: Props) {
    const admin = useOrganizations(
      state => Organizations.selectRole(state) === "admin",
    );
    const output = useTeam(state =>
      Math.round((lines * 100) / state.totalLines),
    );

    const [color1, color2] = Controller.getColors(output);
    const ID = name.replaceAll(" ", "");

    return (
      <ListItemTile className="teammate">
        {admin && (
          <button onClick={Controller.openEdit(name)} className="edit-button">
            <Edit />
          </button>
        )}
        <div className="row">
          <Output id={ID} color1={color1} color2={color2} progress={output} />
          <Stats id={ID} name={name} color1={color1} color2={color2} />
        </div>
      </ListItemTile>
    );
  },
  (pp, np) => {
    if (pp.lines !== np.lines) return false;
    return pp.name === np.name;
  },
);

interface Props {
  name: string;
  lines: number;
}
