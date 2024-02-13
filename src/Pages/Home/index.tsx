import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/PageContent";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import { OverviewRow } from "./OverviewRow";
import { RecentWork } from "./RecentWork";
import { Standouts } from "./Standouts";
import "./styles.scss";

class Home extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Greeting type="dashboard" />
        <PageContent className="dashboard-content">
          <OverviewRow />
          <Standouts />
          <RecentWork />
        </PageContent>
      </Fragment>
    );
  }
}

interface Props {
  setup: boolean;
}

const mSTP = ({ team }: ITeam) => {
  return { setup: !team.length };
};

export default connectTeam(mSTP)(Home);
