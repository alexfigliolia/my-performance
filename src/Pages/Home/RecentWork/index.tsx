import React, { Component } from "react";
import type { PullRequest, ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { PullRequestStatus } from "Components/PullRequestStatus";
import "./styles.scss";

export class Recent extends Component<Props> {
  public override shouldComponentUpdate({ log }: Props) {
    return log.length !== this.props.log.length;
  }

  public override render() {
    return (
      <div className="my-perf-table">
        <div className="subject">
          <span>Incoming Pull Requests</span>
        </div>
        <div className="t-scroll">
          <table>
            <thead>
              <tr>
                <th>Owner</th>
                <th className="th-description">Description</th>
                <th>Status</th>
                <th>Project</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.props.log.map(
                ({ author, description, status, repository, date }, i) => {
                  return (
                    <tr key={i}>
                      <td>{author}</td>
                      <td className="td-description">{description}</td>
                      <td className="td-status">
                        <PullRequestStatus status={status} />
                      </td>
                      <td>{repository}</td>
                      <td>{date}</td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </div>
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
