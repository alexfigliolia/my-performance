import React, { Component } from "react";
import { Portal } from "Components/Portal";
import type { IModals } from "Models/types";
import { Modals, connectModals } from "State/Modals";
import "./styles.scss";

class AddNewUser extends Component<Props> {
  public override shouldComponentUpdate({ visible }: Props) {
    return visible !== this.props.visible;
  }

  public override componentWillUnmount() {
    if (this.props.visible) {
      Modals.toggleUserCreation();
    }
  }

  public override render() {
    const { visible } = this.props;
    return (
      <Portal>
        <div className={`add-user ${visible ? " visible" : ""}`}></div>
      </Portal>
    );
  }
}

interface Props {
  visible: boolean;
}

const mSTP = ({ userCreation }: IModals) => {
  return { visible: userCreation };
};

export const AddUser = connectModals(mSTP)(AddNewUser);
