import { curveBundle, line, select } from "d3";
import type { LineDatum, SVGSelection } from "Tools/Types";
import type { IUpdate, Options } from "./types";
import { Scales } from "./Scales";

export class Controller extends Scales {
  id: string;
  stroke: string;
  SVG?: SVGSelection;
  constructor({ id, stroke, ...rest }: Options) {
    super(rest);
    this.id = id;
    this.stroke = stroke;
  }

  public initialize() {
    const SVG = this.sizeSVG();
    SVG.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${this.height})`)
      .call(this.ticksX());
    SVG.append("g").attr("class", "y-axis").call(this.ticksY());
    SVG.append("g").attr("class", "y-grid").call(this.gridY());
    SVG.append("path")
      .attr("class", "line")
      .datum(this.data)
      .attr("fill", "none")
      .attr("stroke", this.stroke)
      .attr("stroke-width", 3)
      .attr("d", this.createLine());
  }

  public override update(options: IUpdate) {
    super.update(options);
    const SVG = this.sizeSVG();
    SVG.select(".x-axis")
      .transition()
      .duration(250)
      .attr("transform", `translate(0, ${this.height})`)
      .call(this.cast(this.ticksX()));
    SVG.select(".y-axis")
      .transition()
      .duration(250)
      .call(this.cast(this.ticksY()));
    SVG.select(".y-grid")
      .transition()
      .duration(250)
      .call(this.cast(this.gridY()));
    SVG.select(".line")
      .datum(this.data)
      .transition()
      .duration(250)
      .attr("d", this.createLine());
  }

  private sizeSVG() {
    const SVG = this.getSVG();
    SVG.attr("width", this.width + this.margins.left + this.margins.right)
      .attr("height", this.height + this.margins.top + this.margins.bottom)
      .style(
        "transform",
        `translate(${this.margins.left}px,${this.margins.top}px)`,
      )
      .append("g");
    return SVG;
  }

  private createLine() {
    return line<LineDatum>()
      .x(d => this.X(d.date))
      .y(d => this.Y(d.value))
      .curve(curveBundle.beta(1)) as unknown as string;
  }

  private getSVG() {
    this.SVG = select(`#${this.id}`) as SVGSelection;
    return this.SVG;
  }
}
