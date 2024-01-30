import React, { Component } from "react";
import CSSVars from "Styles/exports.module.scss";
import "./styles.scss";

export class Waves extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { id } = this.props;
    return (
      <svg
        className="waves"
        width="1668"
        height="329"
        preserveAspectRatio="none"
        viewBox="0 0 1668 329">
        <g transform="translate(840,259.5) scale(1,1) translate(-840,-259.5)">
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop stopColor={CSSVars.teal} offset="0" stopOpacity={0.75} />
            <stop
              stopColor={CSSVars.purple}
              offset="0.975"
              stopOpacity={0.75}
            />
          </linearGradient>
          <path d="" fill={CSSVars.teal} opacity="0.2">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="0s"
              values="M0 0L 0 331.41570081571416Q 210 356.6220902785398  420 338.9878090269359T 840 301.7302475137739T 1260 351.33316661549384T 1680 371.5639876409948L 1680 0 Z;M0 0L 0 352.8318944698936Q 210 412.85749353713913  420 387.27444033764175T 840 307.6004087243592T 1260 325.4523192380444T 1680 344.6548347009041L 1680 0 Z;M0 0L 0 334.90640600108514Q 210 376.0820567031249  420 345.5844486318374T 840 330.3791812930007T 1260 381.8410593397256T 1680 383.1827151074407L 1680 0 Z;M0 0L 0 331.41570081571416Q 210 356.6220902785398  420 338.9878090269359T 840 301.7302475137739T 1260 351.33316661549384T 1680 371.5639876409948L 1680 0 Z"
            />
          </path>
          <path d="" fill={`url(#${id})`} opacity="0.3">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-3.3333333333333335s"
              values="M0 0L 0 298.5003094110703Q 210 418.43243594288873  420 398.2196453659427T 840 386.7429865115488T 1260 316.6580184535879T 1680 345.55020176956003L 1680 0 Z;M0 0L 0 403.63911838472234Q 210 368.8508602495676  420 325.505976190001T 840 332.25035056718275T 1260 397.93432822233143T 1680 381.6438311794427L 1680 0 Z;M0 0L 0 313.62642012567085Q 210 394.5163605692821  420 355.20861863416775T 840 351.3116706226377T 1260 379.3228803236316T 1680 394.7123989911219L 1680 0 Z;M0 0L 0 298.5003094110703Q 210 418.43243594288873  420 398.2196453659427T 840 386.7429865115488T 1260 316.6580184535879T 1680 345.55020176956003L 1680 0 Z"
            />
          </path>
          <path d="" fill={`url(#${id})`} opacity="0.3">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-6.666666666666667s"
              values="M0 0L 0 300.29916253613436Q 210 406.68892960946357  420 380.68879078863586T 840 376.55996046046045T 1260 386.30146494343757T 1680 394.1804861219762L 1680 0 Z;M0 0L 0 361.5193396294266Q 210 374.42636860197854  420 333.5604476517778T 840 370.2744199321973T 1260 314.4785533955547T 1680 355.10593482702825L 1680 0 Z;M0 0L 0 352.43048269560836Q 210 352.1878711175681  420 331.4675025251847T 840 354.08870219074765T 1260 350.4576630522606T 1680 357.056504714037L 1680 0 Z;M0 0L 0 300.29916253613436Q 210 406.68892960946357  420 380.68879078863586T 840 376.55996046046045T 1260 386.30146494343757T 1680 394.1804861219762L 1680 0 Z"
            />
          </path>
        </g>
      </svg>
    );
  }
}

interface Props {
  id: string;
}
