import React, { Component } from "react";
import "./styles.scss";

export class Waves extends Component<Props> {
  public override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { id } = this.props;
    return (
      <svg
        width="770"
        height="243"
        className="waves"
        preserveAspectRatio="none"
        viewBox="0 0 770 243">
        <g transform="translate(385,121.5) scale(1,1) translate(-385,-121.5)">
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#1ae0ff" offset="0" stopOpacity={0.75} />
            <stop stopColor="#c053df" offset="0.975" stopOpacity={0.75} />
          </linearGradient>
          <path d="" fill="#1ae0ff" opacity="0.2">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="0s"
              values="M0 0L 0 119.14149710528284Q 96.25 129.74239430279204  192.5 104.43178713848374T 385 122.04663933567804T 577.5 112.92359126314088T 770 108.27273130525876L 770 0 Z;M0 0L 0 86.29912037724536Q 96.25 140.82684692300882  192.5 98.65286349773953T 385 84.41761642556347T 577.5 107.75212822405253T 770 112.4453038844973L 770 0 Z;M0 0L 0 102.95910639148886Q 96.25 95.202382719983  192.5 77.83290888142588T 385 80.62103259231644T 577.5 88.5451134545942T 770 77.35485751142218L 770 0 Z;M0 0L 0 119.14149710528284Q 96.25 129.74239430279204  192.5 104.43178713848374T 385 122.04663933567804T 577.5 112.92359126314088T 770 108.27273130525876L 770 0 Z"
            />
          </path>
          <path d="" fill={`url(#${id}`} opacity="0.3">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-3.3333333333333335s"
              values="M0 0L 0 106.71879870677803Q 96.25 145.3164607838293  192.5 104.29468190719143T 385 89.17531126971689T 577.5 107.29877652662249T 770 80.06465962093112L 770 0 Z;M0 0L 0 95.92291063151325Q 96.25 116.67809904467386  192.5 84.26213005881603T 385 128.65699415307472T 577.5 103.00913372665353T 770 95.253074564379L 770 0 Z;M0 0L 0 100.14664007178438Q 96.25 140.9308201927459  192.5 119.99499042796904T 385 132.3572049369508T 577.5 138.09770762520452T 770 133.45046455525545L 770 0 Z;M0 0L 0 106.71879870677803Q 96.25 145.3164607838293  192.5 104.29468190719143T 385 89.17531126971689T 577.5 107.29877652662249T 770 80.06465962093112L 770 0 Z"
            />
          </path>
          <path d="" fill={`url(#${id}`} opacity="0.3">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-6.666666666666667s"
              values="M0 0L 0 98.6311078805752Q 96.25 165.29712722329444  192.5 118.4163274913014T 385 132.9908237467727T 577.5 131.3446202636017T 770 89.9183860981902L 770 0 Z;M0 0L 0 102.62377482855136Q 96.25 126.30177045150666  192.5 88.87440633566501T 385 134.34928022694325T 577.5 87.82840179482012T 770 118.90845991351424L 770 0 Z;M0 0L 0 79.6303492883492Q 96.25 124.4090141039246  192.5 106.57114552692246T 385 123.27886495502514T 577.5 87.3245373438438T 770 101.12392527159072L 770 0 Z;M0 0L 0 98.6311078805752Q 96.25 165.29712722329444  192.5 118.4163274913014T 385 132.9908237467727T 577.5 131.3446202636017T 770 89.9183860981902L 770 0 Z"
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