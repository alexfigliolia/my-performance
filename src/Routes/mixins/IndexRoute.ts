import type { IndexRouteObject } from "react-router-dom";
import { BaseRoute } from "./BaseRoute";

export class IndexRoute<T> extends BaseRoute<T> implements IndexRouteObject {
  readonly index = true;
}
