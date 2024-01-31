import React, { Component } from "react";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { Teammate } from "Components/Teammate";
import { SectionDescription } from "Components/SectionDescription";
import "./styles.scss";

export class TeamListRenderer extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="team-list">
        <SectionDescription
          title="Teammates"
          subtitle="Along with their recent stats"
        />
        <div className="list">
          {this.props.team.map(person => {
            return <Teammate key={person} name={person} />;
          })}
        </div>
      </div>
    );
  }
}

const mSTP = ({ team }: ITeam) => {
  return { team };
};

interface Props {
  team: string[];
}

export const TeamList = connectTeam(mSTP)(TeamListRenderer);
