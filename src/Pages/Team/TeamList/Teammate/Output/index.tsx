import React, { Component } from "react";
import { ProgressRing } from "Components/ProgressRing";
import "./styles.scss";

export class Output extends Component<Props> {
  gradientID: string;
  constructor(props: Props) {
    super(props);
    this.gradientID = `${this.props.id}Output`;
  }

  public override shouldComponentUpdate({ progress }: Props) {
    return progress !== this.props.progress;
  }

  public override render() {
    const { progress, color1, color2 } = this.props;
    return (
      <ProgressRing
        progress={progress}
        ringStyle={{ "--progress-stroke": `url(#${this.gradientID})` }}>
        <linearGradient id={this.gradientID} x1="1" x2="0" y1="0" y2="1">
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
