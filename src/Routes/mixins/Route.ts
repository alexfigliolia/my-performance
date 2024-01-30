import type { ComponentType } from "react";
import type { NonIndexRouteObject } from "react-router-dom";
import type { IRoute, NestedRoutes } from "./types";

export class Route<T> implements NonIndexRouteObject {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  Component: ComponentType;
  loader?: () => Promise<T>;
  constructor(options: IRoute<T>) {
    this.id = options.id;
    this.path = options.path;
    this.loader = options.loader;
    this.children = options.children;
    this.Component = options.Component;
  }
}
