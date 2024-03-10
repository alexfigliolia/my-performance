import React, { Fragment, memo } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import { useTeams } from "State/Teams";
import type { PropLess } from "Types/React";
import { AddTeam } from "./AddTeam";
import { MyTeams } from "./MyTeams";
import { NoTeams } from "./NoTeams";
import { TeamsList } from "./TeamsList";

export default memo(function Teams(_: PropLess) {
  const myTeams = useTeams(state => state.myTeams.length);
  return (
    <Fragment>
      <Greeting type="teams" />
      <PageContent className="teams-content">
        {myTeams ? <MyTeams /> : <NoTeams />}
        <TeamsList />
      </PageContent>
      <AddTeam />
    </Fragment>
  );
});
