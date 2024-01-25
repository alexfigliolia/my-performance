import type { NonIndexRouteObject } from "react-router-dom";
import { BaseRoute } from "./BaseRoute";

export class Route<T> extends BaseRoute<T> implements NonIndexRouteObject {}
