import React, { memo, useMemo } from "react";
import { Tile } from "Components/Layouts";
import { SizeObserver } from "Components/Tools";
import { useMinHeight } from "Hooks/useMinHeight";
import { useTeam } from "State/Team";
import { Instructions } from "./Instructions";
import "./styles.scss";

export const TrackedProjects = memo(
  function TrackedProjects() {
    const [minHeight, setMinHeight] = useMinHeight();

    const tracking = useTeam(state => state.trackedProjects.size);

    const text = useMemo(() => {
      if (!tracking) {
        return "You are not tracking any projects yet";
      }
      return `You are currently tracking ${tracking} project${tracking === 1 ? "" : "s"}`;
    }, [tracking]);

    return (
      <Tile
        className="tracked-projects"
        heading="Tracked Projects"
        subheading={text}>
        <SizeObserver
          width
          height
          Tag="div"
          emitOnMount
          className="tp-content"
          onSizeChange={setMinHeight}
          nodeProps={{ style: { minHeight } }}>
          <Instructions />
        </SizeObserver>
      </Tile>
    );
  },
  () => true,
);
