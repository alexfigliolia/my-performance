import React, { Fragment, memo } from "react";
import { AddUser } from "Components/AddUser";
import { TeamGreeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { Comparison } from "./Comparison";
import { TeammateList } from "./TeammateList";
import "./styles.scss";

export default memo(
  function TeamOverview(_: PropLess) {
    return (
      <Fragment>
        <TeamGreeting />
        <PageContent className="team-content">
          <Comparison />
          <TeammateList />
        </PageContent>
        <AddUser />
      </Fragment>
    );
  },
  () => true,
);
