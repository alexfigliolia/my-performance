import React, { Component } from "react";
import { LogoLarge } from "Components/LogoLarge";
import { SizeObserver } from "Components/SizeObserver";
import type { OptionalChildren } from "Tools/Types";

export class Slide extends Component<Props> {
  private onResize = (_: number, height: number) => {
    this.props.onHeight(height);
  };

  public override render() {
    return (
      <div>
        <SizeObserver height Tag="div" emitOnMount onSizeChange={this.onResize}>
          <LogoLarge />
          {this.props.children}
        </SizeObserver>
      </div>
    );
  }
}

interface Props extends OptionalChildren {
  onHeight: (height: number) => void;
}