import React, { Component } from "react";
import { LogoLarge } from "Components/Logos";
import { FormLink } from "Components/Navigation";
import { PlatformAuthorizers } from "Components/PlatformAuthorizers";
import type { PropLess } from "Types/React";
import "./styles.scss";

export default class Login extends Component<PropLess> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="login-container">
        <LogoLarge />
        <p className="subject">
          Login with your <strong>Git</strong> Provider
        </p>
        <PlatformAuthorizers
          redirect="https://localhost:3000/login"
          githubURL="https://github.com/login/oauth/authorize">
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
