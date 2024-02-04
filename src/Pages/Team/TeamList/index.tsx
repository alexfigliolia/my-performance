import React, { Component } from "react";
import type { PropLess } from "Tools/Types";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";
import "./styles.scss";

export class TeamList extends Component<PropLess> {
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
