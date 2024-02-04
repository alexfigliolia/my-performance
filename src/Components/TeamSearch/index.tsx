import type { ChangeEvent } from "react";
import React, { Component } from "react";
import { Search } from "Icons/Search";
import type { ITeam } from "Models/types";
import { connectTeam, Team } from "State/Team";
import "./styles.scss";

export class TeamSearchRenderer extends Component<Props, State> {
  private node?: HTMLInputElement;
  public state: State = { focused: false };

  public override componentDidMount() {
    if (this.props.value) {
      this.onFocus();
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
    if (!this.props.value) {
      this.setState({ focused: false });
      this.props.onBlur?.();
    }
  };

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    Team.search(value);
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
        onFocus={this.onFocus}
        className={`team-search ${focused ? "focus" : ""}`}>
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

const mSTP = ({ search }: ITeam) => {
  return { value: search };
};

interface Props {
  value: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: (value: string) => void;
}

interface State {
  focused: boolean;
}

export const TeamSearch = connectTeam(mSTP)(TeamSearchRenderer);
