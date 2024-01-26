import React, { Component } from "react";
import { Controller } from "./Controller";
import type { Datum, GraphState } from "./types";
import { Bar } from "./Bar";
import "./styles.scss";

export class BarGraph extends Component<Props, GraphState> {
  listener?: string;
  controller: Controller;
  container?: HTMLDivElement;
  public static readonly colors = [
    ["rgb(255, 122, 200)", "rgb(255, 0, 149)"],
    ["rgb(255, 122, 122)", "rgb(233, 27, 27)"],
    ["rgb(255, 195, 122)", "rgb(255, 140, 0)"],
    ["rgb(126, 255, 122)", "rgb(35, 223, 28)"],
    ["rgb(111 229 213)", "rgb(14, 232, 217)"],
    ["rgb(0, 208, 255)", "rgb(0, 174, 255)"],
    ["rgb(220, 122, 255)", "rgb(181, 1, 247)"],
  ];
  public state: GraphState = {
    min: 0,
    max: 0,
    data: [],
    yAxis: [],
    barSize: 0,
    barRadius: 0,
  };
  constructor(props: Props) {
    super(props);
    const { data, zeroMin } = this.props;
    this.controller = new Controller({ data, zeroMin });
  }

  public static defaultProps = {
    yAxisFormatter: (value: number) => `${value}`,
  };

  public override componentDidMount() {
    if (this.container) {
      this.controller.register(this.container);
      this.listener = this.controller.on(this.update, true);
    }
  }

  public override shouldComponentUpdate(_: Props, nextState: GraphState) {
    return nextState !== this.state;
  }

  public override UNSAFE_componentWillReceiveProps({ data, zeroMin }: Props) {
    this.controller.update({ data, zeroMin });
  }

  public override componentWillUnmount() {
    if (this.listener) {
      this.controller.off(this.listener);
    }
  }

  private update = (state: GraphState) => {
    this.setState(state);
  };

  private cache = (div: HTMLDivElement) => {
    this.container = div;
  };

  private static color(index: number) {
    return BarGraph.colors[index % BarGraph.colors.length];
  }

  public override render() {
    const { yAxis, data, max, barSize, barRadius } = this.state;
    const { yAxisFormatter } = this.props;
    return (
      <div ref={this.cache} className="bar-graph">
        <div className="y-axis-labels">
          {yAxis.map(value => {
            return <span key={value}>{yAxisFormatter(value)}</span>;
          })}
        </div>
        {data.map(({ value, label }, i) => {
          const [color1, color2] = BarGraph.color(i);
          return (
            <Bar
              label={label}
              width={barSize}
              color1={color1}
              color2={color2}
              radius={barRadius}
              key={`${value}-${i}`}
              height={`${(value * this.controller.height) / max}px`}
            />
          );
        })}
      </div>
    );
  }
}

interface Props {
  data: Datum[];
  zeroMin: boolean;
  yAxisFormatter: (value: number) => string;
}
