import type { ChangeEvent, FormEvent } from "react";
import React, { Component } from "react";
import { LoginInput } from "Components/LoginInput";
import { BasicLoader } from "Components/BasicLoader";
import { connectScreen } from "State/Screen";
import type { IScreen } from "Models/types";
import "./styles.scss";

class SignUp extends Component<Props, State> {
  public state: State = {
    name: "",
    email: "",
    password: "",
    loading: false,
  };

  private onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name in this.state) {
      // @ts-ignore
      this.setState({ [name]: value });
    }
  };

  private onSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.setState({ loading: true });
  };

  public override render() {
    const { height } = this.props;
    const { name, email, password, loading } = this.state;
    return (
      <main className="sign-up" style={{ height }}>
        <div>
          <h1>
            <span>my</span>Performance
          </h1>
          <form autoComplete="off" onSubmit={this.onSubmit} action="">
            <LoginInput
              autofocus
              name="name"
              type="string"
              value={name}
              onChange={this.onChange}
            />
            <LoginInput
              name="email"
              type="email"
              value={email}
              onChange={this.onChange}
            />
            <LoginInput
              name="password"
              type="password"
              value={password}
              onChange={this.onChange}
            />
            <button
              className={`submitter ${loading ? "loading" : ""}`}
              type="submit">
              Login
              <BasicLoader />
            </button>
          </form>
        </div>
      </main>
    );
  }
}

interface State {
  name: string;
  email: string;
  password: string;
  loading: boolean;
}

interface Props {
  height: number;
}

const mSTP = ({ height }: IScreen) => {
  return { height };
};

export default connectScreen(mSTP)(SignUp);
