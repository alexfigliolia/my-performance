import React, { Fragment } from "react";
import type { FormEvent, ReactNode } from "react";
import { connectScreen } from "State/Screen";
import type { IScreen } from "Models/types";
import { LogoLarge } from "Components/LogoLarge";
import { Waves } from "Components/Waves";
import "./styles.scss";

const AuthScreen = ({ height, children, onSubmit }: Props) => {
  return (
    <Fragment>
      <main className="auth-screen" style={{ height }}>
        <div>
          <LogoLarge />
          <form autoComplete="off" onSubmit={onSubmit} action="">
            {children}
          </form>
        </div>
      </main>
      <Waves id="authGradient" />
    </Fragment>
  );
};

interface Props {
  height: number;
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
}

const mSTP = ({ height }: IScreen) => {
  return { height };
};

export default connectScreen(mSTP)(AuthScreen);
