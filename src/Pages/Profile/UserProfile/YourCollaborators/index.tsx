import React, { Component, Fragment } from "react";
import { SectionDescription } from "Components/SectionDescription";
import { Teammate } from "Components/Teammate";
import type { IUserStats } from "Models/types";
import { connectUserStats } from "State/UserStats";
import "./styles.scss";

class Collaborators extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { collaborators } = this.props;
    return (
      <Fragment>
        <SectionDescription
          title="Your Collaborators"
          subtitle="These are the individuals who work on code collocated with yours"
        />
        <div className="your-collaborators">
          {collaborators.map(person => {
            return <Teammate key={person} name={person} />;
          })}
        </div>
      </Fragment>
    );
  }
}

interface Props {
  collaborators: string[];
}

const mSTP = ({ collaborators }: IUserStats) => {
  return { collaborators };
};

export const YourCollaborators = connectUserStats(mSTP)(Collaborators);
