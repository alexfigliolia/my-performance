import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "Components/Header";
import { MobileMenu } from "Components/MobileMenu";
import { IndexScreen } from "Components/IndexScreen";
import type { PropLess } from "Tools/Types";

export default function Layout(_: PropLess) {
  return (
    <Fragment>
      <Header />
      <IndexScreen id="core">
        <Outlet />
      </IndexScreen>
      <MobileMenu />
    </Fragment>
  );
}
