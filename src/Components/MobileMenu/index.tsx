import React, { Component } from "react";
import { MobileLink } from "Components/MobileLink";
import { Waves } from "Components/Waves";
import type { IModals } from "Models/types";
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
          <li>
            <MobileLink to="/">Home</MobileLink>
          </li>
          <li>
            <MobileLink to="/team">Team</MobileLink>
          </li>
          <li>
            <MobileLink to="/profile">Profile</MobileLink>
          </li>
          <li>
            <MobileLink to="/account">Account</MobileLink>
          </li>
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
