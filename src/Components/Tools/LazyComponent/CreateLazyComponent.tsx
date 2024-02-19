import type { ReactNode } from "react";
import React, { Component, lazy, Suspense } from "react";
import { ErrorBoundary } from "Components/Tools/ErrorBoundary";
import type { PropLess } from "Types/React";
import type { Loader } from "./types";

export const CreateLazyComponent = <T extends Props>(props: T) => {
  return class LazyComponent extends Component<PropLess> {
    private Component = lazy(() => props.loader());

    public static preload() {
      return props.loader();
    }

    public override render() {
      const { boundary, fallback } = props;
      const Component = this.Component;
      return (
        <ErrorBoundary fallback={boundary}>
          <Suspense fallback={fallback}>
            <Component />
          </Suspense>
        </ErrorBoundary>
      );
    }
  };
};

export interface Props {
  loader: Loader;
  boundary?: ReactNode;
  fallback?: ReactNode;
}
