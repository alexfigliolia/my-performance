import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/PageContent";
import type { UserRole } from "GQL";
import type { IOrganizations } from "Models/types";
import { connectOrganizations, Organizations } from "State/Organizations";
import { AdminProfile } from "./AdminProfile";
import { UserProfile } from "./UserProfile";

class Profile extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Greeting type="profile" />
        <PageContent className="profile-content">
          {this.props.role === "admin" ? <AdminProfile /> : <UserProfile />}
        </PageContent>
      </Fragment>
    );
  }
}

const mSTP = (organizations: IOrganizations) => {
  return { role: Organizations.selectRole(organizations) };
};

interface Props {
  role: UserRole;
}

export default connectOrganizations(mSTP)(Profile);
