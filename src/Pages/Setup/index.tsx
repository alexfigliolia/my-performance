import React, { Component } from "react";
import { TriangleLoader } from "Components/Loaders";
import { LogoLarge } from "Components/LogoLarge";
import type { Networking } from "Models/Onboarding";
import { Onboarding } from "State/Onboarding";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export default class Setup extends Component<PropLess> {
  private Subscription: Networking | null = null;
  constructor(props: PropLess) {
    super(props);
    this.Subscription = Onboarding.listenForInstallation();
  }

  public override shouldComponentUpdate() {
    return false;
  }

  public override componentWillUnmount() {
    this.Subscription?.unsubscribe();
    this.Subscription = null;
    Onboarding.resetAll();
  }

  public override render() {
    return (
      <div className="setup">
        <LogoLarge />
        <p className="subject">Setting up your account</p>
        <TriangleLoader />
      </div>
    );
  }
}
