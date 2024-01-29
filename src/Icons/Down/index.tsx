import React, { Component } from "react";

export class Down extends Component {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M17,14.56H15v-11a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v11H7a1,1,0,0,0-.91.58,1,1,0,0,0,.14,1.06l4.23,5.08a2,2,0,0,0,3.08,0l4.23-5.08a1,1,0,0,0,.14-1.06A1,1,0,0,0,17,14.56Z" />
      </svg>
    );
  }
}
