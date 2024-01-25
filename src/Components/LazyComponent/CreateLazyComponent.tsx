import type { ComponentType } from "react";
import React, { Component, Suspense } from "react";
import { LoadingStatus, type Props, type State } from "./types";
import type { PropLess } from "Tools/Types";

export const CreateLazyComponent = <T extends Props>(props: T) => {
  return class LazyComponent extends Component<PropLess, State> {
    private Component: ComponentType | null = null;
    public state: State = { status: LoadingStatus.PENDING };
    constructor(props: PropLess) {
      super(props);
      void this.load();
    }

    public static preload() {
      return props.loader();
    }

    private async load() {
      try {
        this.Component = await props.loader();
        this.setState({ status: LoadingStatus.RESOLVED });
      } catch (error) {
        this.setState({ status: LoadingStatus.ERROR });
      }
    }

    public override render() {
      const { boundary, fallback } = props;
      switch (this.state.status) {
        case LoadingStatus.ERROR:
          return boundary || null;
        case LoadingStatus.PENDING:
        case LoadingStatus.RESOLVED:
        default: {
          const Component = this.Component;
          return (
            <Suspense fallback={fallback}>
              {Component ? <Component /> : Component}
            </Suspense>
          );
        }
      }
    }
  };
};
