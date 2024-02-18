import type { ReactNode } from "react";
import React, { Component } from "react";
import { SizeObserver } from "Components/Tools";
import { Controller } from "./Controller";
import "./styles.scss";

export class MasonryList<T> extends Component<Props<T>, State> {
  public state: State = { height: undefined };
  controller = new Controller();

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

  public override shouldComponentUpdate({ list }: Props<T>, { height }: State) {
    if (list.length !== this.props.list.length) return true;
    return height !== this.state.height;
  }

  public override componentDidUpdate(pp: Props<T>) {
    if (pp.list.length !== this.props.list.length) {
      this.controller.applyDOMUpdate();
    }
  }

  public override componentWillUnmount() {
    this.controller.destroy();
  }

  private cache = (node: HTMLElement) => {
    this.controller.registerNode(node);
  };

  private onResize = (width: number, height: number) => {
    this.controller.resize(width);
    if (height !== this.state.height && !this.props.search) {
      this.setState({ height });
    }
  };

  public override render() {
    const { list, renderItem } = this.props;
    return (
      <div className="list-container" style={{ minHeight: this.state.height }}>
        <SizeObserver
          width
          height
          Tag="div"
          emitOnMount
          className="list"
          domRef={this.cache}
          onSizeChange={this.onResize}>
          {list.map(item => renderItem(item))}
        </SizeObserver>
      </div>
    );
  }
}

interface Props<T> {
  list: T[];
  search: string;
  renderItem: (item: T) => ReactNode;
}

interface State {
  height: number | undefined;
}
