import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export class FormLink extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { text, href, linkText } = this.props;
    return (
      <span className="form-link">
        {text} <Link to={href}>{linkText}</Link>
      </span>
    );
  }
}

interface Props {
  text: string;
  href: string;
  linkText: string;
}
