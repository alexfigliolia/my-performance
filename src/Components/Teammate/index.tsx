import React, { Component } from "react";
import { ListItemTile } from "Components/Layouts";
import { Edit } from "Icons/Edit";
import type { ITeammateConnection } from "State/Connections";
import { teammateConnection } from "State/Connections";
import { EditUser } from "State/EditUser";
import { Modals } from "State/Modals";
import { Organizations } from "State/Organizations";
import { Output } from "./Output";
import { Stats } from "./Stats";
import "./styles.scss";

class TeammateRenderer extends Component<Props> {
  private ID = this.props.name.replaceAll(" ", "");

  public override shouldComponentUpdate() {
    return false;
  }

  private getColors(output: number) {
    if (output < 5) {
      return ["rgba(255, 122, 122, 1)", "rgba(255, 21, 126, 1)"];
    }
    if (output < 10) {
      return ["rgba(255, 220, 122, 1)", "rgba(255, 132, 0, 1)"];
    }
    return ["rgba(133, 255, 122, 1)", "rgba(23, 225, 191, 1)"];
  }

  private openEdit = () => {
    EditUser.set("name", this.props.name);
    Modals.openEditUser();
  };

  public override render() {
    const { name, output, admin } = this.props;
    const [color1, color2] = this.getColors(output);
    return (
      <ListItemTile className="teammate">
        {admin && (
          <button onClick={this.openEdit} className="edit-button">
            <Edit />
          </button>
        )}
        <div className="row">
          <Output
            id={this.ID}
            progress={output}
            color1={color1}
            color2={color2}
          />
          <Stats id={this.ID} name={name} color1={color1} color2={color2} />
        </div>
      </ListItemTile>
    );
  }
}

const mSTP = (
  [organizations, { memberStats, totalLines }]: ITeammateConnection,
  { name }: OwnProps,
) => {
  const stats = memberStats[name];
  return {
    output: Math.round((stats.lines * 100) / totalLines),
    admin: Organizations.selectRole(organizations) === "admin",
  };
};

interface OwnProps {
  name: string;
}

interface Props extends OwnProps {
  admin: boolean;
  output: number;
}

export const Teammate = teammateConnection(mSTP)(TeammateRenderer);
