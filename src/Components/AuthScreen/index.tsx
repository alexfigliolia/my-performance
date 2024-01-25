import React from "react";
import type { FormEvent, ReactNode } from "react";
import { connectScreen } from "State/Screen";
import type { IScreen } from "Models/types";
import "./styles.scss";
import { LogoLarge } from "Components/LogoLarge";

const AuthScreen = ({ height, children, onSubmit }: Props) => {
  return (
    <main className="auth-screen" style={{ height }}>
      <div>
        <LogoLarge />
        <form autoComplete="off" onSubmit={onSubmit} action="">
          {children}
        </form>
      </div>
    </main>
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
