import React, { Component } from "react";
import { ActionComplete } from "Components/ActionComplete";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import type { IPlatform } from "Models/Platform";
import { connectPlatforms } from "State/Platform";
import "./styles.scss";

export class Grants extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  private openGithubAccess = () => {
    return window.open(
      "https://github.com/apps/my-performance/installations/new",
      "_blank",
    );
  };

  private openBitbucketAccess = () => {
    // TODO
  };

  public override render() {
    const { bitbucket, github } = this.props;
    return (
      <div className="platform-grants">
        <div className="label">Connect to your Projects</div>
        <div className="platform-actions">
          <button
            disabled={github}
            className="platform-connection"
            onClick={this.openGithubAccess}>
            <Github />
            Github
            {github && <ActionComplete />}
          </button>
          <button
            disabled={bitbucket}
            className="platform-connection"
            onClick={this.openBitbucketAccess}>
            <Bitbucket />
            Bitbucket
          </button>
        </div>
      </div>
    );
  }
}

interface Props {
  github: boolean;
  bitbucket: boolean;
}

const mSTP = ({ github }: IPlatform) => {
  return { github: !!github, bitbucket: false };
};

export const PlatformGrants = connectPlatforms(mSTP)(Grants);
