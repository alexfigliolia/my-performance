import React, { Component, Fragment } from "react";
import type { IUser } from "Models/types";
import type { PullRequest } from "Tools/Types";
import { connectUser } from "State/User";
import { PRTable } from "Components/PRTable";
import { SectionDescription } from "Components/SectionDescription";

export class Recent extends Component<Props> {
  private static omissions = new Set(["owner"]);
  public override shouldComponentUpdate({ log }: Props) {
    return log.length !== this.props.log.length;
  }

  public override render() {
    return (
      <Fragment>
        <SectionDescription title="Your Submissions" />
        <PRTable
          log={this.props.log}
          omitHeaders={Recent.omissions}
          subject="Recent Pull Requests"
        />
      </Fragment>
    );
  }
}

const mSTP = ({ recentPullRequests }: IUser) => {
  return { log: recentPullRequests };
};

interface Props {
  log: PullRequest[];
}

export const MyRecentWork = connectUser(mSTP)(Recent);
