import React, { memo } from "react";
import { useTeam } from "State/Team";
import { useUser } from "State/User";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const TeamGreeting = memo(
  function TeamGreeting(_: PropLess) {
    const team = useTeam(state => state.name);
    const name = useUser(state => state.name);
    return (
      <div className="greeting">
        <span>Hello, {name}</span>
        <span>You are viewing {team}</span>
      </div>
    );
  },
  () => true,
);
