import type { ReactNode } from "react";
import React, { Component } from "react";
import { Portal } from "Components/Portal";
import { Waves } from "Components/Waves";
import type { IScreen } from "Models/types";
import { connectScreen } from "State/Screen";
import { Escape } from "Tools/Escape";
import "./styles.scss";

class PanelScreen extends Component<Props> {
  Escape = new Escape({ callback: this.props.toggle });

  componentDidUpdate(pp: Props) {
    const { visible } = this.props;
    if (visible === pp.visible) return;
    this.Escape.switch(visible);
  }

  public override componentWillUnmount() {
    this.Escape.destroy();
    const { visible, toggle } = this.props;
    if (visible) {
      toggle();
    }
  }

  public override render() {
    const { visible, children, height } = this.props;
    return (
      <Portal>
        <div
          style={{ height }}
          className={`panel-screen ${visible ? " visible" : ""}`}>
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
  toggle: () => void;
  children: ReactNode;
}

const mSTP = ({ height }: IScreen) => {
  return { height };
};

export const Panel = connectScreen(mSTP)(PanelScreen);
