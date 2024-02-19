import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { IndexScreen } from "Components/Layouts";
import { Header, MobileMenu } from "Components/Navigation";
import type { PropLess } from "Types/React";

export default function CoreLayout(_: PropLess) {
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
