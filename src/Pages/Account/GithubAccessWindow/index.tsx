import React, { Component } from "react";
import { BrandButton } from "Components/Gradients";
import { DropDown } from "Components/Inputs";
import { PanelForm } from "Components/Modals";
import type { IModals } from "Models/Modals";
import { connectModals, Modals } from "State/Modals";

export class GithubAccess extends Component<Props, State> {
  public state: State = { scope: "" };
  private static OPTIONS = ["an individual", "an organization"];
  public override shouldComponentUpdate({ visible }: Props, { scope }: State) {
    if (scope !== this.state.scope) return true;
    return visible !== this.props.visible;
  }

  private close = () => {
    Modals.closeGithubAccessWindow();
    this.setState({ scope: "" });
  };

  private onSubmit = () => {
    if (!this.state.scope) {
      return;
    }
    if (this.state.scope === "an individual") {
      return window.open(
        "https://github.com/apps/my-performance/installations/new",
        "_blank",
      );
    }
    return window.open(
      "https://github.com/apps/my-performance/installations/new",
      "_blank",
    );
  };

  private onSelectScope = (value: Set<string>) => {
    const scope = Array.from(value)[0] as Scope;
    if (!scope) {
      return this.setState({ scope: "" });
    }
    this.setState({ scope });
  };

  public override render() {
    const { visible } = this.props;
    return (
      <PanelForm
        visible={visible}
        title="Github"
        close={this.close}
        onSubmit={this.onSubmit}
        detail="Connect a github repository">
        <DropDown
          id="githubScope"
          name="githubScope"
          label="Who owns this repository?"
          options={GithubAccess.OPTIONS}
          value={new Set([this.state.scope])}
          onChange={this.onSelectScope}
        />
        <BrandButton text="connect" loading={false} />
      </PanelForm>
    );
  }
}

const mSTP = ({ githubAccessWindow }: IModals) => {
  return { visible: githubAccessWindow };
};

interface Props {
  visible: boolean;
}

type Scope = "an individual" | "an organization" | "";

interface State {
  scope: Scope;
}

export const GithubAccessWindow = connectModals(mSTP)(GithubAccess);
