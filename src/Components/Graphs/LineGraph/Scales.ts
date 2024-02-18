import type { Axis, NumberValue, ScaleLinear, ScaleTime } from "d3";
import {
  axisBottom,
  axisLeft,
  extent,
  max,
  scaleLinear,
  scaleTime,
  timeFormat,
} from "d3";
import { BaseScales } from "Tools/BaseScales";
import type { LineDatum } from "Tools/Types";
import type { IScale, IUpdate } from "./types";

export class Scales extends BaseScales {
  maxY: number;
  data: LineDatum[];
  XAxis: Axis<Date>;
  YTickRange: number[];
  YAxis: Axis<NumberValue>;
  X: ScaleTime<number, number, never>;
  Y: ScaleLinear<number, number, never>;
  public static readonly LINE_CLASS = "line";
  constructor({ data, ...options }: IScale) {
    super(options);
    this.data = data;
    this.maxY = max(this.data, d => d.value)!;
    this.Y = this.createYScale();
    this.YAxis = axisLeft(this.Y);
    this.X = this.createTimeScale();
    this.XAxis = axisBottom<Date>(this.X);
    this.YTickRange = this.createTickYRange(this.maxY, 3);
  }

  public update({ data, ...update }: IUpdate) {
    this.data = data;
    this.maxY = max(this.data, d => d.value)!;
    this.YTickRange = this.createTickYRange(this.maxY, 3);
    super.update(update);
    this.regenerateScales();
  }

  public ticksX = () => {
    return this.XAxis.ticks(Math.min(12, this.width / 120))
      .tickSize(0)
      .tickFormat(v => timeFormat("%b")(v));
  };

  public ticksY = () => {
    return this.YAxis.tickSize(0)
      .tickValues(this.YTickRange)
      .tickFormat(this.numberAbbreviator);
  };

  public gridY = () => {
    return this.YAxis.ticks(2)
      .tickSize(-this.width)
      .tickFormat(() => "")
      .tickValues(this.YTickRange);
  };

  private createTimeScale() {
    const [min, max] = extent(this.data, d => d.date);
    return scaleTime().domain([min!, max!]).range([0, this.width]);
  }

  private createYScale() {
    return scaleLinear().domain([0, this.maxY]).range([this.height, 0]);
  }

  private regenerateScales() {
    this.Y = this.createYScale();
    this.YAxis = axisLeft(this.Y);
    this.X = this.createTimeScale();
    this.XAxis = axisBottom<Date>(this.X);
  }
}
