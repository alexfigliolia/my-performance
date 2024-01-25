import type { ComponentType, ReactNode } from "react";

export type UnProppedComponent = ComponentType<Record<string, never>>;

export type LazyComponent = UnProppedComponent & {
  preload: () => Promise<UnProppedComponent>;
};

export interface Props {
  boundary?: ReactNode;
  fallback?: ReactNode;
  loader: () => Promise<ComponentType>;
}

export interface State {
  status: LoadingStatus;
}

export enum LoadingStatus {
  "ERROR" = "ERROR",
  "PENDING" = "PENDING",
  "RESOLVED" = "RESOLVED",
}
