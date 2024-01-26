import { BarGraph } from "Components/BarGraph";
import React, { Component } from "react";

export class Contributors extends Component {
  private data = [
    { label: "Alex", value: 40 },
    { label: "Steve", value: 30 },
    { label: "Erica", value: 20 },
    { label: "George", value: 10 },
    { label: "Someone", value: 40 },
    { label: "Else", value: 40 },
    { label: "Alex", value: 30 },
    { label: "Steve", value: 20 },
    { label: "Erica", value: 32 },
    { label: "George", value: 32 },
    { label: "Someone", value: 7 },
    { label: "Else", value: 20 },
  ];
  public override render() {
    return <BarGraph zeroMin data={this.data} />;
  }
}
