import type { RGBTuple } from "./types";

export class Gradient {
  steps: number;
  color1: string;
  color2: string;
  constructor(color1: string, color2: string, steps: number) {
    this.steps = steps;
    this.color1 = color1;
    this.color2 = color2;
  }

  public generate() {
    const result: string[] = [];
    const colorA = this.hexToRgb(this.color1);
    const colorB = this.hexToRgb(this.color2);
    const rStep = this.calculateStep(colorA[0], colorB[0]);
    const gStep = this.calculateStep(colorA[1], colorB[1]);
    const bStep = this.calculateStep(colorA[2], colorB[2]);
    result.push("#" + this.rgbToHex(colorA));
    let redValue = colorA[0];
    let greenValue = colorA[1];
    let blueValue = colorA[2];
    for (let i = 0; i < this.steps - 1; i++) {
      redValue =
        colorA[0] < colorB[0]
          ? redValue + Math.round(rStep)
          : redValue - Math.round(rStep);
      greenValue =
        colorA[1] < colorB[1]
          ? greenValue + Math.round(gStep)
          : greenValue - Math.round(gStep);
      blueValue =
        colorA[2] < colorB[2]
          ? blueValue + Math.round(bStep)
          : blueValue - Math.round(bStep);
      result.push("#" + this.rgbToHex([redValue, greenValue, blueValue]));
    }
    result.push("#" + this.rgbToHex(colorB));
    return result;
  }

  private hexToRgb(hex: string): RGBTuple {
    if (hex.startsWith("rgb(")) {
      const [r, g, b] = hex
        .replace(/rgb\(|\)|\s/g, "")
        .split(/,| /)
        .map(v => parseInt(v));
      return [r, g, b];
    }
    hex = hex.replace("#", "");
    if (hex.length !== 3 && hex.length !== 6) {
      return [255, 255, 255];
    }
    if (hex.length == 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return [
      parseInt(hex.substr(0, 2), 16),
      parseInt(hex.substr(2, 2), 16),
      parseInt(hex.substr(4, 2), 16),
    ];
  }

  private rgbToHex(color: [r: number, g: number, b: number]) {
    color[0] = color[0] > 255 ? 255 : color[0] < 0 ? 0 : color[0];
    color[1] = color[1] > 255 ? 255 : color[1] < 0 ? 0 : color[1];
    color[2] = color[2] > 255 ? 255 : color[2] < 0 ? 0 : color[2];
    return (
      this.zeroFill(color[0].toString(16), 2) +
      this.zeroFill(color[1].toString(16), 2) +
      this.zeroFill(color[2].toString(16), 2)
    );
  }

  private zeroFill(token: string, width: number) {
    width -= token.toString().length;
    if (width > 0) {
      const padding = /\./.test(token) ? 2 : 1;
      return `${new Array(width + padding).join("0")}${token}`;
    }
    return token;
  }

  private calculateStep(colorA: number, colorB: number) {
    return (Math.max(colorA, colorB) - Math.min(colorA, colorB)) / this.steps;
  }
}
