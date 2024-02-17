import React, { Component } from "react";
import { v4 as UUID } from "uuid";
import { ActionComplete } from "Components/ActionComplete";
import { BrandGradient } from "Components/BrandGradient";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import { Onboarding } from "State/Onboarding";
import { Environment } from "Tools/Environment";
import type { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export class PlatformAuthorizers extends Component<Props> {
  private ID = UUID();
  private readonly GITHUB_BASE_URL = this.props.githubURL;
  private readonly GITHUB_SCOPES = ["repo", "user", "read:org"];
  private readonly githubAuthorizationURL = `${this.GITHUB_BASE_URL}?client_id=${Environment.GITHUB_CLIENT_ID}&scopes=${this.GITHUB_SCOPES.join(" ")}&redirect_uri=${this.props.redirect}&state=${this.ID}`;

  public override shouldComponentUpdate({ github, bitbucket }: Props) {
    const curProps = this.props;
    if (github !== curProps.github) return true;
    return bitbucket !== curProps.bitbucket;
  }

  private cacheID = () => {
    Onboarding.cacheID(this.ID);
  };

  public override render() {
    const { github, bitbucket } = this.props;
    return (
      <div className="platform-authorizers">
        <div className="row">
          <a
            onClick={this.cacheID}
            className="platform-connector github"
            href={this.githubAuthorizationURL}>
            <Github />
            Github
            {github && (
              <ActionComplete>
                <BrandGradient id="ghlogo" />
              </ActionComplete>
            )}
          </a>
          <button className="platform-connector bitbucket">
            <Bitbucket />
            Bitbucket
            {bitbucket && (
              <ActionComplete>
                <BrandGradient id="bblogo" />
              </ActionComplete>
            )}
          </button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

interface Props extends OptionalChildren {
  redirect: string;
  github?: boolean;
  githubURL: string;
  bitbucket?: boolean;
}
