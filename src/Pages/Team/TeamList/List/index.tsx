import React, { Component } from "react";
import { MasonryList } from "Components/Layouts";
import { Teammate } from "Components/Teammate";
import type { ITeam } from "Models/Team";
import { connectTeam } from "State/Team";

class ListRenderer extends Component<Props> {
  private renderItem = (person: string) => {
    return <Teammate key={person} name={person} />;
  };

  public override render() {
    const { team, search } = this.props;
    return (
      <MasonryList list={team} search={search} renderItem={this.renderItem} />
    );
  }
}

interface Props {
  team: string[];
  search: string;
}

const mSTP = ({ team, search }: ITeam) => {
  return { team, search };
};

export const List = connectTeam(mSTP)(ListRenderer);
