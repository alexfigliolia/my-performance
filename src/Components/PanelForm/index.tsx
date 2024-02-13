import type { FormEvent, ReactNode } from "react";
import React, { Component, Fragment } from "react";
import { BrandGradient } from "Components/BrandGradient";
import { BrandText } from "Components/BrandText";
import { Panel } from "Components/Panel";
import { Left } from "Icons/Left";
import "./styles.scss";

export class PanelForm extends Component<Props> {
  public override render() {
    const { close, className, visible, title, detail, children, onSubmit } =
      this.props;
    return (
      <Panel className={className} visible={visible} close={close}>
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
  visible: boolean;
  close: () => void;
  title: string;
  detail: string;
  children: ReactNode;
  className?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
