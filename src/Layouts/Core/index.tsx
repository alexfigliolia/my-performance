import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { IndexScreen } from "Components/Layouts";
import { Header, MobileMenu } from "Components/Navigation";
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
