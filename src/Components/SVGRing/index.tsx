import type { ReactNode } from "react";
import React, { Component } from "react";
import "./styles.scss";

export class SVGRing extends Component<Props> {
  public override shouldComponentUpdate({ progress }: Props) {
    return progress !== this.props.progress;
  }

  public override render() {
    const { progress = 100, children } = this.props;
    return (
      <svg
        className="progress-ring"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="50"
          style={{
            strokeDashoffset: 314 - (progress * 314) / 100,
          }}
        />
        {children}
      </svg>
    );
  }
}

interface Props {
  progress?: number;
  children?: ReactNode;
}
