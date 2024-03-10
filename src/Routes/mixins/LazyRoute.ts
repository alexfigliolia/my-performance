import type {
  LoaderFunction,
  NonIndexRouteObject,
  ShouldRevalidateFunction,
} from "react-router-dom";
import type { LazyComponent } from "Components/Tools";
import type { ILazyRoute, NestedRoutes } from "./types";

export class LazyRoute implements NonIndexRouteObject {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  loader?: LoaderFunction;
  Component?: LazyComponent;
  shouldRevalidate?: ShouldRevalidateFunction;
  constructor(options: ILazyRoute) {
    this.id = options.id;
    this.path = options.path;
    this.loader = options.loader;
    this.children = options.children;
    this.Component = options.Component;
    this.shouldRevalidate = options.shouldRevalidate;
  }

  public preload() {
    if (this.Component) {
      return this.Component.preload();
    }
  }
}
