import type { ReactNode } from "react";
import type { NonIndexRouteObject } from "react-router-dom";
import type { IRedirect } from "./types";

export class Redirect implements NonIndexRouteObject {
  path: string;
  element: ReactNode;
  constructor(options: IRedirect) {
    this.path = options.path;
    this.element = options.element;
  }
}
