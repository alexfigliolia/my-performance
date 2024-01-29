import React, { Component } from "react";
import { BasicLoader } from "Components/BasicLoader";
import "./styles.scss";

export class LoginButton extends Component<Props> {
  public override shouldComponentUpdate({ loading }: Props) {
    return loading !== this.props.loading;
  }

  public override render() {
    const { text, loading } = this.props;
    return (
      <button className={`submitter ${loading ? "loading" : ""}`} type="submit">
        <span>{text}</span>
        <BasicLoader />
      </button>
    );
  }
}

interface Props {
  text: string;
  loading: boolean;
}
