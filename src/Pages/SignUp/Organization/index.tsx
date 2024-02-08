import type { ChangeEvent, FormEvent } from "react";
import React, { Component, Fragment } from "react";
import { DropDown } from "Components/DropDown";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LoginInput } from "Components/LoginInput";
import { SizeObserver } from "Components/SizeObserver";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import type { IOnboarding, Platform } from "Models/types";
import { connectOnboarding, Onboarding } from "State/Onboarding";
import "./styles.scss";

class OrganizationForm extends Component<Props> {
  public static platforms = ["github", "bitbucket"];

  public override shouldComponentUpdate({ platform, organizationName }: Props) {
    if (platform !== this.props.platform) return true;
    return organizationName !== this.props.organizationName;
  }

  private updateOrganization = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (Onboarding.validKey(name)) {
      Onboarding.set(name, value);
    }
  };

  private updatePlatform = (values: Set<string>) => {
    if (!values.size) {
      return Onboarding.set("platform", "");
    }
    return Onboarding.set("platform", values.values().next().value);
  };

  private renderOption = (value: string) => {
    const Icon = value === "github" ? <Github /> : <Bitbucket />;
    return (
      <Fragment>
        {Icon}
        {value}
      </Fragment>
    );
  };

  private validate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { platform, organizationName, nextSlide } = this.props;
    if (!!platform && !!organizationName) {
      nextSlide();
    }
  };

  public override render() {
    const { organizationName, platform, onResize } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.validate} action="">
        <SizeObserver
          height
          Tag="div"
          emitOnMount
          onSizeChange={onResize}
          className="size-controller">
          <p className="subject">
            <strong>Welcome!</strong> Getting started is an easy.
          </p>
          <p className="subject">
            Tell me about your <strong>team</strong> or <strong>company</strong>
          </p>
          <LoginInput
            name="organizationName"
            type="string"
            label="Team or Company Name"
            value={organizationName}
            onChange={this.updateOrganization}
          />
          <DropDown
            id="platform"
            value={new Set([platform])}
            onChange={this.updatePlatform}
            label="Where do you store your code?"
            options={OrganizationForm.platforms}
            renderOption={this.renderOption}
          />
          <LoginButton text="Next" loading={false} />
          <FormLink text="Have an account?" href="/login" linkText="Login!" />
        </SizeObserver>
      </form>
    );
  }
}

interface Props {
  platform: Platform;
  nextSlide: () => void;
  organizationName: string;
  onResize: (width: number, height: number) => void;
}

const mSTP = ({ organizationName, platform }: IOnboarding) => {
  return { organizationName, platform };
};

export const Organization = connectOnboarding(mSTP)(OrganizationForm);
