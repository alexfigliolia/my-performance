import React, { memo } from "react";
import { ListItemTile } from "Components/Layouts";
import type { Platform } from "GQL";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import { Right } from "Icons/Right";
import { useTeam } from "State/Team";
import { Controller } from "./Controller";
import { TrackButton } from "./TrackButton";
import "./style.scss";

export const Repository = memo(
  function Repository({
    id,
    url,
    name,
    language,
    platform,
    description,
  }: Props) {
    const tracked = useTeam(state => state.trackedProjects.has(id));
    Controller.initializeLanguage(language);

    const color = Controller.getColor(language);
    const gradientSVG = Controller.getGradient(language, id);
    const gradientID = Controller.getGradientID(language, id);

    return (
      <ListItemTile className="repo">
        <div className="repo-source">
          {platform === "github" ? <Github /> : <Bitbucket />}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{
            "--repo-link-hover-color": color,
            "--repo-icon-path-url": gradientID,
          }}
          className="searchable">
          {name}
          <Right>{gradientSVG}</Right>
        </a>
        <div className="language">
          <div className="dot" style={{ background: color }} />
          <span>{language || "Unknown"}</span>
        </div>
        {description && <p className="searchable">{description}</p>}
        <div className="track-action">
          <TrackButton id={id} color={color} tracked={tracked} />
        </div>
      </ListItemTile>
    );
  },
  (pp, np) => pp.id === np.id,
);

interface Props {
  id: number;
  url: string;
  name: string;
  platform: Platform;
  language?: string | null;
  description?: string | null;
}
