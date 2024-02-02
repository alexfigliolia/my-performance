import type { ChangeEvent, FormEvent } from "react";
import React, { Component, Fragment } from "react";
import type { IModals } from "Models/types";
import { Modals, connectModals } from "State/Modals";
import { DarkGradientText } from "Components/DarkGradientText";
import { LoginInput } from "Components/LoginInput";
import { Panel } from "Components/Panel";
import { LoginButton } from "Components/LoginButton";
import { Left } from "Icons/Left";
import CSSVars from "Styles/exports.module.scss";
import "./styles.scss";

class AddNewUser extends Component<Props, State> {
  public state: State = {
    loading: false,
    engineerName: "",
    engineerEmail: "",
    engineerPosition: "",
  };

  public override shouldComponentUpdate({ visible }: Props, nextState: State) {
    if (visible !== this.props.visible) return true;
    return nextState !== this.state;
  }

  private toggle = () => {
    Modals.toggleUserCreation();
  };

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in this.state) {
      // @ts-ignore
      this.setState({ [name]: value });
    }
  };

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ loading: true });
    //
  };

  public override render() {
    const { visible } = this.props;
    const { engineerName, engineerEmail, engineerPosition, loading } =
      this.state;
    return (
      <Panel visible={visible} toggle={this.toggle}>
        <Fragment>
          <button onClick={this.toggle}>
            <Left>
              <linearGradient id="leftArrow" x1="0" x2="1" y1="0" y2="0">
                <stop stopColor={CSSVars.purple} offset="0" />
                <stop stopColor={CSSVars.teal} offset="1" />
              </linearGradient>
            </Left>
          </button>
          <DarkGradientText Tag="h3" text="New Engineer" />
          <p className="detail">
            When adding engineers, their performance statistics will begin
            aggregating automatically
          </p>
          <form autoComplete="off" onSubmit={this.onSubmit} action="">
            <LoginInput
              type="text"
              label="Name"
              autoComplete="off"
              name="engineerName"
              value={engineerName}
              onChange={this.onChange}
            />
            <LoginInput
              type="email"
              label="Email"
              autoComplete="off"
              name="engineerEmail"
              value={engineerEmail}
              onChange={this.onChange}
            />
            <LoginInput
              type="text"
              label="Position"
              autoComplete="off"
              name="engineerPosition"
              onChange={this.onChange}
              value={engineerPosition}
            />
            <LoginButton text="Create" loading={loading} />
          </form>
        </Fragment>
      </Panel>
    );
  }
}

interface Props {
  visible: boolean;
}

interface State {
  loading: boolean;
  engineerName: string;
  engineerEmail: string;
  engineerPosition: string;
}

const mSTP = ({ userCreation }: IModals) => {
  return { visible: userCreation };
};

export const AddUser = connectModals(mSTP)(AddNewUser);
