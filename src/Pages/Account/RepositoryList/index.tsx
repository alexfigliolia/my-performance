import React, { Component } from "react";
import type { PropLess } from "Tools/Types";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";
import "./styles.scss";

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
      <div className="repository-list">
        <SectionTitle search={search} onChange={this.onChange} />
        <List search={search} />
      </div>
    );
  }
}

interface State {
  search: string;
}
