import React from "react";

export class Rainbow {
  public static readonly BASE_COLORS = [
    "rgb(255, 122, 122)",
    "rgb(255, 146, 122)",
    "rgb(255, 195, 122)",
    "rgb(255, 220, 122)",
    "rgb(223, 228, 112)",
    "rgb(133, 255, 122)",
    "rgb(113, 238, 172)",
    "rgb(113, 238, 217)",
    "rgb(121, 222, 255)",
    "rgb(0, 208, 255)",
    "rgb(121, 186, 255)",
    "rgb(121, 139, 255)",
    "rgb(157, 121, 255)",
    "rgb(195, 121, 255)",
    "rgb(226, 121, 255)",
    "rgb(255, 121, 228)",
    "rgb(255, 121, 181)",
    "rgb(255, 121, 148)",
  ];

  public static readonly RAISED_HUE_COLORS = [
    "rgb(228, 61, 61)",
    "rgb(252, 72, 32)",
    "rgb(255, 144, 7)",
    "rgb(255, 193, 23)",
    "rgb(218, 218, 49)",
    "rgb(48, 236, 31)",
    "rgb(20, 223, 115)",
    "rgb(23, 225, 191)",
    "rgb(18, 183, 238)",
    "rgb(35, 141, 254)",
    "rgb(46, 72, 240)",
    "rgb(90, 32, 252)",
    "rgb(106, 52, 255)",
    "rgb(153, 29, 254)",
    "rgb(203, 18, 254)",
    "rgb(251, 25, 206)",
    "rgb(255, 21, 126)",
    "rgb(255, 43, 85)",
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
