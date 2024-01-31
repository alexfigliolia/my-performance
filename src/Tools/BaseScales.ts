import type {
  Margins,
  IBaseScales,
  SVGSelection,
  GroupSelection,
  Dimensions,
} from "Tools/Types";
import { select } from "d3";

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
  constructor(options: IBaseScales) {
    this.id = options.id;
    this.margins = BaseScales.mergeMargins(options.margins);
    this.width = options.width - this.margins.left - this.margins.right;
    this.height = options.height - this.margins.top - this.margins.bottom;
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

  private styleRoot(SVG: GroupSelection) {
    return SVG.attr("class", "positioner").attr(
      "transform",
      `translate(${this.margins.left},${this.margins.top})`,
    );
  }

  public cast(v: any) {
    return v as unknown as any;
  }

  public static mergeMargins(margins: Partial<Margins> = {}) {
    return Object.assign({}, this.defaultMargins, margins) as Margins;
  }
}
