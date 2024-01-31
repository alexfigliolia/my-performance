import { select } from "d3";
import type { GroupSelection, RectSelection } from "Tools/Types";
import { Scales } from "./Scales";
import type { IUpdate, Options } from "./types";

export class Controller extends Scales {
  colors: string | string[];
  public static readonly BAR_LABEL_CLASS = "bar-label";
  constructor({ colors = "#000", ...options }: Options) {
    super(options);
    this.colors = colors;
  }

  public initialize() {
    const SVG = this.sizeSVG();
    SVG.append("g").attr("class", Controller.Y_AXIS_CLASS).call(this.ticksY());
    SVG.append("g").attr("class", Controller.Y_GRID_CLASS).call(this.gridY());
    this.styleBars(
      SVG.selectAll(".bar")
        .data(this.yData)
        .join("rect")
        .attr("class", Controller.BAR_CLASS),
    );
    this.appendLabels(SVG);
  }

  public update(update: IUpdate) {
    super.update(update);
    const SVG = this.sizeSVG(false);
    SVG.select(`.${Controller.Y_AXIS_CLASS}`).call(this.cast(this.ticksY()));
    SVG.select(`.${Controller.Y_GRID_CLASS}`).call(this.cast(this.gridY()));
    this.styleBars(SVG.selectAll(`.${Controller.BAR_CLASS}`).data(this.yData));
    this.repositionLabels(SVG);
  }

  private styleBars(Rect: RectSelection) {
    return Rect.attr("y", d => this.Y(d))
      .attr("x", (_, i) => this.X(this.xData[i])!)
      .attr("width", this.X.bandwidth())
      .attr("height", d => this.height - this.Y(d))
      .attr("fill", (_, i) => this.getColor(i));
  }

  private appendLabels(SVG: GroupSelection) {
    this.yData.forEach((d, i) => {
      const Y = this.xLabelPositionY(d);
      const X = this.xLabelPositionX(i);
      SVG.append("text")
        .attr("dy", "0.5em")
        .attr("x", X)
        .attr("y", Y)
        .attr("fill", "#fff")
        .attr("text-anchor", "middle")
        .attr("font-size", "0.75em")
        .attr("class", Controller.BAR_LABEL_CLASS)
        .attr("transform", `rotate(-90, ${X}, ${Y})`)
        .style("filter", "drop-shadow(0px 0.5px 2px rgba(0,0,0,0.4))")
        .text(this.xData[i]);
    });
  }

  private repositionLabels(SVG: GroupSelection) {
    const labels = SVG.selectAll<SVGTextElement, any>(
      `.${Controller.BAR_LABEL_CLASS}`,
    ).nodes();
    labels.forEach((d, i) => {
      const node = select(d);
      const X = this.xLabelPositionX(i);
      const Y = this.xLabelPositionY(this.yData[i]);
      node
        .attr("x", X)
        .attr("y", Y)
        .attr("transform", `rotate(-90, ${X}, ${Y})`)
        .text(this.xData[i]);
    });
  }

  private getColor(index: number) {
    if (typeof this.colors === "string") {
      return this.colors;
    }
    return this.colors[index % this.colors.length];
  }
}
