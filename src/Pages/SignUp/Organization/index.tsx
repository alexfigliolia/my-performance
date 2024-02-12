import type { ChangeEvent, FormEvent } from "react";
import React, { Component } from "react";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LoginInput } from "Components/LoginInput";
import { LogoLarge } from "Components/LogoLarge";
import { SizeObserver } from "Components/SizeObserver";
import type { IOnboarding } from "Models/types";
import { connectOnboarding, Onboarding } from "State/Onboarding";
import "./styles.scss";

class OrganizationForm extends Component<Props> {
  public override shouldComponentUpdate({ organizationName }: Props) {
    return organizationName !== this.props.organizationName;
  }

  private updateOrganization = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (Onboarding.validKey(name)) {
      Onboarding.set(name, value);
    }
  };

  private validate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { organizationName, nextSlide } = this.props;
    if (organizationName.length > 1) {
      nextSlide();
    }
  };

  public override render() {
    const { organizationName, onResize } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.validate} action="">
        <SizeObserver
          height
          Tag="div"
          emitOnMount
          onSizeChange={onResize}
          className="size-controller">
          <LogoLarge />
          <p className="subject">
            <strong>Welcome!</strong> Getting started is an easy.
          </p>
          <p className="subject">
            Tell me about your <strong>team</strong> or <strong>company</strong>
          </p>
          <LoginInput
            name="organizationName"
            type="string"
            label="Company Name"
            value={organizationName}
            onChange={this.updateOrganization}
          />
          <LoginButton text="Next" loading={false} />
          <FormLink text="Have an account?" href="/login" linkText="Login!" />
        </SizeObserver>
      </form>
    );
  }
}

interface Props {
  nextSlide: () => void;
  organizationName: string;
  onResize: (width: number, height: number) => void;
}

const mSTP = ({ organizationName }: IOnboarding) => {
  return { organizationName };
};

export const Organization = connectOnboarding(mSTP)(OrganizationForm);
