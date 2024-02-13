import React, { Component } from "react";
import { Check } from "Icons/Check";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export class ActionComplete extends Component<OptionalChildren> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="action-complete">
        <Check>{this.props.children}</Check>
      </div>
    );
  }
}
