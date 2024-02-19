import React, { memo } from "react";
import { SVGGradient } from "Components/Gradients";
import CSSVars from "Styles/exports.module.scss";
import "./styles.scss";

export const TriangleLoader = memo(
  function TriangleLoader({
    ID,
    color1 = CSSVars.purple,
    color2 = CSSVars.teal,
  }: Props) {
    return (
      <div className="triangle-loader">
        <div
          style={{ "--triangle-color1": color1, "--triangle-color2": color2 }}>
          <svg viewBox="0 0 86 80">
            <polygon
              points="43 8 79 72 7 72"
              style={{ "--triangle-gradient": `url(#${ID})` }}
            />
            <SVGGradient id={ID} color1={color1} color2={color2} />
          </svg>
        </div>
      </div>
    );
  },
  (pp, np) => {
    if (pp.ID !== np.ID) return false;
    if (pp.color1 !== np.color1) return false;
    return pp.color2 === np.color2;
  },
);

interface Props {
  ID: string;
  color1?: string;
  color2?: string;
}
