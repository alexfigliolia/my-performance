import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import { Access } from "./Access";
import { Teams } from "./Teams";
import "./styles.scss";

export default class Account extends Component {
  public override render() {
    return (
      <Fragment>
        <Greeting text="This is your account" />
        <PageContent className="account-content">
          <div className="split-row">
            <Teams />
            <Access />
          </div>
        </PageContent>
      </Fragment>
    );
  }
}
