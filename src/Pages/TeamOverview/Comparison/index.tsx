import React, { memo } from "react";
import { Tile } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { CommitComparison } from "./CommitComparison";
import { LineComparison } from "./LineComparison";
import "./styles.scss";

export const Comparison = memo(
  function Comparison(_: PropLess) {
    return (
      <div className="comparison-row">
        <Tile heading="Team Code">
          <LineComparison />
        </Tile>
        <Tile heading="Team Commits">
          <CommitComparison />
        </Tile>
      </div>
    );
  },
  () => true,
);
