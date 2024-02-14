import React, { Component } from "react";
import { Burger } from "Components/Burger";
import { HeaderLink } from "Components/HeaderLink";
import { LogoMedium } from "Components/LogoMedium";
import type { IUser } from "Models/User";
import { connectUser } from "State/User";
import "./styles.scss";

export class HeaderRenderer extends Component<Props> {
  public override shouldComponentUpdate({ name }: Props) {
    return name !== this.props.name;
  }

  public override render() {
    return (
      <nav className="header">
        <div>
          <LogoMedium />
          <Burger />
          <span className="welcome">Welcome, {this.props.name}!</span>
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

const mSTP = ({ name }: IUser) => {
  return { name };
};

export const Header = connectUser(mSTP)(HeaderRenderer);
