import React, { Component } from "react";
import type { Formatter } from "Tools/Types";
import { Rainbow } from "Tools/Rainbow";
import { Controller } from "./Controller";
import type { Datum, GraphState } from "./types";
import { Bar } from "./Bar";
import "./styles.scss";

export class BarGraph extends Component<Props, GraphState> {
  listener?: string;
  controller: Controller;
  container?: HTMLDivElement;
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
        <div className="graph-area">
          <div className="y-axis-ticks">
            {yAxis.map(value => {
              return <span key={value} />;
            })}
          </div>
          {data.map(({ value, label }, i) => {
            return (
              <Bar
                label={label}
                width={barSize}
                radius={barRadius}
                key={`${value}-${i}`}
                color1={Rainbow.getBase(i)}
                color2={Rainbow.getRaised(i)}
                height={`${(value * this.controller.height) / max}px`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

interface Props {
  data: Datum[];
  zeroMin: boolean;
  yAxisFormatter: Formatter;
}
