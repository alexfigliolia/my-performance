import React, { Component } from "react";
import "./styles.scss";
import type { INavigation } from "Models/types";
import { Navigation, connectNavigation } from "State/Navigation";
import { Circle } from "Components/SVGCircle";

export class BurgerButton extends Component<Props> {
  public override shouldComponentUpdate({ open }: Props) {
    return open !== this.props.open;
  }

  public toggle = () => {
    Navigation.toggleMenu();
  };

  public override render() {
    const { open } = this.props;
    return (
      <button onClick={this.toggle} className={`burger ${open ? "open" : ""}`}>
        <div>
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
        <Circle />
      </button>
    );
  }
}

interface Props {
  open: boolean;
}

const mSTP = ({ menuOpen }: INavigation) => {
  return { open: menuOpen };
};

export const Burger = connectNavigation(mSTP)(BurgerButton);
