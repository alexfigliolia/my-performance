import React, { Component } from "react";
import { SearchBar } from "Components/SearchBar";
import type { ITeam } from "Models/Team";
import { connectTeam, Team } from "State/Team";

class TeamSearchRenderer extends Component<Props> {
  public override shouldComponentUpdate({ search }: Props) {
    return search !== this.props.search;
  }

  private onFocus = () => {
    this.props.setActive(true);
  };

  private onBlur = () => {
    this.props.setActive(false);
  };

  private onChange = (value: string) => {
    Team.search(value);
  };

  public override render() {
    return (
      <SearchBar
        collapsible
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onChange={this.onChange}
        value={this.props.search}
      />
    );
  }
}

interface Props {
  search: string;
  setActive: (active: boolean) => void;
}

const mSTP = ({ search }: ITeam) => {
  return { search };
};

export const TeamSearch = connectTeam(mSTP)(TeamSearchRenderer);
