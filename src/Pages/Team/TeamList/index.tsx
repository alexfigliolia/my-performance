import React, { Component } from "react";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";

export class TeamList extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <PageContent className="team-list">
        <SectionTitle />
        <List />
      </PageContent>
    );
  }
}
