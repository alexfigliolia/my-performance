import React from "react";

export class Rainbow {
  public static readonly BASE_COLORS = [
    "rgba(255, 122, 122, 1)",
    "rgba(255, 146, 122, 1)",
    "rgba(255, 195, 122, 1)",
    "rgba(255, 220, 122, 1)",
    "rgba(223, 228, 112, 1)",
    "rgba(133, 255, 122, 1)",
    "rgba(113, 238, 172, 1)",
    "rgba(113, 238, 217, 1)",
    "rgba(121, 222, 255, 1)",
    "rgba(0, 208, 255, 1)",
    "rgba(121, 186, 255, 1)",
    "rgba(121, 139, 255, 1)",
    "rgba(157, 121, 255, 1)",
    "rgba(195, 121, 255, 1)",
    "rgba(226, 121, 255, 1)",
    "rgba(255, 121, 228, 1)",
    "rgba(255, 121, 181, 1)",
    "rgba(255, 121, 148, 1)",
  ];

  public static readonly RAISED_HUE_COLORS = [
    "rgba(228, 61, 61, 1)",
    "rgba(252, 72, 32, 1)",
    "rgba(255, 144, 7, 1)",
    "rgba(255, 193, 23, 1)",
    "rgba(218, 218, 49, 1)",
    "rgba(48, 236, 31, 1)",
    "rgba(20, 223, 115, 1)",
    "rgba(23, 225, 191, 1)",
    "rgba(18, 183, 238, 1)",
    "rgba(35, 141, 254, 1)",
    "rgba(46, 72, 240, 1)",
    "rgba(90, 32, 252, 1)",
    "rgba(106, 52, 255, 1)",
    "rgba(153, 29, 254, 1)",
    "rgba(203, 18, 254, 1)",
    "rgba(251, 25, 206, 1)",
    "rgba(255, 21, 126, 1)",
    "rgba(255, 43, 85, 1)",
  ];

  public static gradientList(direction: string) {
    return this.BASE_COLORS.map((color, i) => {
      return `linear-gradient(${direction}, ${color}, ${this.RAISED_HUE_COLORS[i]})`;
    });
  }

  public static getBase(index: number) {
    return this.BASE_COLORS[index % this.BASE_COLORS.length];
  }

  public static getRaised(index: number) {
    return this.RAISED_HUE_COLORS[index % this.RAISED_HUE_COLORS.length];
  }

  public static toSVG(index: number, ID: string, vertical = true) {
    const color1 = this.getBase(index);
    const color2 = this.getRaised(index);
    const X = vertical ? 0 : 1;
    const Y = vertical ? 1 : 0;
    return (
      <linearGradient key={ID} id={ID} x1="0" x2={X} y1="0" y2={Y}>
        <stop stopColor={color1} offset="0" />
        <stop stopColor={color2} offset="0.975" />
      </linearGradient>
    );
  }
}
