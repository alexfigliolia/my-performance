import React, { memo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { PropLess } from "Types/React";
import "./styles.scss";

export const Skeleton = memo(
  function Teammate(_: PropLess) {
    return (
      <ListItemTile className="teammate skeleton">
        <div className="row">
          <div className="progress" />
          <div className="stats">
            <span className="name" />
            <table>
              <thead>
                <tr>
                  <th>
                    <span>Lines</span>
                  </th>
                  <th>
                    <span>Commits</span>
                  </th>
                  <th>
                    <span>PR&apos;s</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span aria-hidden={true}>100000</span>
                  </td>
                  <td>
                    <span aria-hidden={true}>1000</span>
                  </td>
                  <td>
                    <span aria-hidden={true}>100</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="line-graph" />
          </div>
        </div>
      </ListItemTile>
    );
  },
  () => true,
);
