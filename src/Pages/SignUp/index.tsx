import type { MouseEvent } from "react";
import React, { Component } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { Onboarding } from "State/Onboarding";
import type { PropLess } from "Tools/Types";
import { Organization } from "./Organization";
import { User } from "./User";
import "./styles.scss";

export default class SignUp extends Component<PropLess, State> {
  maxHeight = 0;
  private PW?: PageSwitch;
  state: State = { height: undefined };

  public override componentDidMount() {
    this.PW = new PageSwitch("onboarding", {
      arrowKey: false,
      autoplay: false,
      direction: 0,
      duration: 1000,
      frozen: false,
      loop: false,
      mouse: false,
      mousewheel: false,
      start: 0,
      transition: "fade",
    });
  }

  public override componentWillUnmount() {
    Onboarding.reset();
  }

  private nextSlide = () => {
    this.PW?.next();
  };

  private previousSlide = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.PW?.previous();
  };

  private resize = (_: number, height: number) => {
    const max = Math.max(height, this.maxHeight);
    if (max !== this.maxHeight) {
      this.maxHeight = max;
      this.setState({ height: max });
    }
  };

  public override render() {
    const { height } = this.state;
    return (
      <div className="onboarding">
        <div id="onboarding" style={{ height }}>
          <Organization nextSlide={this.nextSlide} onResize={this.resize} />
          <User onResize={this.resize} previousSlide={this.previousSlide} />
        </div>
      </div>
    );
  }
}

interface State {
  height?: number;
}
