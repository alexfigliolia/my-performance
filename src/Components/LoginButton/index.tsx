import type { MouseEvent } from "react";
import React, { Component } from "react";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export class LoginButton extends Component<Props> {
  public override shouldComponentUpdate({ loading }: Props) {
    return loading !== this.props.loading;
  }

  public override render() {
    const { text, loading, onClick, children, type = "submit" } = this.props;
    return (
      <button
        type={type}
        onClick={onClick}
        className={`submitter ${loading ? "loading" : ""}`}>
        <span>{text}</span>
        {children}
      </button>
    );
  }
}

interface Props extends OptionalChildren {
  text: string;
  loading: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
