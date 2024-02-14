import type { ReactNode } from "react";
import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import type { INavigation } from "Models/Navigation";
import { connectNavigation } from "State/Navigation";
import "./styles.scss";

class Link extends Component<Props> {
  public override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  public override render() {
    const { to, active, children } = this.props;
    return (
      <div className={`nav-link ${active ? "active" : ""}`}>
        <RouterLink to={to}>{children}</RouterLink>
      </div>
    );
  }
}

interface OwnProps {
  to: string;
  children: ReactNode;
}

interface Props extends OwnProps {
  active: boolean;
}

const mSTP = ({ pathname }: INavigation, { to }: OwnProps) => {
  return { active: pathname === to };
};

export const HeaderLink = connectNavigation(mSTP)(Link);
