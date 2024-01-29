import React, { Component } from "react";
import "./styles.scss";

export class PullRequestStatus extends Component<Props> {
  static classes: Record<string, string> = {
    open: "open",
    merged: "merged",
    declined: "declined",
    "in review": "in-review",
  };

  public override shouldComponentUpdate({ status }: Props) {
    return status !== this.props.status;
  }

  public override render() {
    const { status } = this.props;
    return (
      <div
        className={`pull-request-status ${PullRequestStatus.classes[status]}`}>
        {status.toUpperCase()}
      </div>
    );
  }
}

interface Props {
  status: string;
}
