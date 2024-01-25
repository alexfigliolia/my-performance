import type { LazyComponent } from "Components/LazyComponent";

export interface IRoute<T> {
  id?: string;
  path?: string;
  Component: LazyComponent;
  loader?: () => Promise<T>;
}
