import React, { Component } from "react";
import { SizeObserver } from "Components/SizeObserver";
import { Teammate } from "Components/Teammate";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { Controller } from "./Controller";
import "./styles.scss";

export class ListRenderer extends Component<Props, State> {
  public state: State = { height: undefined };
  controller = new Controller();

  public override componentDidMount() {
    this.controller.initialize(this.props.search);
  }

  public override UNSAFE_componentWillReceiveProps({
    search,
  }: Readonly<Props>) {
    if (search !== this.props.search) {
      this.controller.search(search);
    }
  }

  public override shouldComponentUpdate({ team }: Props, { height }: State) {
    if (team.length !== this.props.team.length) return true;
    return height !== this.state.height;
  }

  public override componentDidUpdate(pp: Props) {
    if (pp.team.length !== this.props.team.length) {
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
          {this.props.team.map(person => {
            return <Teammate key={person} name={person} />;
          })}
        </SizeObserver>
      </div>
    );
  }
}

const mSTP = ({ team, search }: ITeam) => {
  return { team, search };
};

interface Props {
  search: string;
  team: string[];
}

interface State {
  height: number | undefined;
}

export const List = connectTeam(mSTP)(ListRenderer);
