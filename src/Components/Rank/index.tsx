import React, { Component } from "react";
import { Numbers } from "Tools/Numbers";
import "./styles.scss";

export class Rank extends Component<Props> {
  public override shouldComponentUpdate({ rank }: Props) {
    return rank !== this.props.rank;
  }

  public override render() {
    const { rank } = this.props;
    return (
      <div className="rank">
        <div>
          <span>{rank}</span>
          <span>{Numbers.getOrdinal(rank)}</span>
        </div>
        <span>Rank</span>
      </div>
    );
  }
}

interface Props {
  rank: number;
}
