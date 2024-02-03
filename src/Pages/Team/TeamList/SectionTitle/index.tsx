import React, { Component } from "react";
import { SectionDescription } from "Components/SectionDescription";
import { TeamSearch } from "Components/TeamSearch";
import { Team } from "State/Team";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export class SectionTitle extends Component<PropLess, State> {
  public state: State = { searching: false };

  private onFocus = () => {
    this.setState({ searching: true });
  };

  private onBlur = () => {
    this.setState({ searching: false });
  };

  private onChange(value: string) {
    Team.search(value);
  }

  public override render() {
    const { searching } = this.state;
    return (
      <div className={`team-section-title ${searching ? "searching" : ""}`}>
        <SectionDescription
          title="Teammates"
          subtitle="Along with their recent stats"
        />
        <TeamSearch
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

interface State {
  searching: boolean;
}
