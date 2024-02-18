import type { ComponentType } from "react";

export type UnProppedComponent = ComponentType<Record<string, never>>;

export type Loader = () => Promise<{ default: ComponentType }>;

export type LazyComponent = UnProppedComponent & {
  preload: Loader;
};
