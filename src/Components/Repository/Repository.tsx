import React, { Component } from "react";
import { ListItemTile } from "Components/Layouts";
import type { Platform } from "GQL";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import { Right } from "Icons/Right";
import { Controller } from "./Controller";
import "./style.scss";

export class Repository extends Component<Props, State> {
  public state: State = { visible: false };
  constructor(props: Props) {
    super(props);
    const { language } = this.props;
    if (language) {
      Controller.initializeLanguage(language);
    }
  }

  public override componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 50);
  }

  public override render() {
    const { visible } = this.state;
    const { name, url, language, description, platform } = this.props;
    const color = Controller.getColor(language);
    return (
      <ListItemTile className={`repo ${visible ? "visible" : ""}`}>
        <div className="repo-source">
          {platform === "github" ? <Github /> : <Bitbucket />}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{
            "--repo-link-hover-color": color,
          }}
          className="searchable">
          {name}
          <Right
            pathStyle={{
              "--repo-icon-path-url": Controller.getGradientID(language),
            }}>
            {Controller.getGradient(language)}
          </Right>
        </a>
        <div className="language">
          <div className="dot" style={{ background: color }} />
          <span>{language || "Unknown"}</span>
        </div>
        {description && <p className="searchable">{description}</p>}
        <div className="track-action">
          <button
            style={{
              "--repo-link-hover-color": color,
            }}>
            Track this repo
          </button>
        </div>
      </ListItemTile>
    );
  }
}

interface Props {
  url: string;
  name: string;
  platform: Platform;
  language?: string | null;
  description?: string | null;
}

interface State {
  visible: boolean;
}
