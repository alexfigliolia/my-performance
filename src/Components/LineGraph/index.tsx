import type { ReactNode } from "react";
import React, { Component } from "react";
import { SizeObserver } from "Components/SizeObserver";
import type { LineDatum, Margins } from "Tools/Types";
import { Controller } from "./Controller";
import "./styles.scss";

export class LineGraph extends Component<Props> {
  width = 0;
  node?: HTMLElement;
  controller!: Controller;

  public override componentDidMount() {
    if (this.node) {
      this.width = this.node.getBoundingClientRect().width;
      const { id, data, height, stroke, margins } = this.props;
      this.controller = new Controller({
        id,
        data,
        stroke,
        height,
        margins,
        width: this.width,
      });
      this.controller.initialize();
    }
  }

  public override UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (this.props !== nextProps) {
      const { data, height } = nextProps;
      this.controller.update({ data, height, width: this.width });
    }
  }

  public override shouldComponentUpdate({ id }: Props) {
    return id !== this.props.id;
  }

  private onResize = (width: number) => {
    this.width = width;
    const { data, height } = this.props;
    this.controller.update({ data, width, height });
  };

  private cache = (node: HTMLElement) => {
    this.node = node;
  };

  public override render() {
    const { id, children } = this.props;
    return (
      <SizeObserver
        width
        Tag="div"
        domRef={this.cache}
        className="line-graph"
        onSizeChange={this.onResize}>
        <svg id={id}>{children}</svg>
      </SizeObserver>
    );
  }
}

interface Props {
  id: string;
  height: number;
  stroke: string;
  data: LineDatum[];
  children?: ReactNode;
  margins?: Partial<Margins>;
}
