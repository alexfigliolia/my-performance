import { curveBundle, line } from "d3";
import type { LineDatum } from "Tools/Types";
import type { IUpdate, Options } from "./types";
import { Scales } from "./Scales";

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
    SVG.select(`.${Controller.X_AXIS_CLASS}`)
      .attr(...this.XAxisTransform)
      .call(this.cast(this.ticksX()));
    SVG.select(`.${Controller.Y_AXIS_CLASS}`).call(this.cast(this.ticksY()));
    SVG.select(`.${Controller.Y_GRID_CLASS}`).call(this.cast(this.gridY()));
    SVG.select(`.${Controller.LINE_CLASS}`)
      .datum(this.data)
      .attr("d", this.createLine());
  }

  private createLine() {
    return line<LineDatum>()
      .x(d => this.X(d.date))
      .y(d => this.Y(d.value))
      .curve(curveBundle.beta(1)) as unknown as string;
  }
}
