import React, { Component } from "react";
import { SVGGradient } from "Components/Gradients/SVGGradient";
import CSSVars from "Styles/exports.module.scss";

export class BrandGradient extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <SVGGradient
        id={this.props.id}
        color1={CSSVars.purple}
        color2={CSSVars.teal}
      />
    );
  }
}

interface Props {
  id: string;
}
