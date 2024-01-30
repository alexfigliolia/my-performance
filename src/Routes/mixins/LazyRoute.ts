import type { NonIndexRouteObject } from "react-router-dom";
import type { LazyComponent } from "Components/LazyComponent";
import type { ILazyRoute, NestedRoutes } from "./types";

export class LazyRoute<T> implements NonIndexRouteObject {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: LazyComponent;
  loader?: () => Promise<T>;
  constructor(options: ILazyRoute<T>) {
    this.id = options.id;
    this.path = options.path;
    this.loader = options.loader;
    this.children = options.children;
    this.Component = options.Component;
  }

  public preload() {
    return this.Component.preload();
  }
}
