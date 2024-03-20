import type { ReactNode } from "react";
import React, { Component } from "react";
import { Tile } from "Components/Layouts";
import type { PullRequest } from "Models/Team";
import { Dates } from "Tools/Dates";
import "./styles.scss";

export class PRTable extends Component<Props> {
  private static readonly headers = ["owner", "description", "project", "date"];
  private static readonly emptyLog = {
    date: "",
    author: "",
    description: "",
    project: "",
  };

  public override shouldComponentUpdate({ pullRequests }: Props) {
    return pullRequests !== this.props.pullRequests;
  }

  private fill() {
    const { pullRequests } = this.props;
    return new Array(10).fill(null).map((_, i) => {
      if (i < pullRequests.length) {
        return pullRequests[i];
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
                  ({ author, description, project, date }, i) => {
                    return (
                      <tr key={i}>
                        {this.renderCell("owner", author)}
                        {this.renderCell("description", description)}
                        {this.renderCell("project", project)}
                        {this.renderCell(
                          "date",
                          date ? Dates.format(new Date(date)) : date,
                        )}
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
  omitHeaders?: Set<string>;
  pullRequests: PullRequest[];
}
