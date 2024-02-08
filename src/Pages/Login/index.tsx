import type { ChangeEvent, FormEvent } from "react";
import React, { Component } from "react";
import type { TimedPromiseRejection } from "@figliolia/promises";
import { TimedPromise } from "@figliolia/promises";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LoginInput } from "Components/LoginInput";
import type { LoginMutation, LoginMutationVariables } from "GQL";
import { GQLRequest, loginMutation } from "GQL";
import { Navigation } from "State/Navigation";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";

export default class Login extends Component<PropLess, State> {
  public state: State = {
    name: "",
    error: "",
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
    // TODO - client side validation
    this.setState({ loading: true, error: "" }, () => void this.login());
  };

  private async login() {
    try {
      const { remainingMS } = await new TimedPromise(
        () => this.loginQuery(),
        1000,
      ).run();
      TaskQueue.deferTask(() => {
        void Navigation.navigate("/");
      }, remainingMS);
    } catch (error) {
      const { result, remainingMS } = error as TimedPromiseRejection<Error>;
      TaskQueue.deferTask(() => {
        this.setState({ error: result.message, loading: false });
      }, remainingMS);
    }
  }

  private loginQuery() {
    const { email, password } = this.state;
    return GQLRequest<LoginMutation, LoginMutationVariables>({
      query: loginMutation,
      variables: {
        email,
        password,
      },
    });
  }

  public override render() {
    const { email, password, loading, error } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.onSubmit} action="">
        <p className="subject">{error}&nbsp;</p>
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
        <LoginButton text="Login" loading={loading} />
        <FormLink text="New here?" href="/login/sign-up" linkText="Sign Up!" />
      </form>
    );
  }
}

interface State {
  name: string;
  email: string;
  error: string;
  password: string;
  loading: boolean;
}
