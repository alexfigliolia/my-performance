import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "Components/Header";
import { IndexScreen } from "Components/IndexScreen";
import { MobileMenu } from "Components/MobileMenu";
import { Organizations } from "State/Organizations";
import type { PropLess } from "Tools/Types";

export default class CoreLayout extends Component<PropLess> {
  constructor(props: PropLess) {
    super(props);
    void Organizations.initialize();
  }

  public override render() {
    return (
      <Fragment>
        <Header />
        <IndexScreen>
          <Outlet />
        </IndexScreen>
        <MobileMenu />
      </Fragment>
    );
  }
}
