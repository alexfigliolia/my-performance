import type { ComponentType } from "react";
import type { LoaderFunction, NonIndexRouteObject } from "react-router-dom";
import type { PropLess } from "Types/React";
import type { IRoute, NestedRoutes } from "./types";

export class Route implements NonIndexRouteObject {
  id?: string;
  path?: string;
  children?: NestedRoutes;
  loader?: LoaderFunction;
  Component: ComponentType<PropLess>;
  constructor(options: IRoute) {
    this.id = options.id;
    this.path = options.path;
    this.loader = options.loader;
    this.children = options.children;
    this.Component = options.Component;
  }
}
