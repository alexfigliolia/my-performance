import type { ChangeEvent } from "react";
import React, { Component } from "react";
import { FormLink } from "Components/FormLink";
import { LoginButton } from "Components/LoginButton";
import { LoginInput } from "Components/LoginInput";
import type { IOnboarding } from "Models/Onboarding";
import { connectOnboarding, Onboarding } from "State/Onboarding";
import { Slide } from "../Slide";
import "./styles.scss";

export class OrgName extends Component<Props> {
  public override shouldComponentUpdate({ name }: Props) {
    return name !== this.props.name;
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    Onboarding.setName(e.target.value);
  };

  private next = () => {
    if (Onboarding.getState().orgName) {
      this.props.next();
    }
  };

  public override render() {
    const { name, onHeight } = this.props;
    return (
      <Slide onHeight={onHeight}>
        <p className="subject">
          <strong>Welcome!</strong> Getting started is simple
        </p>
        <p className="subject">
          What would you like to name your organization?
        </p>
        <LoginInput
          value={name}
          name="organizationName"
          label="organization name"
          onChange={this.onChange}
        />
        <div className="sign-up-action">
          <LoginButton text="next" loading={false} onClick={this.next} />
        </div>
        <FormLink text="Have an account?" href="/login" linkText="Login!" />
      </Slide>
    );
  }
}

interface Props {
  name: string;
  next: () => void;
  onHeight: (height: number) => void;
}

const mSTP = ({ orgName }: IOnboarding) => {
  return { name: orgName };
};

export const OrganizationName = connectOnboarding(mSTP)(OrgName);
