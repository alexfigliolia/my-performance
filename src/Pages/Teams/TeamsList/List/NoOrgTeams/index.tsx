import React, { memo } from "react";
import { Search } from "Components/Art";
import { Tile } from "Components/Layouts";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const NoOrgTeams = memo(
  function NoOrgTeams(_: PropLess) {
    return (
      <Tile className="no-org-teams">
        <Search />
        <p>There aren&apos;t other teams in your organization yet</p>
      </Tile>
    );
  },
  () => true,
);
