import type { MouseEvent } from "react";
import React, { Component } from "react";
import type { TimedPromiseRejection } from "@figliolia/promises";
import { TimedPromise } from "@figliolia/promises";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LogoLarge } from "Components/LogoLarge";
import { PlatformAuthorizers } from "Components/PlatformAuthorizers";
import { SizeObserver } from "Components/SizeObserver";
import { Navigation } from "State/Navigation";
import { Onboarding } from "State/Onboarding";
import { TaskQueue } from "Tools/TaskQueue";
import "url-search-params-polyfill";
import "./styles.scss";

export class Platforms extends Component<Props, State> {
  public state: State = {
    github: false,
    loading: false,
    bitbucket: false,
  };

  public override shouldComponentUpdate(_: Props, nextState: State) {
    return nextState !== this.state;
  }

  private githubAuthorized = () => {
    this.setState({ github: true });
  };

  private bitbucketAuthorized = () => {
    this.setState({ bitbucket: true });
  };

  private submit = () => {
    const { github, bitbucket } = this.state;
    if (!github && !bitbucket) {
      return;
    }
    this.setState({ loading: true }, () => {
      if (github) {
        void this.onBoard(() => Onboarding.onboardWithGithub());
      }
    });
  };

  private async onBoard(query: () => Promise<any>) {
    const TP = new TimedPromise(query, 1000);
    try {
      const { remainingMS } = await TP.run();
      TaskQueue.deferTask(() => {
        this.setState({ loading: false });
        void Navigation.navigate("/account");
      }, remainingMS);
    } catch (error) {
      const { remainingMS } = error as TimedPromiseRejection<Error>;
      TaskQueue.deferTask(() => {
        this.setState({ loading: false });
      }, remainingMS);
    }
  }

  public override render() {
    const { github, bitbucket, loading } = this.state;
    const { onResize, previousSlide } = this.props;
    return (
      <SizeObserver
        height
        Tag="div"
        emitOnMount
        onSizeChange={onResize}
        className="size-controller platforms">
        <LogoLarge />
        <p className="subject">Connect your platforms</p>
        <PlatformAuthorizers
          githubComplete={github}
          bitbucketComplete={bitbucket}
          onGithub={this.githubAuthorized}
          onBitbucket={this.bitbucketAuthorized}>
          <div className="form-actions">
            <LoginButton
              text="back"
              type="button"
              loading={false}
              onClick={previousSlide}
            />
            <LoginButton
              text="complete"
              loading={loading}
              onClick={this.submit}
            />
          </div>
          <FormLink text="Have an account?" href="/login" linkText="Login!" />
        </PlatformAuthorizers>
      </SizeObserver>
    );
  }
}

interface Props {
  onResize: (width: number, height: number) => void;
  previousSlide: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface State {
  loading: boolean;
  github: boolean;
  bitbucket: boolean;
}
