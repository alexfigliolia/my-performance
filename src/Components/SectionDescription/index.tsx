import React, { Component } from "react";
import "./styles.scss";

export class SectionDescription extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { title, subtitle } = this.props;
    return (
      <div className="section-description">
        <span className="title">{title}</span>
        {subtitle && <span className="sub-title">{subtitle}</span>}
      </div>
    );
  }
}

interface Props {
  title: string;
  subtitle: string;
}
