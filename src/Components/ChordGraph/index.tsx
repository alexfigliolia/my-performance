import React, { Component } from "react";
import { Controller } from "./Controller";
import CSSVars from "Styles/exports.module.scss";
import "./styles.scss";

export class ChordGraph extends Component<Props> {
  private size = parseInt(CSSVars.graphHeight.slice(0, -2)) + 20;
  private controller: Controller;
  constructor(props: Props) {
    super(props);
    const { id, labels, data } = this.props;
    this.controller = new Controller(id, {
      data,
      labels,
      size: this.size,
    });
  }

  public override componentDidMount() {
    this.controller.create();
  }

  public override UNSAFE_componentWillReceiveProps(props: Props) {
    if (props !== this.props) {
      this.controller.update(props.data, props.labels);
    }
  }

  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { id } = this.props;
    return (
      <div className="chord-graph">
        <div>
          <svg id={id} className="chord-root" />
        </div>
      </div>
    );
  }
}

interface Props {
  id: string;
  labels: string[];
  data: number[][];
}
