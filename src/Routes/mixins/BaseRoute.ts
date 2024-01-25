import type { LazyComponent } from "Components/LazyComponent";
import type { IRoute } from "./types";

export class BaseRoute<T> {
  id?: string;
  path?: string;
  loader?: () => Promise<T>;
  Component: LazyComponent;
  constructor(options: IRoute<T>) {
    this.id = options.id;
    this.path = options.path;
    this.loader = options.loader;
    this.Component = options.Component;
  }

  public preload() {
    return this.Component.preload();
  }
}
