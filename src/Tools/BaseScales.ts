import type { IBaseScales, Margins } from "Tools/Types";

export class BaseScales {
  width: number;
  height: number;
  margins: Margins;
  public static readonly defaultMargins = {
    top: 10,
    left: 15,
    right: 10,
    bottom: 10,
  };
  constructor(options: IBaseScales) {
    this.margins = BaseScales.mergeMargins(options.margins);
    this.width = options.width - this.margins.left - this.margins.right;
    this.height = options.height - this.margins.top - this.margins.bottom;
  }

  public update(update: IBaseScales) {
    this.width = update.width - this.margins.left - this.margins.right;
    this.height = update.height - this.margins.top - this.margins.bottom;
  }

  public cast(v: any) {
    return v as unknown as any;
  }

  public static mergeMargins(margins: Partial<Margins> = {}) {
    return Object.assign({}, this.defaultMargins, margins) as Margins;
  }
}
