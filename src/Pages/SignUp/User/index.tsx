import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import React, { Component, Fragment } from "react";
import type { TimedPromiseRejection } from "@figliolia/promises";
import { TimedPromise } from "@figliolia/promises";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LoginInput } from "Components/LoginInput";
import { SizeObserver } from "Components/SizeObserver";
import type { IOnboarding } from "Models/types";
import { Navigation } from "State/Navigation";
import { connectOnboarding, Onboarding } from "State/Onboarding";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

class UserInfoForm extends Component<Props, State> {
  public state: State = { loading: false, error: "" };

  public override shouldComponentUpdate(
    { email, password, name }: Props,
    { loading }: State,
  ) {
    if (email !== this.props.email) return true;
    if (password !== this.props.password) return true;
    if (name !== this.props.name) return true;
    return loading !== this.state.loading;
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (Onboarding.validKey(name)) {
      Onboarding.set(name, value);
    }
  };

  private submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, email, password } = this.props;
    if (!name || !email || !password) {
      // TODO - improve client validations
      return this.setState({ loading: false });
    }
    void this.onBoard();
  };

  private async onBoard() {
    const TP = new TimedPromise(() => Onboarding.onboard(), 1000);
    try {
      const { remainingMS } = await TP.run();
      TaskQueue.deferTask(() => {
        this.setState({ loading: false, error: "" });
        void Navigation.navigate("/");
      }, remainingMS);
    } catch (error) {
      const { remainingMS, result } = error as TimedPromiseRejection<Error>;
      TaskQueue.deferTask(() => {
        this.setState({ loading: false, error: result.message });
      }, remainingMS);
    }
  }

  public override render() {
    const { error, loading } = this.state;
    const { name, email, password, onResize, previousSlide } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.submit} action="">
        <SizeObserver
          height
          Tag="div"
          emitOnMount
          onSizeChange={onResize}
          className="size-controller">
          {error ? (
            <p className="subject">{error}</p>
          ) : (
            <Fragment>
              <p className="subject">Next Up!</p>
              <p className="subject">
                A little bit about <strong>you!</strong>
              </p>
            </Fragment>
          )}
          <LoginInput
            type="text"
            label="Name"
            name="name"
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
          <div className="form-actions">
            <LoginButton
              text="back"
              type="button"
              loading={false}
              onClick={previousSlide}
            />
            <LoginButton text="Submit" loading={loading} />
          </div>
          <FormLink text="Have an account?" href="/login" linkText="Login!" />
        </SizeObserver>
      </form>
    );
  }
}

interface Props {
  email: string;
  name: string;
  password: string;
  onResize: (width: number, height: number) => void;
  previousSlide: (e: MouseEvent<HTMLButtonElement>) => void;
}
interface State {
  error: string;
  loading: boolean;
}

const mSTP = ({ name, email, password }: IOnboarding) => {
  return { name, email, password };
};

export const User = connectOnboarding(mSTP)(UserInfoForm);
