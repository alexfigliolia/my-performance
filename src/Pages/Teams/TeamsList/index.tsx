import React, { memo, useCallback } from "react";
import { MasonryList } from "Components/Layouts";
import { Team } from "Components/Team";
import type { MyTeam } from "Models/Team";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";

export const TeamsList = memo(function TeamsList(_: PropLess) {
  const myTeams = useTeam(state => state.myTeams);

  const renderItem = useCallback(({ __typename, ...team }: MyTeam) => {
    return <Team key={team.id} {...team} />;
  }, []);

  return <MasonryList list={myTeams} renderItem={renderItem} />;
});
