import type { ReactNode } from "react";
import { Component } from "react";
import { createPortal } from "react-dom";

export class Portal extends Component<Props> {
  node: HTMLElement | null = null;
  constructor(props: Props) {
    super(props);
    this.node = document.getElementById(this.props.ID || "core");
  }

  public override render() {
    if (!this.node) {
      return null;
    }
    return createPortal(this.props.children, this.node);
  }
}

interface Props {
  ID?: string;
  children: ReactNode;
}
