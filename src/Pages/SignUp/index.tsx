import React, { Component } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { Onboarding } from "State/Onboarding";
import type { PropLess } from "Tools/Types";
import { ConnectPlatforms } from "./ConnectPlatforms";
import { OrganizationName } from "./OrganizationName";
import "./styles.scss";

export default class SignUp extends Component<PropLess, State> {
  private PW?: PageSwitch;
  public state: State = { height: undefined };
  private heights: Record<string, number | undefined> = {
    0: undefined,
    1: undefined,
  };

  public override componentDidMount() {
    Onboarding.initialize();
    this.PW = new PageSwitch("signUpContainer", {
      arrowKey: false,
      autoplay: false,
      direction: 1,
      duration: 700,
      frozen: false,
      loop: false,
      mouse: false,
      mousewheel: false,
      transition: "fade",
      start: Onboarding.validInstallation ? 1 : 0,
    });
    this.PW.on("before", (_, next) => {
      this.setState({ height: this.heights[next] });
    });
    this.setState({ height: this.heights[0] });
  }

  public override shouldComponentUpdate(_: PropLess, { height }: State) {
    return height !== this.state.height;
  }

  private onHeight(index: number) {
    return (height: number) => {
      if (!height) {
        return;
      }
      this.heights[index] = height;
      if (index === this.PW?.current) {
        this.setState({ height });
      }
    };
  }

  private next = () => {
    this.PW?.next();
  };

  private previous = () => {
    this.PW?.previous();
  };

  public override render() {
    const { height } = this.state;
    return (
      <div id="signUpContainer" style={{ height }}>
        <OrganizationName onHeight={this.onHeight(0)} next={this.next} />
        <ConnectPlatforms
          previous={this.previous}
          onHeight={this.onHeight(1)}
        />
      </div>
    );
  }
}

interface State {
  height: number | undefined;
}
