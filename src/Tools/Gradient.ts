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
    const start = this.convertToRGB(this.color1);
    const end = this.convertToRGB(this.color2);
    let alpha = 0.0;
    const range = [];
    for (let i = 0; i < this.steps; i++) {
      const c = [];
      alpha += 1.0 / this.steps;
      c[0] = start[0] * alpha + (1 - alpha) * end[0];
      c[1] = start[1] * alpha + (1 - alpha) * end[1];
      c[2] = start[2] * alpha + (1 - alpha) * end[2];
      range.push(this.convertToHex(c));
    }
    return range;
  }

  private hex(c: number) {
    const s = "0123456789abcdef";
    // @ts-ignore
    let i = parseInt(c);
    if (i == 0 || isNaN(c)) {
      return "00";
    }
    i = Math.round(Math.min(Math.max(0, i), 255));
    return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
  }

  private convertToHex(rgb: number[]) {
    return `#${this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2])}`;
  }

  private trimHex(s: string) {
    return s.charAt(0) == "#" ? s.substring(1, 7) : s;
  }

  private convertToRGB(hex: string) {
    if (!hex.startsWith("#")) {
      return hex
        .replace(/rgb\(|\)/g, "")
        .split(/,| /)
        .map(v => parseInt(v));
    }
    const color = [];
    color[0] = parseInt(this.trimHex(hex).substring(0, 2), 16);
    color[1] = parseInt(this.trimHex(hex).substring(2, 4), 16);
    color[2] = parseInt(this.trimHex(hex).substring(4, 6), 16);
    return color;
  }
}
