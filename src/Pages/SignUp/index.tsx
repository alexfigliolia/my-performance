import type { ChangeEvent, FormEvent } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginInput } from "Components/LoginInput";
import AuthScreen from "Components/AuthScreen";
import { LoginButton } from "Components/LoginButton";
import type { PropLess } from "Tools/Types";

export default class SignUp extends Component<PropLess, State> {
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
    const { name, email, password, loading } = this.state;
    return (
      <AuthScreen onSubmit={this.onSubmit}>
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
        <LoginButton text="Sign Up" loading={loading} />
        <span className="form-link">
          Have an account already? <Link to="/login">Login!</Link>
        </span>
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
