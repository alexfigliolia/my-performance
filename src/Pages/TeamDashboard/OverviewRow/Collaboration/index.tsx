import React, { memo } from "react";
import { ChordGraph } from "Components/Graphs";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Collaboration = memo(
  function Collaboration(_: PropLess) {
    const key = useTeam(state => state.key);
    const mesh = useTeam(state => state.mesh);
    return <ChordGraph id="collaboration" labels={key} data={mesh} />;
  },
  () => true,
);
