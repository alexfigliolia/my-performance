import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Waves } from "Components/Waves";
import type { IScreen } from "Models/types";
import { connectScreen } from "State/Screen";
import "./styles.scss";

function Auth({ height }: Props) {
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

interface Props {
  height: number;
}

const mSTP = ({ height }: IScreen) => {
  return { height };
};

export default connectScreen(mSTP)(Auth);
