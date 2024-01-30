import type { ReactNode } from "react";
import React, { Component } from "react";
import { Circle } from "Components/SVGCircle";
import { SVGRing } from "Components/SVGRing";
import "./styles.scss";

export class ProgressRing extends Component<Props> {
  public override shouldComponentUpdate({ progress }: Props) {
    return progress !== this.props.progress;
  }

  public override render() {
    const { children, progress } = this.props;
    return (
      <div className="progress">
        <Circle />
        <SVGRing progress={progress}>{children}</SVGRing>
        <span>{Math.round(progress)}%</span>
      </div>
    );
  }
}

interface Props {
  progress: number;
  children?: ReactNode;
}
