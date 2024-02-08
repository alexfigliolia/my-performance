import React, { Component, Fragment } from "react";
import { PRTable } from "Components/PRTable";
import { SectionDescription } from "Components/SectionDescription";
import type { IUserStats } from "Models/types";
import { connectUserStats } from "State/UserStats";
import type { PullRequest } from "Tools/Types";

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

const mSTP = ({ recentPullRequests }: IUserStats) => {
  return { log: recentPullRequests };
};

interface Props {
  log: PullRequest[];
}

export const MyRecentWork = connectUserStats(mSTP)(Recent);
