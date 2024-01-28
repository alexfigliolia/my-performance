import type { Chord, Chords } from "d3";
import type { SVGSelection } from "./types";
import { Rainbow } from "Tools/Rainbow";

export class Gradient {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  public create(SVG: SVGSelection, chords: Chords) {
    const gradients = SVG.append("defs")
      .selectAll("linearGradient")
      .data(chords)
      .enter()
      .append("linearGradient")
      .attr("id", (_, i) => Gradient.ID(i))
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", d => this.source(Math.cos, d))
      .attr("y1", d => this.source(Math.sin, d))
      .attr("x2", d => this.destination(Math.cos, d))
      .attr("y2", d => this.destination(Math.sin, d));
    gradients
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", d => Rainbow.getBase(d.source.index));
    gradients
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", d => Rainbow.getBase(d.target.index));
  }

  public update(SVG: SVGSelection, chord: Chords) {
    SVG.selectAll("linearGradient")
      .data(chord)
      .transition()
      .duration(2000)
      .attr("x1", d => this.source(Math.cos, d))
      .attr("y1", d => this.source(Math.sin, d))
      .attr("x2", d => this.destination(Math.cos, d))
      .attr("y2", d => this.destination(Math.sin, d));
  }

  public static ID(index: number) {
    return `chordGradient${index}`;
  }

  public static URL(index: number) {
    return `url(#${this.ID(index)})`;
  }

  private source(fn: (n: number) => number, d: Chord) {
    return (
      this.radius *
      fn(
        (d.source.endAngle - d.source.startAngle) / 2 +
          d.source.startAngle -
          Math.PI / 2,
      )
    );
  }

  private destination(fn: (n: number) => number, d: Chord) {
    return (
      this.radius *
      fn(
        (d.target.endAngle - d.target.startAngle) / 2 +
          d.target.startAngle -
          Math.PI / 2,
      )
    );
  }
}
