import React, { Component } from "react";
import { SectionDescription } from "Components/SectionDescription";
import { TeamSearch } from "Components/TeamSearch";
import { Add } from "Icons/Add";
import { Modals } from "State/Modals";
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

  private toggleAddScreen = () => {
    Modals.toggleUserCreation();
  };

  public override render() {
    const { searching } = this.state;
    return (
      <div className={`team-section-title ${searching ? "searching" : ""}`}>
        <SectionDescription
          title="Teammates"
          subtitle="Along with their recent stats"
        />
        <div className="actions">
          <button
            className="add-engineer"
            aria-label="Add Engineer"
            onClick={this.toggleAddScreen}>
            <Add />
          </button>
          <TeamSearch
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

interface State {
  searching: boolean;
}
