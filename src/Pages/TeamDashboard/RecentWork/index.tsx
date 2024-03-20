import React, { Fragment, memo } from "react";
import { PRTable } from "Components/PRTable";
import { SectionDescription } from "Components/SectionDescription";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";

export const RecentWork = memo(
  function RecentWork(_: PropLess) {
    const pullRequests = useTeam(state => state.pullRequests);
    return (
      <Fragment>
        <SectionDescription title="Recent Work" />
        <PRTable pullRequests={pullRequests} />
      </Fragment>
    );
  },
  () => true,
);
