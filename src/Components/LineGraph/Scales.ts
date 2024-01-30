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
import type { IScale, IUpdate, Margins } from "./types";

export class Scales {
  maxY: number;
  width: number;
  height: number;
  margins: Margins;
  data: LineDatum[];
  XAxis: Axis<Date>;
  YAxis: Axis<NumberValue>;
  X: ScaleTime<number, number, never>;
  Y: ScaleLinear<number, number, never>;
  public static readonly defaultMargins = {
    top: 10,
    left: 15,
    right: 10,
    bottom: 10,
  };
  constructor(options: IScale) {
    this.data = options.data;
    this.maxY = max(this.data, d => d.value)!;
    this.margins = options.margins || Scales.defaultMargins;
    this.width = options.width - this.margins.left - this.margins.right;
    this.height = options.height - this.margins.top - this.margins.bottom;
    this.Y = this.createYScale();
    this.YAxis = axisLeft(this.Y);
    this.X = this.createTimeScale();
    this.XAxis = axisBottom<Date>(this.X);
  }

  public update(update: IUpdate) {
    this.data = update.data;
    this.maxY = max(this.data, d => d.value)!;
    this.width = update.width - this.margins.left - this.margins.right;
    this.height = update.height - this.margins.top - this.margins.bottom;
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

  public cast(v: any) {
    return v as unknown as any;
  }

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
