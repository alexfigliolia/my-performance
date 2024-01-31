import type {
  Margins,
  IBaseScales,
  SVGSelection,
  GroupSelection,
  Dimensions,
} from "Tools/Types";
import type { NumberValue } from "d3";
import { select } from "d3";
import { Numbers } from "./Numbers";

export class BaseScales {
  id: string;
  width: number;
  height: number;
  margins: Margins;
  SVG?: SVGSelection;
  public static readonly defaultMargins = {
    top: 10,
    left: 15,
    right: 10,
    bottom: 10,
  };
  public static readonly X_AXIS_CLASS = "x-axis";
  public static readonly X_GRID_CLASS = "x-grid";
  public static readonly Y_AXIS_CLASS = "y-axis";
  public static readonly Y_GRID_CLASS = "y-grid";
  constructor(options: IBaseScales) {
    this.id = options.id;
    this.margins = BaseScales.mergeMargins(options.margins);
    this.width = options.width - this.margins.left - this.margins.right;
    this.height = options.height - this.margins.top - this.margins.bottom;
  }

  public static mergeMargins(margins: Partial<Margins> = {}) {
    return Object.assign({}, this.defaultMargins, margins) as Margins;
  }

  public update(update: Dimensions) {
    this.width = update.width - this.margins.left - this.margins.right;
    this.height = update.height - this.margins.top - this.margins.bottom;
  }

  public getSVG() {
    if (!this.SVG) {
      this.SVG = select(`#${this.id}`);
    }
    return this.SVG;
  }

  public sizeSVG(init = true) {
    const SVG = this.getSVG();
    SVG.attr("width", this.width + this.margins.left + this.margins.right).attr(
      "height",
      this.height + this.margins.top + this.margins.bottom,
    );
    if (init) {
      return this.styleRoot(SVG.append("g") as GroupSelection);
    }
    return this.styleRoot(SVG.select(".positioner") as GroupSelection);
  }

  public get XAxisTransform(): [string, string] {
    return ["transform", `translate(0, ${this.height + 5})`];
  }

  public numberAbbreviator = (n: NumberValue) => {
    return Numbers.abbreviate(n.valueOf());
  };

  public cast(v: any) {
    return v as unknown as any;
  }

  public createTickYRange(maxY: number, numTicks: number) {
    return new Array(numTicks)
      .fill(0)
      .map((_, i) => (maxY / (numTicks - 1)) * i);
  }

  private styleRoot(SVG: GroupSelection) {
    return SVG.attr("class", "positioner").attr(
      "transform",
      `translate(${this.margins.left},${this.margins.top})`,
    );
  }
}
