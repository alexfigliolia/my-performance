import type { Axis, NumberValue, ScaleBand, ScaleLinear } from "d3";
import { axisBottom, axisLeft, max, scaleBand, scaleLinear } from "d3";
import { BaseScales } from "Tools/BaseScales";
import type { IScales, IUpdate } from "./types";

export class Scales extends BaseScales {
  maxY: number;
  yData: number[];
  xData: string[];
  tickRange: number[];
  XAxis: Axis<string>;
  X: ScaleBand<string>;
  YAxis: Axis<NumberValue>;
  Y: ScaleLinear<number, number, never>;
  public static readonly BAR_CLASS = "bar";
  constructor({ xData, yData, ...options }: IScales) {
    super(options);
    this.xData = xData;
    this.yData = yData;
    this.maxY = max(this.yData)!;
    this.Y = this.createYScale();
    this.X = this.createXScale();
    this.YAxis = axisLeft(this.Y);
    this.XAxis = axisBottom(this.X);
    this.tickRange = this.createTickYRange(this.maxY, 6);
  }

  public update({ xData, yData, ...update }: IUpdate) {
    this.xData = xData;
    this.yData = yData;
    this.maxY = max(this.yData)!;
    this.tickRange = this.createTickYRange(this.maxY, 6);
    super.update(update);
    this.recreateScales();
  }

  public ticksY = () => {
    return this.YAxis.ticks(5)
      .tickSize(0)
      .tickValues(this.tickRange)
      .tickFormat(this.numberAbbreviator);
  };

  public gridY = () => {
    return this.YAxis.ticks(5)
      .tickSize(-this.width)
      .tickFormat(() => "")
      .tickValues(this.tickRange);
  };

  public xLabelPositionY(y: number) {
    return Math.min(this.height, this.height - (this.height - this.Y(y)) / 2);
  }

  public xLabelPositionX(index: number, fontSize: number) {
    return this.X(this.xData[index])! + this.X.bandwidth() / 2 - fontSize / 6;
  }

  private recreateScales() {
    this.Y = this.createYScale();
    this.X = this.createXScale();
    this.YAxis = axisLeft(this.Y);
    this.XAxis = axisBottom(this.X);
  }

  private createXScale() {
    return scaleBand().range([0, this.width]).domain(this.xData).padding(0.4);
  }

  private createYScale() {
    return scaleLinear().domain([0, this.maxY]).range([this.height, 0]);
  }
}
