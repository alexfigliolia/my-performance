import React, { Component } from "react";
import { SearchBar } from "Components/SearchBar";

export class RepositorySearch extends Component<Props> {
  public override shouldComponentUpdate({ value }: Props) {
    return value !== this.props.value;
  }

  private onFocus = () => {
    this.props.setActive(true);
  };

  private onBlur = () => {
    this.props.setActive(false);
  };

  public override render() {
    const { onChange, value } = this.props;
    return (
      <SearchBar
        collapsible
        value={value}
        onChange={onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      />
    );
  }
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  setActive: (active: boolean) => void;
}
