import { curveCardinal, line } from "d3";
import type { LineDatum } from "Types/Graphs";
import { Scales } from "./Scales";
import type { IUpdate, Options } from "./types";

export class Controller extends Scales {
  stroke: string;
  constructor({ stroke, ...rest }: Options) {
    super(rest);
    this.stroke = stroke;
  }

  public initialize() {
    const SVG = this.sizeSVG();
    SVG.append("g")
      .attr("class", Controller.X_AXIS_CLASS)
      .attr(...this.XAxisTransform)
      .call(this.ticksX());
    SVG.append("g").attr("class", Controller.Y_AXIS_CLASS).call(this.ticksY());
    SVG.append("g").attr("class", Controller.Y_GRID_CLASS).call(this.gridY());
    SVG.append("path")
      .attr("class", Controller.LINE_CLASS)
      .datum(this.data)
      .attr("fill", "none")
      .attr("stroke", this.stroke)
      .attr("d", this.createLine());
  }

  public override update(options: IUpdate) {
    super.update(options);
    const SVG = this.sizeSVG(false);
    SVG.select<SVGGElement>(`.${Controller.X_AXIS_CLASS}`)
      .attr(...this.XAxisTransform)
      .call(this.ticksX());
    SVG.select<SVGGElement>(`.${Controller.Y_AXIS_CLASS}`).call(this.ticksY());
    SVG.select<SVGGElement>(`.${Controller.Y_GRID_CLASS}`).call(this.gridY());
    SVG.select<SVGGElement>(`.${Controller.LINE_CLASS}`)
      .datum(this.data)
      .attr("d", this.createLine());
  }

  private createLine() {
    return line<LineDatum>()
      .x(d => this.X(d.date))
      .y(d => this.Y(d.value))
      .curve(curveCardinal) as unknown as string;
  }
}
