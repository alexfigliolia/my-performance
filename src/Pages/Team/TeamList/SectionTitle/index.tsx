import React, { Component } from "react";
import { SectionDescription } from "Components/SectionDescription";
import { Add } from "Icons/Add";
import { Modals } from "State/Modals";
import { Team } from "State/Team";
import type { PropLess } from "Types/React";
import { TeamSearch } from "./TeamSearch";
import "./styles.scss";

export class SectionTitle extends Component<PropLess, State> {
  public state: State = { searching: !!Team.getState().search };

  private setActive = (searching: boolean) => {
    this.setState({ searching });
  };

  private openCreateUser = () => {
    Modals.openCreateUser();
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
            onClick={this.openCreateUser}>
            <Add />
          </button>
          <TeamSearch setActive={this.setActive} />
        </div>
      </div>
    );
  }
}

interface State {
  searching: boolean;
}
