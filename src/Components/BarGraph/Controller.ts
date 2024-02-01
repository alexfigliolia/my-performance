import { select, selectAll } from "d3";
import type { DivSelection, HTMLSelection } from "Tools/Types";
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
      this.getBarContainer()
        .select<HTMLDivElement>("div")
        .selectAll<HTMLDivElement, number>(`.${Controller.BAR_CLASS}`)
        .data(this.yData)
        .join("div")
        .attr("class", Controller.BAR_CLASS),
    );
  }

  public update(update: IUpdate) {
    super.update(update);
    const SVG = this.sizeSVG(false);
    SVG.select<SVGGElement>(`.${Controller.Y_AXIS_CLASS}`).call(this.ticksY());
    SVG.select<SVGGElement>(`.${Controller.Y_GRID_CLASS}`).call(this.gridY());
    this.styleBars(
      selectAll<HTMLDivElement, number>(`.${Controller.BAR_CLASS}`).data(
        this.yData,
      ),
      false,
    );
  }

  private styleBars(Bar: DivSelection, init = true) {
    Bar.style("top", d => `${this.Y(d)}px`)
      .style("left", (_, i) => `${this.X(this.xData[i])!}px`)
      .style("width", `${this.X.bandwidth()}px`)
      .style("height", d => `${this.height - this.Y(d)}px`)
      .style("background", (_, i) => this.getColor(i))
      .each((_, i, nodes) => {
        const container = select(nodes[i]);
        let span: HTMLSelection;
        if (init) {
          span = container.append("span");
        } else {
          span = container.select("span");
        }
        span.text(this.xData[i]).style("font-size", "0.75em");
        this.positionLabel(span, i);
      });
  }

  private getColor(index: number) {
    if (typeof this.colors === "string") {
      return this.colors;
    }
    return this.colors[index % this.colors.length];
  }

  private positionLabel(span: HTMLSelection, index: number) {
    const barHeight = this.height - this.Y(this.yData[index]);
    const { height, width } = (
      span.node() as HTMLElement
    ).getBoundingClientRect();
    const maxDimension = Math.max(height, width);
    if (maxDimension >= barHeight - 7.5) {
      span
        .style("color", "#000")
        .style("text-shadow", "none")
        .style("top", `-${maxDimension / 2 + barHeight / 2 + 7.5}px`);
    } else {
      span
        .style("color", "#fff")
        .style("text-shadow", "0px 0px 4px rgba(0,0,0,0.25)");
    }
  }
}
