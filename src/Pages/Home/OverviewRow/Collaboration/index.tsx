import React, { Component } from "react";
import { ChordGraph } from "Components/Graphs";
import type { ITeam } from "Models/Team";
import { connectTeam } from "State/Team";
import "./styles.scss";

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
  return { mesh, team: team.map(t => t.name) };
};

export const Collaboration = connectTeam(mSTP)(CollaborationTile);
