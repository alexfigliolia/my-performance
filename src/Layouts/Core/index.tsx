import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "Components/Header";
import { IndexScreen } from "Components/IndexScreen";
import { MobileMenu } from "Components/MobileMenu";
import type { PropLess } from "Tools/Types";

export default function Core(_: PropLess) {
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
