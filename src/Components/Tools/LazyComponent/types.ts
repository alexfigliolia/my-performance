import type { ComponentType } from "react";
import type { PropLess } from "Types/React";

export type Loader = () => Promise<{ default: ComponentType<PropLess> }>;

export type LazyComponent = ComponentType<PropLess> & {
  preload: Loader;
};
