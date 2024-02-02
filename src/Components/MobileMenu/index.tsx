import React, { Component } from "react";
import { MobileLink } from "Components/MobileLink";
import { Waves } from "Components/Waves";
import type { INavigation } from "Models/types";
import { connectNavigation, Navigation } from "State/Navigation";
import { Escape } from "Tools/Escape";
import "./styles.scss";

class Menu extends Component<Props> {
  Escape = new Escape({ callback: this.close });
  public override shouldComponentUpdate({ open }: Props) {
    return open !== this.props.open;
  }

  public override componentDidUpdate(pp: Props) {
    const { open } = this.props;
    if (open === pp.open) return;
    this.Escape.switch(open);
  }

  public override componentWillUnmount() {
    this.Escape.destroy();
  }

  private close() {
    Navigation.closeMenu();
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

const mSTP = ({ menuOpen }: INavigation) => {
  return { open: menuOpen };
};

interface Props {
  open: boolean;
}

export const MobileMenu = connectNavigation(mSTP)(Menu);
