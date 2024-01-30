import type { To } from "react-router-dom";
import type {
  Arc,
  BaseType,
  Selection,
  ChordGroup,
  RibbonGenerator,
  DefaultArcObject,
} from "d3";

export type PropLess = Record<string, never>;

export type MethodLike<T = any> = (...args: any[]) => T;

export type MethodKeys<T, R = any> = keyof {
  [K in keyof T as Required<T>[K] extends MethodLike<R> ? K : never]: T[K];
};

export type Navigator = (to: To) => Promise<void>;

export type Formatter = (value: number) => string;

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

export interface LineDatum {
  date: Date;
  value: number;
}
