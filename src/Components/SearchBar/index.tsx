import type { ChangeEvent } from "react";
import React, { Component } from "react";
import { Search } from "Icons/Search";
import "./styles.scss";

export class SearchBar extends Component<Props, State> {
  private node?: HTMLInputElement;
  public state: State = { focused: !!this.props.value };

  public override componentDidMount() {
    if (this.state.focused) {
      this.node?.focus();
      this.props.onFocus?.();
    }
  }

  public override shouldComponentUpdate({ value }: Props, { focused }: State) {
    if (value !== this.props.value) return true;
    return focused !== this.state.focused;
  }

  private onFocus = () => {
    this.setState({ focused: true });
    if (this.node) {
      this.node.focus();
    }
    this.props.onFocus?.();
  };

  private onBlur = () => {
    const { value, onBlur } = this.props;
    if (!value) {
      this.setState({ focused: false });
      onBlur?.();
    }
  };

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.props.onChange?.(value);
  };

  private cache = (node: HTMLInputElement) => {
    this.node = node;
  };

  public override render() {
    const { focused } = this.state;
    const { collapsible } = this.props;
    return (
      <button
        disabled={focused}
        onClick={this.onFocus}
        onFocus={this.onFocus}
        className={`search-bar ${focused || !collapsible ? "focus" : ""}`}>
        <Search />
        <input
          type="search"
          ref={this.cache}
          placeholder="Search"
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
          value={this.props.value}
        />
      </button>
    );
  }
}

interface Props {
  value: string;
  onBlur?: () => void;
  onFocus?: () => void;
  collapsible?: boolean;
  onChange?: (value: string) => void;
}

interface State {
  focused: boolean;
}
