import type { ReactNode } from "react";
import React, { Component } from "react";
import { Portal } from "Components/Modals/Portal";
import { Waves } from "Components/Waves";
import type { IScreen } from "Models/Screen";
import { connectScreen } from "State/Screen";
import "./styles.scss";

class PanelScreen extends Component<Props> {
  public override componentWillUnmount() {
    const { visible, close } = this.props;
    if (visible) {
      close();
    }
  }

  public override render() {
    const { visible, children, height, className = "" } = this.props;
    return (
      <Portal>
        <div
          style={{ height }}
          className={`panel-screen ${className} ${visible ? " visible" : ""}`}>
          <div className="panel-content">
            <div className="panel-kids">{children}</div>
            <Waves id="panelWaves" />
          </div>
        </div>
      </Portal>
    );
  }
}

interface Props {
  height: number;
  visible: boolean;
  close: () => void;
  className?: string;
  children: ReactNode;
}

const mSTP = ({ height }: IScreen) => {
  return { height };
};

export const Panel = connectScreen(mSTP)(PanelScreen);
