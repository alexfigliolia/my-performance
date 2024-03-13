import React, { memo, useMemo } from "react";
import { AnimatedText } from "Components/AnimatedText";
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

    const color = useMemo(() => Controller.getColor(language), [language]);
    const gradientSVG = useMemo(
      () => Controller.getGradient(language, id),
      [language, id],
    );
    const gradientID = useMemo(
      () => Controller.getGradientID(language, id),
      [language, id],
    );
    const [color1, color2] = useMemo(
      () => Controller.getColorRange(language),
      [language],
    );

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
            "--repo-icon-path-url": gradientID,
          }}
          aria-hidden={true}
          className="searchable">
          <AnimatedText
            role="link"
            text={name}
            stagger={10}
            color1={color1}
            color2={color2}
            aria-hidden={false}
          />
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
