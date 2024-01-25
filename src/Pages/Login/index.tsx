import type { ChangeEvent, FormEvent } from "react";
import React, { Component } from "react";
import AuthScreen from "Components/AuthScreen";
import { LoginInput } from "Components/LoginInput";
import { BasicLoader } from "Components/BasicLoader";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export default class Login extends Component<PropLess, State> {
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
    const { email, password, loading } = this.state;
    return (
      <AuthScreen onSubmit={this.onSubmit}>
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
      </AuthScreen>
    );
  }
}

interface State {
  name: string;
  email: string;
  password: string;
  loading: boolean;
}
