import type { ReactNode } from "react";
import React, { Component } from "react";
import { PullRequestStatus } from "Components/PullRequestStatus";
import { Tile } from "Components/Tile";
import type { PullRequest } from "Tools/Types";
import "./styles.scss";

export class PRTable extends Component<Props> {
  private static readonly headers = [
    "owner",
    "description",
    "status",
    "project",
    "date",
  ];
  private static readonly emptyLog = {
    date: "",
    author: "",
    status: "",
    description: "",
    repository: "",
  };

  public override shouldComponentUpdate({ log }: Props) {
    return log.length !== this.props.log.length;
  }

  private fill() {
    const { log } = this.props;
    return new Array(10).fill(null).map((_, i) => {
      if (i < log.length) {
        return log[i];
      }
      return PRTable.emptyLog;
    });
  }

  private renderHeader(header: string) {
    const { omitHeaders = new Set() } = this.props;
    if (omitHeaders.has(header)) {
      return null;
    }
    return (
      <th key={header} className={`th-${header}`}>
        {header}
      </th>
    );
  }

  private renderCell(header: string, value: ReactNode) {
    const { omitHeaders = new Set() } = this.props;
    if (omitHeaders.has(header)) {
      return null;
    }
    return <td className={`td-${header}`}>{value}</td>;
  }

  public override render() {
    const { subject = "Incoming Pull Requests" } = this.props;
    return (
      <Tile className="perf-table-table">
        <div className="my-perf-table">
          <div className="subject">
            <span>{subject}</span>
          </div>
          <div className="t-scroll">
            <table>
              <thead>
                <tr>
                  {PRTable.headers.map(header => this.renderHeader(header))}
                </tr>
              </thead>
              <tbody>
                {this.fill().map(
                  ({ author, description, status, repository, date }, i) => {
                    return (
                      <tr key={i}>
                        {this.renderCell("owner", author)}
                        {this.renderCell("description", description)}
                        {this.renderCell(
                          "status",
                          <PullRequestStatus status={status} />,
                        )}
                        {this.renderCell("project", repository)}
                        {this.renderCell("date", date)}
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Tile>
    );
  }
}

interface Props {
  subject?: string;
  log: PullRequest[];
  omitHeaders?: Set<string>;
}
