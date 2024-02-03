import type {
  Arc,
  BaseType,
  ChordGroup,
  DefaultArcObject,
  RibbonGenerator,
  Selection,
} from "d3";
import type { ReactNode } from "react";
import type { createBrowserRouter, To } from "react-router-dom";

export type Router = ReturnType<typeof createBrowserRouter>;

export type PropLess = Record<string, never>;

export interface OptionalChildren {
  children?: ReactNode;
}

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

export interface PullRequest {
  date: string;
  author: string;
  status: string;
  description: string;
  repository: string;
}

export interface IStandout {
  author: string;
  delta: number;
  lines: number;
}

export interface MemberStats {
  lines: number;
  commits: number;
  linesPerMonth: number[];
  recentPullRequests: number;
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
