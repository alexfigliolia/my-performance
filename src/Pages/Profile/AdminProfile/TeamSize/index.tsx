import React, { Component } from "react";
import { Tile } from "Components/Tile";
import { connectTeam } from "State/Team";
import type { ITeam } from "Models/types";
import "./styles.scss";
import { Modals } from "State/Modals";

export class TeamSizeRenderer extends Component<Props> {
  public override shouldComponentUpdate({ total }: Props) {
    return total !== this.props.total;
  }

  private openPanel = () => {
    Modals.toggleUserCreation();
  };

  public override render() {
    const { total } = this.props;
    return (
      <Tile className="team-size" heading="Team Size">
        <div className="size-content">
          <div className="size">
            <span>{total}</span>
          </div>
          <button onClick={this.openPanel} className="add-member">
            New Teammate
          </button>
        </div>
      </Tile>
    );
  }
}

const mSTP = ({ team }: ITeam) => {
  return { total: team.length };
};

interface Props {
  total: number;
}

export const TeamSize = connectTeam(mSTP)(TeamSizeRenderer);
