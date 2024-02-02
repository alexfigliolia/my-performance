import { Component } from "react";
import { Navigation } from "State/Navigation";

export class BaseRedirect extends Component<Props> {
  public override componentDidMount() {
    void Navigation.navigate(this.props.base);
  }

  public override render() {
    return null;
  }
}

interface Props {
  base: string;
}
