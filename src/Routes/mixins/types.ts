import type { ReactNode } from "react";
import type { LazyComponent } from "Components/LazyComponent";

export interface IRoute<T> {
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

export type NestedRoutes = (IRoute<any> | IRedirect)[];
