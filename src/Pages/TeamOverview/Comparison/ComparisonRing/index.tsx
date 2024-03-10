import React, { Component } from "react";
import { ProgressRing } from "Components/Graphs";
import "./styles.scss";

export class ComparisonRing extends Component<Props> {
  public override shouldComponentUpdate({ progress }: Props) {
    return progress !== this.props.progress;
  }

  public override render() {
    const { id, progress, color1, color2 } = this.props;
    return (
      <ProgressRing progress={progress}>
        <linearGradient id={id} x1="1" x2="0" y1="0" y2="1">
          <stop stopColor={color1} offset="0" />
          <stop stopColor={color2} offset="1" />
        </linearGradient>
      </ProgressRing>
    );
  }
}

interface Props {
  id: string;
  color1: string;
  color2: string;
  progress: number;
}
