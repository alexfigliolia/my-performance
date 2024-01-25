import React, { Component } from "react";
import type { INavigation } from "Models/types";
import { MobileLink } from "Components/MobileLink";
import { Navigation, connectNavigation } from "State/Navigation";
import "./styles.scss";

class Menu extends Component<Props> {
  public override shouldComponentUpdate({ open }: Props) {
    return open !== this.props.open;
  }

  componentDidUpdate(pp: Props) {
    const { open } = this.props;
    if (open === pp.open) return;
    if (open) {
      window.addEventListener("keydown", this.keyDown);
    } else {
      window.removeEventListener("keydown", this.keyDown);
    }
  }

  public override componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDown);
  }

  private keyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      Navigation.closeMenu();
    }
  };

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
