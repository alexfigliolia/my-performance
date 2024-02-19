import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Waves } from "Components/Waves";
import { useScreen } from "State/Screen";
import type { PropLess } from "Types/React";
import "./styles.scss";

export default function Auth(_: PropLess) {
  const height = useScreen(state => state.height);
  return (
    <Fragment>
      <main className="auth-screen" style={{ height }}>
        <div>
          <Outlet />
        </div>
        <Waves id="authGradient" />
      </main>
    </Fragment>
  );
}
