import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import type { UserRole } from "GQL";
import type { IOrganizations } from "Models/types";
import { connectOrganizations, Organizations } from "State/Organizations";
import { AdminProfile } from "./AdminProfile";
import { UserProfile } from "./UserProfile";
import "./styles.scss";

class Profile extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <Fragment>
        <Greeting type="profile" />
        <div className="profile-content">
          {this.props.role === "admin" ? <AdminProfile /> : <UserProfile />}
        </div>
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
