import React, { Component } from "react";
import { SectionDescription } from "Components/SectionDescription";
import { RepositorySearch } from "./RepositorySearch";
import "./styles.scss";

export class SectionTitle extends Component<Props, State> {
  public state: State = { searching: !!this.props.search };

  public override shouldComponentUpdate(
    { search }: Props,
    { searching }: State,
  ) {
    if (search !== this.props.search) return true;
    return searching !== this.state.searching;
  }

  private setActive = (searching: boolean) => {
    this.setState({ searching });
  };

  public override render() {
    const { searching } = this.state;
    const { search, onChange } = this.props;
    return (
      <div
        className={`repository-section-title ${searching ? "searching" : ""}`}>
        <SectionDescription
          title="Repositories"
          subtitle="Along with their tracked status"
        />
        <RepositorySearch
          value={search}
          onChange={onChange}
          setActive={this.setActive}
        />
      </div>
    );
  }
}

interface Props {
  search: string;
  onChange: (value: string) => void;
}

interface State {
  searching: boolean;
}
