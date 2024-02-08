import type { HTMLAttributes, JSX, ReactNode } from "react";
import React, { Component } from "react";

export class SizeObserver extends Component<Props> {
  width = 0;
  height = 0;
  node?: HTMLElement;
  observer: ResizeObserver;
  constructor(props: Props) {
    super(props);
    this.observer = new ResizeObserver(this.parse);
  }

  public override componentDidMount() {
    if (this.node) {
      const { height, width } = this.node.getBoundingClientRect();
      this.width = width;
      this.height = height;
      this.observer.observe(this.node);
      if (this.props.emitOnMount) {
        this.emit();
      }
    }
  }

  private parse = (entries: ResizeObserverEntry[]) => {
    const { height, width } = this.props;
    const N = entries.length - 1;
    for (let i = N; i > -1; i--) {
      const blocks = entries[i].borderBoxSize;
      const M = blocks.length - 1;
      for (let j = M; j > -1; j--) {
        const { blockSize, inlineSize } = blocks[j];
        let emit = false;
        if (height && blockSize !== this.height) {
          emit = true;
          this.height = blockSize;
        } else if (width && inlineSize !== this.width) {
          emit = true;
          this.width = inlineSize;
        }
        if (emit) {
          this.emit();
        }
      }
    }
  };

  private emit() {
    return this.props.onSizeChange(this.width, this.height);
  }

  private cache = (node: HTMLElement) => {
    this.node = node;
    this.props.domRef?.(node);
  };

  public override render() {
    const { Tag, id, children, className } = this.props;
    return (
      // @ts-ignore
      <Tag id={id} className={className} ref={this.cache}>
        {children}
      </Tag>
    );
  }
}

export interface Props extends HTMLAttributes<HTMLElement> {
  id?: string;
  width?: boolean;
  height?: boolean;
  className?: string;
  children: ReactNode;
  emitOnMount?: boolean;
  domRef?: (node: HTMLElement) => void;
  Tag: Extract<keyof JSX.IntrinsicElements, string>;
  onSizeChange: (width: number, height: number) => void;
}
