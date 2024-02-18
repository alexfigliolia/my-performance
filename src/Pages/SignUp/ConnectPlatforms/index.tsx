import React, { Component } from "react";
import { FormLink } from "Components/FormLink";
import { TriangleLoader } from "Components/Loaders";
import { LoginButton } from "Components/LoginButton";
import { PlatformAuthorizers } from "Components/PlatformAuthorizers";
import type { IOnboarding, Networking } from "Models/Onboarding";
import { connectOnboarding, Onboarding } from "State/Onboarding";
import { Slide } from "../Slide";
import "./styles.scss";

export class ConnectPlatform extends Component<Props, State> {
  public state: State = { loading: false };
  private Subscription?: Networking | null = null;

  public override shouldComponentUpdate({ github }: Props, { loading }: State) {
    if (github !== this.props.github) return true;
    return loading !== this.state.loading;
  }

  public override componentWillUnmount() {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
      this.Subscription = null;
    }
  }

  private submit = () => {
    this.setState({ loading: true });
    this.Subscription = Onboarding.listenForInstallation();
  };

  public override render() {
    const { onHeight, previous, github } = this.props;
    return (
      <Slide onHeight={onHeight}>
        <p className="subject">
          Connect your <strong>Git</strong> Providers
        </p>
        <PlatformAuthorizers
          github={github}
          redirect="https://localhost:3000/login/sign-up"
          githubURL="https://github.com/apps/my-performance/installations/new"
        />
        <div className="sign-up-actions">
          <LoginButton text="Back" onClick={previous} loading={false} />
          <LoginButton
            text="Submit"
            onClick={this.submit}
            loading={this.state.loading}>
            <TriangleLoader ID="platformConnectionLoader" />
          </LoginButton>
        </div>
        <FormLink text="Have an account?" href="/login" linkText="Login!" />
      </Slide>
    );
  }
}

interface Props {
  github: boolean;
  previous: () => void;
  onHeight: (height: number) => void;
}

interface State {
  loading: boolean;
}

const mSTP = (_: IOnboarding) => {
  return { github: Onboarding.validInstallation };
};

export const ConnectPlatforms = connectOnboarding(mSTP)(ConnectPlatform);
