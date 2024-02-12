import type { MouseEvent } from "react";
import React, { Component } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { Onboarding } from "State/Onboarding";
import type { PropLess } from "Tools/Types";
import { Organization } from "./Organization";
import { User } from "./User";
import "./styles.scss";

export default class SignUp extends Component<PropLess, State> {
  private PW?: PageSwitch;
  state: State = { height: undefined };
  private heights: Record<number, number | undefined> = {
    0: undefined,
    1: undefined,
  };

  public override componentDidMount() {
    this.PW = new PageSwitch("signUp", {
      arrowKey: false,
      autoplay: false,
      direction: 0,
      duration: 750,
      frozen: false,
      loop: false,
      mouse: false,
      mousewheel: false,
      start: 0,
      transition: "fade",
    });
    this.PW.on("before", (_, next) => {
      this.setState({ height: this.heights[next] });
    });
  }

  public override componentWillUnmount() {
    Onboarding.reset();
    this.PW?.destroy();
  }

  private nextSlide = () => {
    this.PW?.next();
  };

  private previousSlide = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.PW?.previous();
  };

  private resize(index: number) {
    return (_: number, height: number) => {
      if (height && height !== this.heights[index]) {
        this.heights[index] = height;
        if ((this.PW?.current ?? 0) === index) {
          this.setState({ height });
        }
      }
    };
  }

  public override render() {
    const { height } = this.state;
    return (
      <div className="sign-up">
        <div id="signUp" style={{ height }}>
          <Organization onResize={this.resize(0)} nextSlide={this.nextSlide} />
          <User onResize={this.resize(1)} previousSlide={this.previousSlide} />
        </div>
      </div>
    );
  }
}

interface State {
  height?: number;
}
