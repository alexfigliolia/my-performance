import type { MutableRefObject, ReactNode } from "react";
import React, { Component } from "react";
import { SizeObserver } from "Components/Tools";
import { Controller } from "./Controller";
import "./styles.scss";

export class MasonryList<T> extends Component<Props<T>> {
  private controller = new Controller();

  public override componentDidMount() {
    this.controller.initialize(this.props.search);
  }

  public override UNSAFE_componentWillReceiveProps({
    search,
  }: Readonly<Props<T>>) {
    if (search !== this.props.search) {
      this.controller.search(search);
    }
  }

  public override shouldComponentUpdate({ list }: Readonly<Props<T>>) {
    return list !== this.props.list;
  }

  public override componentDidUpdate(pp: Props<T>) {
    if (pp.list !== this.props.list) {
      this.controller.applyDOMUpdate();
    }
  }

  public override componentWillUnmount() {
    this.controller.destroy();
  }

  private cache = (node: HTMLElement) => {
    this.controller.registerNode(node);
    this.hoistRef(node);
  };

  private hoistRef(node: HTMLElement) {
    const { domRef } = this.props;
    if (domRef) {
      if ("current" in domRef) {
        domRef.current = node;
      } else {
        domRef(node);
      }
    }
  }

  private onResize = (width: number, height: number) => {
    this.controller.resize(width);
    this.props.onResize?.(width, height);
  };

  public override render() {
    const { list, renderItem } = this.props;
    return (
      <div className="list-container">
        <SizeObserver
          width
          height
          Tag="div"
          emitOnMount
          className="list"
          domRef={this.cache}
          onSizeChange={this.onResize}>
          {list.map((item, i) => renderItem(item, i, list))}
        </SizeObserver>
      </div>
    );
  }
}

export type RenderItemFN<T> = (item: T, index: number, list: T[]) => ReactNode;

export type Props<T> = {
  list: T[];
  search?: string;
  renderItem: RenderItemFN<T>;
  onResize?: (height: number, width: number) => void;
  domRef?: MutableRefObject<HTMLElement | null> | ((node: HTMLElement) => void);
};
