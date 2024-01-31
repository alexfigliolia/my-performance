import type { Axis, NumberValue, ScaleLinear, ScaleTime } from "d3";
import {
  max,
  extent,
  axisLeft,
  scaleTime,
  axisBottom,
  timeFormat,
  scaleLinear,
} from "d3";
import type { LineDatum } from "Tools/Types";
import { BaseScales } from "Tools/BaseScales";
import type { IScale, IUpdate } from "./types";

export class Scales extends BaseScales {
  maxY: number;
  data: LineDatum[];
  XAxis: Axis<Date>;
  YAxis: Axis<NumberValue>;
  X: ScaleTime<number, number, never>;
  Y: ScaleLinear<number, number, never>;
  constructor({ data, ...options }: IScale) {
    super(options);
    this.data = data;
    this.maxY = max(this.data, d => d.value)!;
    this.Y = this.createYScale();
    this.YAxis = axisLeft(this.Y);
    this.X = this.createTimeScale();
    this.XAxis = axisBottom<Date>(this.X);
  }

  public update({ data, ...update }: IUpdate) {
    this.data = data;
    this.maxY = max(this.data, d => d.value)!;
    super.update(update);
    this.regenerateScales();
  }

  public ticksX = () => {
    return this.XAxis.ticks(2)
      .tickSize(0)
      .tickFormat(v => timeFormat("%b")(v));
  };

  public ticksY = () => {
    return this.YAxis.ticks(2)
      .tickSize(0)
      .tickValues([0, this.maxY / 2, this.maxY])
      .tickFormat(v => `${Math.floor(v.valueOf() / 1000)}K`);
  };

  public gridY = () => {
    return this.YAxis.ticks(2)
      .tickSize(-this.width)
      .tickFormat(() => "")
      .tickValues([0, this.maxY / 2, this.maxY]);
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
