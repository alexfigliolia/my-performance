import type { ChangeEvent } from "react";
import React, { Component } from "react";
import { Search } from "Icons/Search";
import "./styles.scss";

export class TeamSearch extends Component<Props, State> {
  private node?: HTMLInputElement;
  public state: State = { focused: false, value: "" };

  public override shouldComponentUpdate(_: Props, nextState: State) {
    return nextState !== this.state;
  }

  private onFocus = () => {
    this.setState({ focused: true });
    if (this.node) {
      this.node.focus();
    }
    this.props.onFocus?.();
  };

  private onBlur = () => {
    this.setState({ focused: false });
    this.props.onBlur?.();
  };

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ value });
    this.props.onChange?.(value);
  };

  private cache = (node: HTMLInputElement) => {
    this.node = node;
  };

  public override render() {
    const { focused } = this.state;
    return (
      <button
        disabled={focused}
        onClick={this.onFocus}
        className={`team-search ${focused ? "focus" : ""}`}>
        <Search />
        <input
          type="search"
          ref={this.cache}
          placeholder="Search"
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      </button>
    );
  }
}

interface Props {
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: (value: string) => void;
}

interface State {
  value: string;
  focused: boolean;
}
