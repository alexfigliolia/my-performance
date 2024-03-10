import type { ComponentType, ReactNode } from "react";
import type {
  LoaderFunction,
  ShouldRevalidateFunction,
} from "react-router-dom";
import type { LazyComponent } from "Components/Tools";
import type { PropLess } from "Types/React";

export interface IRoute {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  loader?: LoaderFunction;
  Component: ComponentType<PropLess>;
}

export interface ILazyRoute {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  loader?: LoaderFunction;
  Component?: LazyComponent;
  shouldRevalidate?: ShouldRevalidateFunction;
}

export interface IRedirect {
  path: string;
  element: ReactNode;
}

export type NestedRoutes = (IRoute | ILazyRoute | IRedirect)[];
