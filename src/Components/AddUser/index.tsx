import type { ChangeEvent, FormEvent } from "react";
import React, { Component, Fragment } from "react";
import { LoginButton } from "Components/LoginButton";
import { LoginInput } from "Components/LoginInput";
import { UpdateUserView } from "Components/UpdateUserView";
import type { IModals } from "Models/types";
import { connectModals, Modals } from "State/Modals";

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
      <UpdateUserView
        visible={visible}
        title="New Engineer"
        toggle={this.toggle}
        onSubmit={this.onSubmit}
        detail="When adding engineers, their performance statistics will begin aggregating automatically">
        <Fragment>
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
        </Fragment>
      </UpdateUserView>
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
