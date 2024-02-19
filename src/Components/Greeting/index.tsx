import React, { Component } from "react";
import type { IUser } from "Models/User";
import { connectUser } from "State/User";
import "./styles.scss";

class GreetingRenderer extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { name, type } = this.props;
    const plural = type.endsWith("s");
    return (
      <div className="greeting">
        <span>Hello, {name}</span>
        <span>
          {plural ? "These are" : "This is"} your {type}
        </span>
      </div>
    );
  }
}

interface Props {
  name: string;
  type: string;
}

const mSTP = ({ name }: IUser) => {
  return { name };
};

export const Greeting = connectUser(mSTP)(GreetingRenderer);
