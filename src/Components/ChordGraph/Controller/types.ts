import type {
  Arc,
  BaseType,
  Selection,
  ChordGroup,
  RibbonGenerator,
  DefaultArcObject,
} from "d3";

export interface Options {
  size: number;
  data: number[][];
  labels: string[];
}

export type SVGSelection<
  D = any,
  P extends BaseType = BaseType,
  PD = any,
> = Selection<SVGElement, D, P, PD>;

export type GroupSelection = Selection<
  SVGGElement,
  ChordGroup,
  SVGGElement,
  any
>;

export type PathSelection<
  D = ChordGroup,
  P extends BaseType = SVGGElement,
> = Selection<SVGPathElement, D, P, any>;

export type TextSelection = Selection<SVGTextElement, any, BaseType, any>;

export type IArc = Arc<any, DefaultArcObject>;

export type IRibbon = RibbonGenerator<any, any, any>;
