import type { ReactNode } from "react";
import React, { Component } from "react";
import { connectModals } from "State/Modals";
import type { IModals } from "Models/types";
import "./styles.scss";

export class Screen extends Component<Props> {
  public override render() {
    const { children, shift } = this.props;
    return (
      <main className={`index-screen ${shift ? "shift" : ""}`} id="core">
        <div className="core-content">{children}</div>
      </main>
    );
  }
}

interface Props {
  shift: boolean;
  children: ReactNode;
}

const mSTP = ({ userCreation }: IModals) => {
  return { shift: userCreation };
};

export const IndexScreen = connectModals(mSTP)(Screen);
