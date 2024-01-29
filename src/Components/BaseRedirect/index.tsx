import { Navigation } from "State/Navigation";
import { Component } from "react";

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
