import React, { memo, useCallback, useMemo } from "react";
import { MasonryList } from "Components/Layouts";
import { Team } from "Components/Team";
import type { MyTeam } from "Models/Teams";
import { useTeams } from "State/Teams";
import type { PropLess } from "Types/React";

export const MyTeams = memo(
  function MyTeams(_: PropLess) {
    const myTeams = useTeams(state => state.myTeams);
    const teamList = useMemo(() => myTeams.toList(), [myTeams]);

    const renderItem = useCallback(({ __typename, ...team }: MyTeam) => {
      return <Team key={team.id} {...team} />;
    }, []);

    return <MasonryList list={teamList} renderItem={renderItem} />;
  },
  () => true,
);
