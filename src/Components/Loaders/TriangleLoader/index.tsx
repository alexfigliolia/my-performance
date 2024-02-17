import React, { Component } from "react";
import { BrandGradient } from "Components/BrandGradient";
import "./styles.scss";

export class TriangleLoader extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="triangle-loader">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72" />
          <BrandGradient id="triangleLoader" />
        </svg>
      </div>
    );
  }
}
