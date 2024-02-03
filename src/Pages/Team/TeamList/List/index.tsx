import React, { Component } from "react";
import { SizeObserver } from "Components/SizeObserver";
import { Teammate } from "Components/Teammate";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { Controller } from "./Controller";
import "./styles.scss";

export class ListRenderer extends Component<Props, State> {
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

  public override shouldComponentUpdate({ team }: Props) {
    return team.length !== this.props.team.length;
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

  private onResize = (width: number) => {
    this.controller.resize(width);
  };

  public override render() {
    return (
      <SizeObserver
        width
        Tag="div"
        emitOnMount
        className="list"
        domRef={this.cache}
        onResize={this.onResize}>
        {this.props.team.map(person => {
          return <Teammate key={person} name={person} />;
        })}
      </SizeObserver>
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
  list: string[];
}

export const List = connectTeam(mSTP)(ListRenderer);
