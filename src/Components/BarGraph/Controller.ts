import { select } from "d3";
import { Screen } from "State/Screen";
import type { GroupSelection, RectSelection, TextSelection } from "Tools/Types";
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
    const fontSize = this.getFontSize();
    this.yData.forEach((d, i) => {
      const Y = this.xLabelPositionY(d);
      const X = this.xLabelPositionX(i, fontSize);
      const text = SVG.append("text")
        .attr("dy", "0.5em")
        .attr("x", X)
        .attr("y", Y)
        .attr("fill", "#fff")
        .attr("text-anchor", "middle")
        .attr("font-size", `${fontSize}px`)
        .attr("class", Controller.BAR_LABEL_CLASS)
        .attr("transform", `rotate(-90, ${X}, ${Y})`)
        .text(this.xData[i]);
      this.lookForLabelConflicts(text, X, d);
    });
  }

  private repositionLabels(SVG: GroupSelection) {
    const labels = SVG.selectAll<SVGTextElement, any>(
      `.${Controller.BAR_LABEL_CLASS}`,
    ).nodes();
    const fontSize = this.getFontSize();
    labels.forEach((d, i) => {
      const node = select(d);
      const X = this.xLabelPositionX(i, fontSize);
      const Y = this.xLabelPositionY(this.yData[i]);
      node
        .attr("x", X)
        .attr("y", Y)
        .attr("font-size", `${fontSize}px`)
        .attr("transform", `rotate(-90, ${X}, ${Y})`)
        .text(this.xData[i]);
      this.lookForLabelConflicts(node, X, this.yData[i]);
    });
  }

  private getColor(index: number) {
    if (typeof this.colors === "string") {
      return this.colors;
    }
    return this.colors[index % this.colors.length];
  }

  private getFontSize() {
    const { width } = Screen.getState();
    if (width < 670) {
      return 12;
    }
    if (width < 800) {
      return 16;
    }
    if (width < 957) {
      return 12;
    }
    return 16;
  }

  private lookForLabelConflicts(text: TextSelection, X: number, D: number) {
    const { width } = text.node()!.getBBox();
    if (width >= this.height - this.Y(D) - 5) {
      const yOverride = this.height - (this.height - this.Y(D)) - width / 1.7;
      text
        .attr("fill", "black")
        .attr("y", yOverride)
        .attr("transform", `rotate(-90, ${X}, ${yOverride})`);
    } else {
      text.style("filter", "drop-shadow(0px 0px 2px rgba(0,0,0,0.4)");
    }
  }
}
