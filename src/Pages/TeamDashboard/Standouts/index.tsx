import React, { memo } from "react";
import { SectionDescription } from "Components/SectionDescription";
import { Standout } from "Components/Standout";
import { useOnMount } from "Hooks/useOnMount";
import { Team, useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Standouts = memo(
  function Standouts(_: PropLess) {
    const standouts = useTeam(state => state.standouts);

    useOnMount(() => {
      void Team.getStandouts();
    });

    return (
      <div className="standouts">
        <SectionDescription
          title="Standouts"
          subtitle="By Lines Added Recently"
        />
        <div className="list">
          {standouts.map(({ id, name, increase, lines }) => {
            return (
              <Standout
                key={id}
                name={name}
                lines={lines}
                increase={increase}
              />
            );
          })}
        </div>
      </div>
    );
  },
  () => true,
);
