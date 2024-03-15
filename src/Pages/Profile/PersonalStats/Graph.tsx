import React, { memo, useMemo } from "react";
import { SVGGradient } from "Components/Gradients";
import { LineGraph } from "Components/Graphs";
import { Tile } from "Components/Layouts";
import { Rank } from "Components/Rank";
import type { TeamProfile } from "Models/Profile";
import { useProfile } from "State/Profile";
import { useUser } from "State/User";
import CSSVars from "Styles/exports.module.scss";
import { Dates } from "Tools/Dates";
import "./styles.scss";

export const Graph = memo(function Graph({
  id,
  name,
  linesPerMonth,
}: TeamProfile) {
  const myID = useUser(state => state.id);
  const ID = useProfile(state => state.id);
  const profileName = useProfile(state => state.name);

  const text = useMemo(() => {
    if (ID === myID) {
      return "Your line contributions per month";
    }
    return `${profileName}'s line contributions per month`;
  }, [ID, myID, profileName]);

  const data = useMemo(() => {
    return Dates.LAST_12_MONTHS.map((date, i) => ({
      date,
      value: linesPerMonth[i] || 0,
    }));
  }, [linesPerMonth]);

  return (
    <Tile heading={name} className="personal-stats" subheading={text}>
      <Rank rank={1} />
      <LineGraph
        height={200}
        data={data}
        id={`personalStats${id}`}
        stroke={`url(#personalStats${id}Gradient)`}
        margins={{ left: 25 }}>
        <SVGGradient
          color1={CSSVars.teal}
          id={`personalStats${id}Gradient`}
          color2={CSSVars.lightPurple}
        />
      </LineGraph>
    </Tile>
  );
});
