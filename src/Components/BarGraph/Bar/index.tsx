import React, { Component } from "react";
import "./styles.scss";

export class Bar extends Component<Props> {
  public override render() {
    const { height, width, color1, color2, radius, label } = this.props;
    return (
      <div
        className="bg-bar"
        style={{
          width,
          height,
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          boxShadow: `2px 0px 7.5px ${color2.slice(0, -2)} 0.3)`,
          background: `linear-gradient(to bottom, ${color1}, ${color2})`,
        }}>
        <span>{label}</span>
      </div>
    );
  }
}

interface Props {
  width: number;
  label: string;
  height: string;
  radius: number;
  color1: string;
  color2: string;
}
