import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { connectScreen } from "State/Screen";
import type { IScreen } from "Models/types";
import { LogoLarge } from "Components/LogoLarge";
import { Waves } from "Components/Waves";
import "./styles.scss";

function Auth({ height }: Props) {
  return (
    <Fragment>
      <main className="auth-screen" style={{ height }}>
        <div>
          <LogoLarge />
          <Outlet />
        </div>
      </main>
      <Waves id="authGradient" />
    </Fragment>
  );
}

interface Props {
  height: number;
}

const mSTP = ({ height }: IScreen) => {
  return { height };
};

export default connectScreen(mSTP)(Auth);
