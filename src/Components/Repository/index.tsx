import React, { Component } from "react";
import { ListItemTile } from "Components/ListItemTile";
import { SVGGradient } from "Components/SVGGradient";
import { Bitbucket } from "Icons/Bitbucket";
import { Github } from "Icons/Github";
import { Right } from "Icons/Right";
import CSSVars from "Styles/exports.module.scss";
import { Rainbow } from "Tools/Rainbow";
import "./style.scss";

export class Repository extends Component<Props> {
  private static colorPointer = -1;
  private static languageIndexMap: Record<string, number> = {};
  private static languageColorMap: Record<string, string> = {};
  private static gradientList = Rainbow.gradientList("to right");
  constructor(props: Props) {
    super(props);
    const { language } = this.props;
    if (language && !(language in Repository.languageColorMap)) {
      Repository.languageColorMap[language] =
        Repository.gradientList[
          ++Repository.colorPointer % Repository.gradientList.length
        ];
      Repository.languageIndexMap[language] = Repository.colorPointer;
    }
  }

  private getColor(language?: string | null) {
    if (language && language in Repository.languageColorMap) {
      return Repository.languageColorMap[language];
    }
    return CSSVars.navGradient;
  }

  private getSVGGradient(language?: string | null) {
    if (language && language in Repository.languageIndexMap) {
      return Rainbow.toSVG(
        Repository.languageIndexMap[language],
        `${language}Gradient`,
        false,
      );
    }
    return (
      <SVGGradient
        color1={CSSVars.navTeal}
        color2={CSSVars.navBlue}
        id="standardLanguageGradient"
      />
    );
  }

  public override render() {
    const { name, url, language, description, source } = this.props;
    const color = this.getColor(language);
    const gradientID = `url(#${language ? `${language}Gradient` : "standardLanguageGradient"})`;
    return (
      <ListItemTile className="repo">
        <div className="repo-source">
          {source === "github" ? <Github /> : <Bitbucket />}
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
              "--repo-icon-path-url": gradientID,
            }}>
            {this.getSVGGradient(language)}
          </Right>
        </a>
        <div className="language">
          <div
            className="dot"
            style={{ background: this.getColor(language) }}
          />
          <span>{language || "unknown language"}</span>
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
  source: string;
  language?: string | null;
  description?: string | null;
}
