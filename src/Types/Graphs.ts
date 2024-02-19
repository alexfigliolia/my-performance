import type {
  Arc,
  BaseType,
  ChordGroup,
  DefaultArcObject,
  RibbonGenerator,
  Selection,
} from "d3";

export type SVGSelection<
  D = any,
  P extends BaseType = BaseType,
  PD = any,
> = Selection<SVGElement, D, P, PD>;

export type GroupSelection<D = ChordGroup> = Selection<
  SVGGElement,
  D,
  SVGGElement,
  any
>;

export type PathSelection<
  D = ChordGroup,
  P extends BaseType = SVGGElement,
> = Selection<SVGPathElement, D, P, any>;

export type HTMLSelection<
  P extends BaseType = HTMLElement,
  Datum = any,
> = Selection<P, Datum, any, any>;

export type DivSelection = HTMLSelection<HTMLDivElement, number>;

export type SpanSelection = HTMLSelection<HTMLSpanElement, any>;

export type TextSelection = Selection<SVGTextElement, any, BaseType, any>;

export type IArc = Arc<any, DefaultArcObject>;

export type IRibbon = RibbonGenerator<any, any, any>;

export interface LineDatum {
  date: Date;
  value: number;
}

export interface BarDatum {
  label: string;
  value: number;
}

export interface Margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface IBaseScales extends Dimensions {
  id: string;
  margins?: Partial<Margins>;
}
