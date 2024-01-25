import React, { Component } from "react";
import { LogoSmall } from "Components/LogoSmall";
import { Burger } from "Components/Burger";
import { HeaderLink } from "Components/HeaderLink";
import type { IAuth } from "Models/types";
import { connectAuth } from "State/Authentication";
import "./styles.scss";

export class HeaderRenderer extends Component<Props> {
  public override shouldComponentUpdate({ name }: Props) {
    return name !== this.props.name;
  }

  public override render() {
    return (
      <nav className="header">
        <div>
          <LogoSmall />
          <Burger />
          <span className="welcome">Welcome {this.props.name}!</span>
          <ul className="links">
            <li>
              <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/team">Team</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/profile">Profile</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/account">Account</HeaderLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

interface Props {
  name: string;
}

const mSTP = ({ name }: IAuth) => {
  return { name };
};

export const Header = connectAuth(mSTP)(HeaderRenderer);
