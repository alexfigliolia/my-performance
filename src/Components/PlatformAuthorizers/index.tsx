import React, { Component } from "react";
import { v4 as UUID } from "uuid";
import { ActionComplete } from "Components/ActionComplete";
import { BrandGradient } from "Components/BrandGradient";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import { Navigation } from "State/Navigation";
import { Onboarding } from "State/Onboarding";
import { Environment } from "Tools/Environment";
import type { Callback, OptionalChildren } from "Tools/Types";
import "./styles.scss";

export class PlatformAuthorizers extends Component<Props> {
  private UUID = UUID();
  private readonly GITHUB_REDIRECT_URL =
    this.props.githubRedirectURL || "https://localhost:3000/login/sign-up";
  private readonly GITHUB_BASE_URL = "https://github.com/login/oauth/authorize";
  private readonly githubAuthorizationURL = `${this.GITHUB_BASE_URL}?client_id=${Environment.GITHUB_CLIENT_ID}&state=${this.UUID}&redirect_uri=${this.GITHUB_REDIRECT_URL}`;

  public override componentDidMount() {
    const params = new URLSearchParams(Navigation.getState().search);
    const code = params.get("code");
    const ID = params.get("state");
    if (code && ID === Onboarding.getCached("code")) {
      Onboarding.setCode(code);
      void this.props.onGithub();
    }
  }

  public override shouldComponentUpdate({
    githubComplete,
    bitbucketComplete,
    children,
  }: Props) {
    const curProps = this.props;
    if (githubComplete !== curProps.githubComplete) return true;
    if (bitbucketComplete !== curProps.bitbucketComplete) return true;
    return children !== curProps.children;
  }

  private cacheID = () => {
    Onboarding.setCached("code", this.UUID);
  };

  public override render() {
    const { githubComplete, bitbucketComplete, children } = this.props;
    return (
      <div className="platform-authorizers">
        <div className="row">
          <a
            onClick={this.cacheID}
            className={`platform-connector github ${githubComplete ? "disabled" : ""}`}
            href={this.githubAuthorizationURL}>
            <Github />
            Github
            {githubComplete && (
              <ActionComplete>
                <BrandGradient id="ghlogo" />
              </ActionComplete>
            )}
          </a>
          <button
            className={`platform-connector bitbucket ${bitbucketComplete ? "disabled" : ""}`}>
            <Bitbucket />
            Bitbucket
            {bitbucketComplete && (
              <ActionComplete>
                <BrandGradient id="bblogo" />
              </ActionComplete>
            )}
          </button>
        </div>
        {children}
      </div>
    );
  }
}

interface Props extends OptionalChildren {
  onGithub: Callback;
  onBitbucket: Callback;
  githubComplete?: boolean;
  bitbucketComplete?: boolean;
  githubRedirectURL?: string;
}
