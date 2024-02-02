import React, { Component } from "react";
import { Circle } from "Components/SVGCircle";
import type { INavigation } from "Models/types";
import { connectNavigation, Navigation } from "State/Navigation";
import "./styles.scss";

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
