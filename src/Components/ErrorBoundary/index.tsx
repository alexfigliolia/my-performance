import { Component } from "react";
import type { ReactNode } from "react";

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { error: false };

  public static getDerivedStateFromError() {
    return { error: true };
  }

  public override render() {
    const { fallback, children } = this.props;
    if (this.state.error) {
      return fallback;
    }

    return children;
  }
}

interface State {
  error: boolean;
}

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}
