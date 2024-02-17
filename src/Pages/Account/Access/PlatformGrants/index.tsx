import React, { Component } from "react";
import { ActionComplete } from "Components/ActionComplete";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import type { IUser } from "Models/User";
import { connectUser } from "State/User";
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

const mSTP = ({ githubToken }: IUser) => {
  return { github: !!githubToken, bitbucket: false };
};

export const PlatformGrants = connectUser(mSTP)(Grants);
