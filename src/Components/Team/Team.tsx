import React, { useCallback, useMemo } from "react";
import { ListItemTile } from "Components/Layouts";
import { Navigation } from "State/Navigation";
import { Numbers } from "Tools/Numbers";
import { Controller } from "./Controller";
import { Projects } from "./Projects";
import type { Props } from "./types";
import "./styles.scss";

export function Team({ id, name, projects, users }: Props) {
  const ID = useMemo(() => Controller.identify(name, id), [name, id]);

  const onClick = useCallback(() => {
    void Navigation.navigate(`/teams/${id}`);
  }, [id]);

  return (
    <ListItemTile
      role="link"
      tabIndex={0}
      aria-label={name}
      onClick={onClick}
      className="team-card">
      <div className="t-content">
        <Projects id={ID} total={projects.length} />
        <div className="t-info">
          <span className="t-name">{name}</span>
          <table>
            <thead>
              <tr>
                <th>Members</th>
                <th>Projects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Numbers.format(users.length)}</td>
                <td>{Numbers.format(projects.length)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ListItemTile>
  );
}
