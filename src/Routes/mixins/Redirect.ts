import type { ReactNode } from "react";
import type { IRedirect } from "./types";
import type { NonIndexRouteObject } from "react-router-dom";

export class Redirect implements NonIndexRouteObject {
  path: string;
  element: ReactNode;
  constructor(options: IRedirect) {
    this.path = options.path;
    this.element = options.element;
  }
}
