import type { CSSProperties, ReactNode } from "react";
import React, { Component } from "react";
import { SVGCircle } from "Components/SVGCircle";
import { SVGRing } from "Components/SVGRing";
import "./styles.scss";

export class ProgressRing extends Component<Props> {
  public override shouldComponentUpdate({ progress }: Props) {
    return progress !== this.props.progress;
  }

  public override render() {
    const { children, progress, ringStyle } = this.props;
    return (
      <div className="progress">
        <SVGCircle />
        <SVGRing progress={progress} style={ringStyle}>
          {children}
        </SVGRing>
        <span>{Math.round(progress)}%</span>
      </div>
    );
  }
}

interface Props {
  progress: number;
  children?: ReactNode;
  ringStyle?: CSSProperties;
}
