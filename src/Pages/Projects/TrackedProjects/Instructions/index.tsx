import React, { memo } from "react";
import { CreatePie } from "Components/Art";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Instructions = memo(
  function Instructions(_: PropLess) {
    return (
      <div className="select-project-instructions">
        <div className="art">
          <CreatePie />
        </div>
        <div className="text">
          <p>
            To track contributions, select the repositories your team
            contributes to below
          </p>
        </div>
      </div>
    );
  },
  () => true,
);
