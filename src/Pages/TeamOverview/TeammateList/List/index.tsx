import React, { memo, useCallback } from "react";
import { MasonryList } from "Components/Layouts";
import { Teammate } from "Components/Teammate";
import type { OverallStats } from "Models/Team";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";

export const List = memo(
  function List(_: PropLess) {
    const team = useTeam(state => state.team);
    const search = useTeam(state => state.search);

    const renderItem = useCallback((stats: OverallStats) => {
      return <Teammate key={stats.id} {...stats} />;
    }, []);

    return <MasonryList list={team} search={search} renderItem={renderItem} />;
  },
  () => true,
);
