import React, { Component } from "react";
import { Tile } from "Components/Layouts";
import type { PropLess } from "Tools/Types";
import { PlatformGrants } from "./PlatformGrants";

export class Access extends Component<PropLess> {
  public override render() {
    return (
      <Tile
        heading="Platform Access"
        subheading="Here you'll find links to connect to the platforms hosting your projects">
        <PlatformGrants />
      </Tile>
    );
  }
}
