import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import type { IUser } from "Models/types";
import { connectUser } from "State/User";
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

const mSTP = ({ role }: IUser) => {
  return { role };
};

interface Props {
  role: "admin" | "user";
}

export default connectUser(mSTP)(Profile);
