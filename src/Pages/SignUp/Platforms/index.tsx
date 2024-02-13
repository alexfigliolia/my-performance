import type { MouseEvent } from "react";
import React, { Component } from "react";
import { v4 as UUID } from "uuid";
import type { TimedPromiseRejection } from "@figliolia/promises";
import { TimedPromise } from "@figliolia/promises";
import { ActionComplete } from "Components/ActionComplete";
import { BrandGradient } from "Components/BrandGradient";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LogoLarge } from "Components/LogoLarge";
import { SizeObserver } from "Components/SizeObserver";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import { Navigation } from "State/Navigation";
import { Onboarding } from "State/Onboarding";
import { Environment } from "Tools/Environment";
import { PersistedStorage } from "Tools/PersistedStorage";
import { TaskQueue } from "Tools/TaskQueue";
import "url-search-params-polyfill";
import "./styles.scss";

export class Platforms extends Component<Props, State> {
  private UUID = UUID();
  public state: State = {
    github: false,
    bitbucket: false,
    loading: false,
  };
  private readonly GITHUB_BASE_URL = "https://github.com/login/oauth/authorize";
  private readonly githubAuthorizationURL = `${this.GITHUB_BASE_URL}?client_id=${Environment.GITHUB_CLIENT_ID}&state=${this.UUID}`;

  public override componentDidMount() {
    const params = new URLSearchParams(Navigation.getState().search);
    const code = params.get("code");
    const ID = params.get("state");
    if (code && ID === PersistedStorage.get("GITHUB_ID")) {
      this.setState({ github: true });
    }
  }

  public override shouldComponentUpdate(_: Props, nextState: State) {
    return nextState !== this.state;
  }

  private cacheID = () => {
    PersistedStorage.set("GITHUB_ID", this.UUID);
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
        void Navigation.navigate("/");
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
        <div className="platform-actions">
          <a
            onClick={this.cacheID}
            className={`platform-connector github ${github ? "disabled" : ""}`}
            href={this.githubAuthorizationURL}>
            <Github />
            Github
            {github && (
              <ActionComplete>
                <BrandGradient id="ghlogo" />
              </ActionComplete>
            )}
          </a>
          <button
            disabled={bitbucket}
            className={`platform-connector bitbucket ${bitbucket ? "disabled" : ""}`}>
            <Bitbucket />
            Bitbucket
            {bitbucket && (
              <ActionComplete>
                <BrandGradient id="bblogo" />
              </ActionComplete>
            )}
          </button>
        </div>
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
