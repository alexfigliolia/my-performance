import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export class BaseRedirect extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return <Navigate to={this.props.base} />;
  }
}

interface Props {
  base: string;
}
