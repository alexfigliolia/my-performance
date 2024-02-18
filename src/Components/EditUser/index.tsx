import type { ChangeEvent, FormEvent } from "react";
import React, { Component, Fragment } from "react";
import { BrandButton } from "Components/Gradients";
import { Input } from "Components/Inputs";
import { TriangleLoader } from "Components/Loaders";
import { PanelForm } from "Components/Modals";
import type { IEditUser } from "Models/EditUser";
import {
  editUserConnection,
  type IEditUserConnection,
} from "State/Connections";
import { EditUser as EditUserState } from "State/EditUser";
import { Modals } from "State/Modals";

class EditExistingUser extends Component<Props, State> {
  public state: State = {
    loading: false,
  };

  public override shouldComponentUpdate(
    { name, email, position, visible }: Props,
    { loading }: State,
  ) {
    const curProps = this.props;
    if (name !== curProps.name) return true;
    if (email !== curProps.email) return true;
    if (position !== curProps.position) return true;
    if (visible !== curProps.visible) return true;
    return loading !== this.state.loading;
  }

  private close = () => {
    Modals.closeEditUser();
  };

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (this.isValidKey(name)) {
      EditUserState.set(name, value);
    }
  };

  private isValidKey(key: string): key is keyof IEditUser {
    return key in EditUserState.getState();
  }

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ loading: true });
    EditUserState.reset();
    // TODO - logic
  };

  public override render() {
    const { loading } = this.state;
    const { name, email, position, visible } = this.props;
    return (
      <PanelForm
        visible={visible}
        title="Edit Engineer"
        close={this.close}
        onSubmit={this.onSubmit}
        detail="Performance stats are tied to your engineer's email address, so please be careful when editing">
        <Fragment>
          <Input
            type="text"
            label="Name"
            autoComplete="off"
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <Input
            type="email"
            label="Email"
            autoComplete="off"
            name="email"
            value={email}
            onChange={this.onChange}
          />
          <Input
            type="text"
            label="Position"
            autoComplete="off"
            name="position"
            onChange={this.onChange}
            value={position}
          />
          <BrandButton text="Update" loading={loading}>
            <TriangleLoader ID="updateUserLoader" />
          </BrandButton>
        </Fragment>
      </PanelForm>
    );
  }
}

interface Props {
  name: string;
  email: string;
  position: string;
  visible: boolean;
}

interface State {
  loading: boolean;
}

const mSTP = ([
  { editUser },
  { name, email, position },
]: IEditUserConnection) => {
  return { visible: editUser, name, email, position };
};

export const EditUser = editUserConnection(mSTP)(EditExistingUser);
