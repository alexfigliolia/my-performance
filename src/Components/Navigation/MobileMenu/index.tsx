import React, { Component } from "react";
import { MobileLink } from "Components/Navigation/MobileLink";
import { Waves } from "Components/Waves";
import type { IModals } from "Models/Modals";
import { MappedRoutes } from "Routes/MappedRoutes";
import { connectModals } from "State/Modals";
import "./styles.scss";

class Menu extends Component<Props> {
  public override shouldComponentUpdate({ open }: Props) {
    return open !== this.props.open;
  }

  public override render() {
    const { open } = this.props;
    return (
      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          {MappedRoutes.list.map((name, i) => {
            return (
              <li
                key={name}
                style={{
                  "--transition-delay": `${250 + 50 * i}ms`,
                }}>
                <MobileLink to={MappedRoutes.getPath(name)}>{name}</MobileLink>
              </li>
            );
          })}
        </ul>
        <Waves id="menuWaves" />
      </nav>
    );
  }
}

const mSTP = ({ menuOpen }: IModals) => {
  return { open: menuOpen };
};

interface Props {
  open: boolean;
}

export const MobileMenu = connectModals(mSTP)(Menu);
