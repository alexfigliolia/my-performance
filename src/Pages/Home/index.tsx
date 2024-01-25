import React, { Component, Fragment } from "react";
import { Header } from "Components/Header";
import type { PropLess } from "Tools/Types";
import { MobileMenu } from "Components/MobileMenu";

export default class Home extends Component<PropLess> {
  public override render() {
    return (
      <Fragment>
        <main className="dashboard">
          <Header />
          <div>hello</div>
        </main>
        <MobileMenu />
      </Fragment>
    );
  }
}
