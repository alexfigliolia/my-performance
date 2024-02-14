import React, { Component, Fragment } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/PageContent";
import { Access } from "./Access";
import { RepositoryList } from "./RepositoryList";
import { Teams } from "./Teams";
import "./styles.scss";

export default class Account extends Component {
  public override render() {
    return (
      <Fragment>
        <Greeting type="account" />
        <PageContent className="account-content">
          <div className="split-row">
            <Teams />
            <Access />
          </div>
          <RepositoryList />
        </PageContent>
      </Fragment>
    );
  }
}
