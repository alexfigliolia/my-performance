import React, { Component } from "react";
import { Device } from "Tools/Device";
import { DefaultSelect } from "./DefaultSelect";
import { MobileSelect } from "./MobileSelect";
import type { Props } from "./types";
import "./styles.scss";

export class DropDown extends Component<Props> {
  public override render() {
    return (
      <div className="drop-down">
        {Device.isMobile ? (
          <MobileSelect {...this.props} />
        ) : (
          <DefaultSelect {...this.props} />
        )}
      </div>
    );
  }
}
