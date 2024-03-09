import React, { Fragment, memo } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import { useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import { AddTeam } from "./AddTeam";
import { NoTeams } from "./NoTeams";
import { TeamsList } from "./TeamsList";

export default memo(function Teams(_: PropLess) {
  const totalTeams = useTeam(state => state.myTeams.length);
  return (
    <Fragment>
      <Greeting type="teams" />
      <PageContent className="teams-content">
        {totalTeams ? <TeamsList /> : <NoTeams />}
      </PageContent>
      <AddTeam />
    </Fragment>
  );
});
