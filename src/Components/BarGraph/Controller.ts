import { select, selectAll } from "d3";
import type { DivSelection, HTMLSelection } from "Tools/Types";
import { Scales } from "./Scales";
import type { IUpdate, Options } from "./types";
import { Screen } from "State/Screen";

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
    const fontSize = this.getFontSize();
    const method = init ? "append" : "select";
    Bar.style("top", d => `${this.Y(d)}px`)
      .style("left", (_, i) => `${this.X(this.xData[i])!}px`)
      .style("width", `${this.X.bandwidth()}px`)
      .style("height", d => `${this.height - this.Y(d)}px`)
      .style("background", (_, i) => this.getColor(i))
      .each((_, i, nodes) => {
        const node = nodes[i];
        const container = select(node);
        container.style("display", "flex");
        const span = (
          container[method]("span") as HTMLSelection<HTMLSpanElement>
        )
          .text(this.xData[i])
          .style("font-size", fontSize);
        this.positionLabel(container, span, i);
      });
  }

  private getColor(index: number) {
    if (typeof this.colors === "string") {
      return this.colors;
    }
    return this.colors[index % this.colors.length];
  }

  private positionLabel(
    container: HTMLSelection<HTMLDivElement>,
    span: HTMLSelection<HTMLSpanElement>,
    index: number,
  ) {
    const barHeight = this.height - this.Y(this.yData[index]);
    const { height, width } = (
      span.node() as HTMLElement
    ).getBoundingClientRect();
    if (Math.max(height, width) >= barHeight - 20) {
      container.style("display", "block");
      span
        .style("color", "#000")
        .style("text-shadow", "none")
        .style(
          "transform",
          `translateY(${-(
            Math.min(height, width) + this.getTextOffset()
          )}px) rotate(-90deg) `,
        );
    } else {
      container.style("display", "flex");
      span
        .style("color", "#fff")
        .style("transform", "rotate(-90deg)")
        .style("text-shadow", "0px 0px 4px rgba(0,0,0,0.25)");
    }
  }

  private getFontSize() {
    const { width } = Screen.getState();
    if (width < 670) {
      return "12px";
    }
    if (width < 800) {
      return "16px";
    }
    if (width < 957) {
      return "12px";
    }
    return "16px";
  }

  private getTextOffset() {
    const { width } = Screen.getState();
    if (width < 670) {
      return 7.5;
    }
    if (width < 800) {
      return 10;
    }
    if (width < 957) {
      return 7.5;
    }
    if (width < 1150) {
      return 12;
    }
    return 10;
  }
}
