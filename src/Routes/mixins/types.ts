import type { LazyComponent } from "Components/LazyComponent";

export interface IRoute<T> {
  id?: string;
  path?: string;
  children?: IRoute<T>[];
  Component: LazyComponent;
  loader?: () => Promise<T>;
}
