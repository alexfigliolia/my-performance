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
  public override shouldComponentUpdate({ name }: Props) {
    return name !== this.props.name;
  }

  private updateOrganization = (e: ChangeEvent<HTMLInputElement>) => {
    Onboarding.setName(e.target.value);
  };

  private validate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, nextSlide } = this.props;
    if (name.length > 1) {
      nextSlide();
    }
  };

  public override render() {
    const { name, onResize } = this.props;
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
            name="Organization Name"
            type="string"
            label="Company Name"
            value={name}
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
  name: string;
  onResize: (width: number, height: number) => void;
}

const mSTP = ({ name }: IOnboarding) => {
  return { name };
};

export const Organization = connectOnboarding(mSTP)(OrganizationForm);
