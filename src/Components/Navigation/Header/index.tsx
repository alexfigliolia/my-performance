import React, { Component } from "react";
import { LogoMedium } from "Components/Logos";
import { Burger } from "Components/Navigation/Burger";
import { HeaderLink } from "Components/Navigation/HeaderLink";
import type { IUser } from "Models/User";
import { MappedRoutes } from "Routes/MappedRoutes";
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
            {MappedRoutes.list.map(route => {
              return (
                <li key={route}>
                  <HeaderLink to={MappedRoutes.getPath(route)}>
                    {route}
                  </HeaderLink>
                </li>
              );
            })}
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
