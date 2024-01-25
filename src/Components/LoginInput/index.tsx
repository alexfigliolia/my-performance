import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class LoginInput extends Component<Props, State> {
  private input?: HTMLInputElement;
  public state: State = { focused: !!this.props.value };
  public static defaultProps = {
    value: "",
    type: "text",
  };

  public override componentDidMount() {
    if (this.input) {
      const { name, value, autofocus, onChange } = this.props;
      if (this.input.value !== value) {
        // @ts-ignore
        onChange({ target: { name, value: this.input.value } });
      }
      if (autofocus) {
        this.input.focus();
      }
    }
  }

  public override shouldComponentUpdate({ value }: Props, { focused }: State) {
    if (value !== this.props.value) return true;
    if (focused !== this.state.focused) return true;
    return false;
  }

  public override componentDidUpdate() {
    if (!!this.props.value && !this.state.focused) {
      this.setState({ focused: true });
    }
  }

  private onFocus = () => {
    this.setState({ focused: true });
  };

  private onBlur = () => {
    this.setState({ focused: false });
  };

  private cache = (input: HTMLInputElement) => {
    this.input = input;
  };

  public override render() {
    const { focused } = this.state;
    const { name, id = name, type, value, onChange } = this.props;
    return (
      <div className={`login-input ${focused ? "focus" : ""}`}>
        <label htmlFor={id}>{name}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          ref={this.cache}
          onChange={onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}

interface Props {
  id?: string;
  name: string;
  value: string;
  autofocus?: boolean;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface State {
  focused: boolean;
}
