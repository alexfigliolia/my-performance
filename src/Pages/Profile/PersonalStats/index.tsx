import React, { memo } from "react";
import { useProfile } from "State/Profile";
import type { PropLess } from "Types/React";
import { Graph } from "./Graph";
import "./styles.scss";

export const PersonalStats = memo(
  function PersonalStats(_: PropLess) {
    const teams = useProfile(state => state.teams);
    return teams.map(team => {
      return <Graph key={team.id} {...team} />;
    });
  },
  () => true,
);
