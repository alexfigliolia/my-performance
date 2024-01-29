import React, { Component } from "react";
import { ChordGraph } from "Components/ChordGraph";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";

class CollaborationTile extends Component<Props> {
  public override shouldComponentUpdate(nextProps: Props) {
    return nextProps !== this.props;
  }

  public override render() {
    const { team, mesh } = this.props;
    return <ChordGraph id="collaboration" labels={team} data={mesh} />;
  }
}

interface Props {
  team: string[];
  mesh: number[][];
}

const mSTP = ({ mesh, team }: ITeam) => {
  return { mesh, team };
};

export const Collaboration = connectTeam(mSTP)(CollaborationTile);
