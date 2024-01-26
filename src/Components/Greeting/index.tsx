import React, { Component } from "react";
import type { IAuth } from "Models/types";
import { connectAuth } from "State/Authentication";
import "./styles.scss";

class GreetingRenderer extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { name, type } = this.props;
    return (
      <div className="greeting">
        <span>Hello, {name}</span>
        <span>This is your {type}</span>
      </div>
    );
  }
}

interface Props {
  name: string;
  type: string;
}

const mSTP = ({ name }: IAuth) => {
  return { name };
};

export const Greeting = connectAuth(mSTP)(GreetingRenderer);
