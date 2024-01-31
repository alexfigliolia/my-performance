import type { GroupSelection, RectSelection } from "Tools/Types";
import { Scales } from "./Scales";
import type { IUpdate, Options } from "./types";

export class Controller extends Scales {
  colors: string | string[];
  constructor({ colors = "#000", ...options }: Options) {
    super(options);
    this.colors = colors;
  }

  public initialize() {
    const SVG = this.sizeSVG();
    this.styleXAxisText(
      SVG.append("g")
        .attr("class", "x-axis")
        .attr(...this.XAxisTransform)
        .call(this.XAxis),
    );
    SVG.append("g").attr("class", Controller.Y_AXIS_CLASS).call(this.ticksY());
    SVG.append("g").attr("class", Controller.Y_GRID_CLASS).call(this.gridY());
    this.styleBars(
      SVG.selectAll(".bar")
        .data(this.yData)
        .join("rect")
        .attr("class", Controller.BAR_CLASS),
    );
  }

  public update(update: IUpdate) {
    super.update(update);
    const SVG = this.sizeSVG(false);
    this.styleXAxisText(
      // @ts-ignore
      SVG.select(`.${Controller.X_AXIS_CLASS}`)
        .attr(...this.XAxisTransform)
        .call(this.cast(this.XAxis)),
    );
    SVG.select(`.${Controller.Y_AXIS_CLASS}`).call(this.cast(this.ticksY()));
    SVG.select(`.${Controller.Y_GRID_CLASS}`).call(this.cast(this.gridY()));
    this.styleBars(SVG.selectAll(`.${Controller.BAR_CLASS}`).data(this.yData));
  }

  private styleXAxisText(SVG: GroupSelection<any>) {
    return SVG.selectAll("text")
      .attr("transform", "translate(-10, 0) rotate(-45)")
      .style("text-anchor", "end");
  }

  private styleBars(SVG: RectSelection) {
    SVG.attr("y", d => this.Y(d))
      .attr("x", (_, i) => this.X(this.xData[i])!)
      .attr("width", this.X.bandwidth())
      .attr("height", d => this.height - this.Y(d))
      .attr("fill", (_, i) => this.getColor(i));
  }

  private getColor(index: number) {
    if (typeof this.colors === "string") {
      return this.colors;
    }
    return this.colors[index % this.colors.length];
  }
}
