import type { ChangeEvent } from "react";
import React, { Component, Fragment } from "react";
import type { IModals } from "Models/types";
import { Modals, connectModals } from "State/Modals";
import { DarkGradientText } from "Components/DarkGradientText";
import { LoginInput } from "Components/LoginInput";
import { Panel } from "Components/Panel";
import "./styles.scss";

class AddNewUser extends Component<Props, State> {
  public state: State = {
    engineerName: "",
    engineerEmail: "",
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

  public override render() {
    const { visible } = this.props;
    const { engineerName, engineerEmail } = this.state;
    return (
      <Panel visible={visible} toggle={this.toggle}>
        <Fragment>
          <DarkGradientText Tag="h3" text="New Engineer" />
          <form>
            <LoginInput
              type="text"
              name="engineerName"
              label="Engineer Name"
              value={engineerName}
              onChange={this.onChange}
            />
            <LoginInput
              type="email"
              label="Engineer Email"
              name="engineerEmail"
              value={engineerEmail}
              onChange={this.onChange}
            />
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
  engineerName: string;
  engineerEmail: string;
}

const mSTP = ({ userCreation }: IModals) => {
  return { visible: userCreation };
};

export const AddUser = connectModals(mSTP)(AddNewUser);
