import React, { Component } from "react";
import { BrandGradient } from "Components/Gradients";
import "./styles.scss";

export class TriangleLoader extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { ID } = this.props;
    return (
      <div className="triangle-loader">
        <div>
          <svg viewBox="0 0 86 80">
            <polygon
              points="43 8 79 72 7 72"
              style={{ "--triangle-gradient": `url(#${ID})` }}
            />
            <BrandGradient id={ID} />
          </svg>
        </div>
      </div>
    );
  }
}

interface Props {
  ID: string;
}
