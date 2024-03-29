import React, { memo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Skeleton = memo(
  function Skeleton(_: PropLess) {
    return (
      <ListItemTile className="team-card skeleton">
        <div className="t-content">
          <div className="progress" />
          <div className="t-info">
            <span className="t-name" />
            <table>
              <thead>
                <tr>
                  <th>
                    <span>Members</span>
                  </th>
                  <th>
                    <span>Projects</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td aria-label="loading teams">
                    <span>10</span>
                  </td>
                  <td aria-label="loading projects">
                    <span>10</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ListItemTile>
    );
  },
  () => true,
);
