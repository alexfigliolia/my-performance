import React, { Fragment, memo } from "react";
import { PRTable } from "Components/PRTable";
import { SectionDescription } from "Components/SectionDescription";
import { useProfile } from "State/Profile";
import type { PropLess } from "Types/React";

const omissions = new Set(["owner"]);

export const RecentWork = memo(
  function RecentWork(_: PropLess) {
    const pullRequests = useProfile(state => state.pullRequests);
    return (
      <Fragment>
        <SectionDescription title="Your Submissions" />
        <PRTable
          subject="Recent Work"
          omitHeaders={omissions}
          pullRequests={pullRequests}
        />
      </Fragment>
    );
  },
  () => true,
);
