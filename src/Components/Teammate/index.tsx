import React, { Component } from "react";
import { Tile } from "Components/Tile";
import { Edit } from "Icons/Edit";
import type { IPersonalProgress } from "State/Connections";
import { personalProgressConnection } from "State/Connections";
import { EditUser } from "State/EditUser";
import { Modals } from "State/Modals";
import { Output } from "./Output";
import { Stats } from "./Stats";
import "./styles.scss";

class TeammateRenderer extends Component<Props> {
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

  private edit = () => {
    EditUser.set("name", this.props.name);
    Modals.toggleEditUser();
  };

  public override render() {
    const { name, output, admin } = this.props;
    const [color1, color2] = this.getColors(output);
    return (
      <Tile className="teammate">
        {admin && (
          <button onClick={this.edit} className="edit-button">
            <Edit />
          </button>
        )}
        <div className="row">
          <Output id={name} progress={output} color1={color1} color2={color2} />
          <Stats name={name} color1={color1} color2={color2} />
        </div>
      </Tile>
    );
  }
}

const mSTP = (
  [{ role }, { memberStats, totalLines }]: IPersonalProgress,
  { name }: OwnProps,
) => {
  const stats = memberStats[name];
  return {
    admin: role === "admin",
    output: Math.round((stats.lines * 100) / totalLines),
  };
};

interface OwnProps {
  name: string;
}

interface Props extends OwnProps {
  admin: boolean;
  output: number;
}

export const Teammate = personalProgressConnection(mSTP)(TeammateRenderer);
