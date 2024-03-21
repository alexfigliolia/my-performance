import React, { memo, useCallback } from "react";
import { MasonryList } from "Components/Layouts";
import { Teammate } from "Components/Teammate";
import type { OverallStatsPerUser } from "GQL/Types";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";

export const List = memo(
  function List(_: PropLess) {
    const team = useTeam(state => state.team);
    const search = useTeam(state => state.search);
    const totalLines = useTeam(state => state.totalLines);

    const renderItem = useCallback(
      (stats: OverallStatsPerUser) => {
        return <Teammate key={stats.id} {...stats} totalLines={totalLines} />;
      },
      [totalLines],
    );

    return <MasonryList list={team} search={search} renderItem={renderItem} />;
  },
  () => true,
);
