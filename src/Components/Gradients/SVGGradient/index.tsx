import React, { Component } from "react";

export class SVGGradient extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { color1, color2, id } = this.props;
    return (
      <defs>
        <linearGradient id={id}>
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
    );
  }
}

interface Props {
  id: string;
  color1: string;
  color2: string;
}
