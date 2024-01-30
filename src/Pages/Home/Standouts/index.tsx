import React, { Component } from "react";
import { Standout } from "Components/Standout";
import type { ITeam } from "Models/types";
import { connectTeam } from "State/Team";
import type { IStandout } from "Tools/Types";
import { SectionDescription } from "Components/SectionDescription";
import "./styles.scss";

export class StandOutRenderer extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    return (
      <div className="standouts">
        <SectionDescription
          title="Standouts"
          subtitle="By Lines Added Recently"
        />
        <div className="list">
          {this.props.standouts.map(({ author, delta, lines }) => {
            return (
              <Standout
                key={author}
                delta={delta}
                lines={lines}
                author={author}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

interface Props {
  standouts: IStandout[];
}

const mSTP = ({ standouts }: ITeam) => {
  return { standouts };
};

export const Standouts = connectTeam(mSTP)(StandOutRenderer);
