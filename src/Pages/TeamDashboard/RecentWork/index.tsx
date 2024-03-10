import React, { Component, Fragment } from "react";
import { PRTable } from "Components/PRTable";
import { SectionDescription } from "Components/SectionDescription";
import type { ITeam, PullRequest } from "Models/Team";
import { connectTeam } from "State/Team";

export class Recent extends Component<Props> {
  public override shouldComponentUpdate({ log }: Props) {
    return log.length !== this.props.log.length;
  }

  public override render() {
    return (
      <Fragment>
        <SectionDescription title="Recent Work" />
        <PRTable log={this.props.log} />
      </Fragment>
    );
  }
}

const mSTP = ({ log }: ITeam) => {
  return { log };
};

interface Props {
  log: PullRequest[];
}

export const RecentWork = connectTeam(mSTP)(Recent);
