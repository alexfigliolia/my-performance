import React, { Component } from "react";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";
import "./styles.scss";

export class TeamListRenderer extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="team-list">
        <SectionTitle />
        <List />
      </div>
    );
  }
}

const mSTP = ({ team, search }: ITeam) => {
  return { team, search };
};

interface Props {
  search: string;
  team: string[];
}

export const TeamList = connectTeam(mSTP)(TeamListRenderer);
