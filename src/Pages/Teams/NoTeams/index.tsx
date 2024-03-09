import React, { memo, useCallback } from "react";
import { TeamArt } from "Components/Art";
import { Tile } from "Components/Layouts";
import { Modals } from "State/Modals";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const NoTeams = memo(function NoTeams(_: PropLess) {
  const openNewTeam = useCallback(() => {
    Modals.newTeamToggle.open();
  }, []);

  return (
    <Tile className="no-teams">
      <div className="content">
        <div className="art">
          <TeamArt />
        </div>
        <div className="text">
          <p>Create your first team!</p>
          <button onClick={openNewTeam}>New Team</button>
        </div>
      </div>
    </Tile>
  );
});
