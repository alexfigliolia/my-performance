import type { LoaderFunction, NonIndexRouteObject } from "react-router-dom";
import type { LazyComponent } from "Components/Tools";
import type { ILazyRoute, NestedRoutes } from "./types";

export class LazyRoute implements NonIndexRouteObject {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: LazyComponent;
  loader?: LoaderFunction;
  constructor(options: ILazyRoute) {
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
