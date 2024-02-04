import type { FormEvent, ReactNode } from "react";
import React, { Component, Fragment } from "react";
import { BrandGradient } from "Components/BrandGradient";
import { BrandText } from "Components/BrandText";
import { Panel } from "Components/Panel";
import { Left } from "Icons/Left";
import "./styles.scss";

export class UpdateUserView extends Component<Props> {
  public override render() {
    const { visible, close, title, detail, onSubmit, children } = this.props;
    return (
      <Panel visible={visible} close={close}>
        <Fragment>
          <button className="closer" onClick={close}>
            <Left>
              <BrandGradient id="leftArrow" />
            </Left>
          </button>
          <BrandText Tag="h3" text={title} />
          <p className="detail">{detail}</p>
          <form autoComplete="off" onSubmit={onSubmit} action="">
            {children}
          </form>
        </Fragment>
      </Panel>
    );
  }
}

interface Props {
  title: string;
  detail: string;
  visible: boolean;
  close: () => void;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
