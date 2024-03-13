import React from "react";
import { SVGGradient } from "Components/Gradients";
import CSSVars from "Styles/exports.module.scss";
import { Rainbow } from "Tools/Rainbow";

export class Controller {
  private static colorPointer = -1;
  private static readonly indexMap: Record<string, number> = {};
  private static readonly colorMap: Record<string, string> = {};
  private static readonly gradientList = Rainbow.gradientList("to right");
  private static readonly standardGradientID = "standardLanguageGradient";

  public static initializeLanguage(language?: string | null) {
    if (!language || language in this.colorMap) {
      return;
    }
    const current = ++this.colorPointer % this.gradientList.length;
    this.colorMap[language] = this.gradientList[current];
    this.indexMap[language] = this.colorPointer;
  }

  public static getColor(language?: string | null) {
    if (language && language in this.colorMap) {
      return this.colorMap[language];
    }
    return CSSVars.navGradient;
  }

  public static getColorRange(language?: string | null) {
    if (language && language in this.indexMap) {
      const index = this.indexMap[language];
      return [Rainbow.getBase(index), Rainbow.getRaised(index)];
    }
    return [CSSVars.navTeal, CSSVars.navBlue];
  }

  public static getGradient(
    language: string | null | undefined,
    identifier: string | number,
  ) {
    if (language && language in this.indexMap) {
      return Rainbow.toSVG(
        this.indexMap[language],
        `${language}Gradient${identifier}`,
        false,
      );
    }
    return (
      <SVGGradient
        color1={CSSVars.navTeal}
        color2={CSSVars.navBlue}
        id={`${this.standardGradientID}${identifier}`}
      />
    );
  }

  public static getGradientID(
    language: string | null | undefined,
    identifier: string | number,
  ) {
    if (!language) {
      return `url(#${this.standardGradientID}${identifier})`;
    }
    return `url(#${language}Gradient${identifier})`;
  }
}
