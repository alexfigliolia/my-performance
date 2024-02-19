import React, { Component } from "react";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";

export class RepositoryList extends Component<PropLess, State> {
  public state: State = {
    search: "",
  };

  public override shouldComponentUpdate(_: PropLess, nextState: State) {
    return nextState !== this.state;
  }

  private onChange = (search: string) => {
    this.setState({ search });
  };

  public override render() {
    const { search } = this.state;
    return (
      <PageContent className="repository-list">
        <SectionTitle search={search} onChange={this.onChange} />
        <List search={search} />
      </PageContent>
    );
  }
}

interface State {
  search: string;
}
