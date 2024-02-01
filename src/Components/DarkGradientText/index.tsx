import React, { Component } from "react";
import "./styles.scss";

export class DarkGradientText extends Component<Props> {
  public override shouldComponentUpdate({ text }: Props) {
    return text !== this.props.text;
  }

  public override render() {
    const { Tag, text } = this.props;
    return <Tag className="dark-gradient-text">{text}</Tag>;
  }
}

interface Props {
  text: string;
  Tag: Extract<keyof JSX.IntrinsicElements, string>;
}
