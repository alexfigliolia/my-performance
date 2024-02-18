import type { ComponentType, ReactNode } from "react";
import type { LazyComponent } from "Components/Tools";

export interface IRoute<T> {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: ComponentType;
  loader?: () => Promise<T>;
}

export interface ILazyRoute<T> {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: LazyComponent;
  loader?: () => Promise<T>;
}

export interface IRedirect {
  path: string;
  element: ReactNode;
}

export type NestedRoutes = (IRoute<any> | ILazyRoute<any> | IRedirect)[];
