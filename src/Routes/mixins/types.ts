import type { ComponentType, ReactNode } from "react";
import type { LoaderFunction } from "react-router-dom";
import type { LazyComponent } from "Components/Tools";

export interface IRoute {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: ComponentType;
  loader?: LoaderFunction;
}

export interface ILazyRoute {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: LazyComponent;
  loader?: LoaderFunction;
}

export interface IRedirect {
  path: string;
  element: ReactNode;
}

export type NestedRoutes = (IRoute | ILazyRoute | IRedirect)[];
