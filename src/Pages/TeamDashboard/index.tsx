import React, { Fragment, memo } from "react";
import { TeamGreeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { OverviewRow } from "./OverviewRow";
import { RecentWork } from "./RecentWork";
import { Standouts } from "./Standouts";
import "./styles.scss";

export default memo(
  function TeamDashboard(_: PropLess) {
    return (
      <Fragment>
        <TeamGreeting />
        <PageContent className="dashboard-content">
          <OverviewRow />
          <Standouts />
          <RecentWork />
        </PageContent>
      </Fragment>
    );
  },
  () => true,
);
