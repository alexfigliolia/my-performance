import React, { Component } from "react";
import { FormLink } from "Components/FormLink";
import { LogoLarge } from "Components/LogoLarge";
import { PlatformAuthorizers } from "Components/PlatformAuthorizers";
import { Navigation } from "State/Navigation";
import { Onboarding } from "State/Onboarding";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export default class Login extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  private onGithubAuthorized = async () => {
    try {
      await Onboarding.loginWithGithub();
      Onboarding.deleteCached("code");
      void Navigation.navigate("/");
    } catch (error: any) {
      // TODO - toast error messages
    }
  };

  public override render() {
    return (
      <div className="login-container">
        <LogoLarge />
        <p className="subject">
          Select your <strong>Git</strong> Provider
        </p>
        <PlatformAuthorizers
          onBitbucket={() => {}}
          onGithub={this.onGithubAuthorized}
          githubRedirectURL="https://localhost:3000/login">
          <FormLink
            text="New here?"
            href="/login/sign-up"
            linkText="Sign Up!"
          />
        </PlatformAuthorizers>
      </div>
    );
  }
}
