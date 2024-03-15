import React, { Fragment, memo, useMemo } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import { useProfile } from "State/Profile";
import { useUser } from "State/User";
import type { PropLess } from "Types/React";
import { MyRecentWork } from "./MyRecentWork";
import { PersonalStats } from "./PersonalStats";
import { YourCollaborators } from "./YourCollaborators";

export default memo(
  function Profile(_: PropLess) {
    const myID = useUser(state => state.id);
    const ID = useProfile(state => state.id);
    const name = useProfile(state => state.name);
    const greeting = useMemo(() => {
      if (myID === ID) {
        return "This is your profile";
      }
      return `This is ${name}'s profile`;
    }, [ID, myID, name]);
    return (
      <Fragment>
        <Greeting text={greeting} />
        <PageContent className="profile-content">
          <PersonalStats />
          <YourCollaborators />
          <MyRecentWork />
        </PageContent>
      </Fragment>
    );
  },
  () => true,
);
