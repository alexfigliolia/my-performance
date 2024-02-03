import type { ReactNode } from "react";
import React, { Component } from "react";
import { SizeObserver } from "Components/SizeObserver";
import { Controller } from "./Controller";
import type { Options } from "./types";
import "./styles.scss";

export class BarGraph extends Component<Props> {
  width = 0;
  node?: HTMLElement;
  controller!: Controller;

  public override componentDidMount() {
    if (this.node) {
      const { id, colors, height, xData, yData, margins } = this.props;
      const { width } = this.node.getBoundingClientRect();
      this.controller = new Controller({
        id,
        xData,
        yData,
        width,
        height,
        colors,
        margins,
      });
      this.controller.initialize();
    }
  }

  public override UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (this.props !== nextProps) {
      const { xData, yData, height } = nextProps;
      this.controller.update({ xData, yData, height, width: this.width });
    }
  }

  public override shouldComponentUpdate() {
    return false;
  }

  private onResize = (width: number) => {
    this.width = width;
    const { height, xData, yData } = this.props;
    this.controller?.update({ xData, yData, width, height });
  };

  private cache = (node: HTMLElement) => {
    this.node = node;
  };

  public override render() {
    const { children, id } = this.props;
    return (
      <SizeObserver
        width
        Tag="div"
        domRef={this.cache}
        className="bar-graph"
        onSizeChange={this.onResize}>
        <svg id={id} className="bar-root">
          {children}
        </svg>
        <div id={`${id}Bars`} className="bars">
          <div />
        </div>
      </SizeObserver>
    );
  }
}

interface Props extends Omit<Options, "width"> {
  id: string;
  children?: ReactNode;
}
