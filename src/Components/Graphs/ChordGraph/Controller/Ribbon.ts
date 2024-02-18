import type { Chord, Chords } from "d3";
import { ribbon } from "d3";
import type { IRibbon, SVGSelection } from "Tools/Types";
import { Gradient } from "./Gradient";
import { Options } from "./Options";

export class Ribbon extends Options {
  radius: number;
  generator: IRibbon;
  constructor(data: number[][], labels: string[], radius: number) {
    super(data, labels);
    this.radius = radius;
    this.labels = labels;
    this.generator = ribbon().radius(this.radius);
  }

  public create(SVG: SVGSelection, Chords: Chords) {
    SVG.append("g")
      .attr("class", "ribbons")
      .selectAll()
      .data(Chords)
      .join("path")
      .style("opacity", 0.7)
      .attr("d", this.generator)
      .attr("fill", (_, i) => Gradient.URL(i))
      .append("title")
      .text(d => this.ARIA(d));
  }

  public update(SVG: SVGSelection, Chords: Chords) {
    SVG.selectAll(".ribbons > path")
      .data(Chords)
      .transition()
      .duration(2000)
      .style("opacity", 0.7)
      .attr("d", this.generator)
      .attr("fill", (_, i) => Gradient.URL(i));
  }

  private ARIA(d: Chord) {
    return `${d.source.value.toLocaleString("en-US")} ${
      this.labels[d.source.index]
    } → ${this.labels[d.target.index]}${
      d.source.index !== d.target.index
        ? `\n${d.target.value.toLocaleString("en-US")} ${
            this.labels[d.target.index]
          } → ${this.labels[d.source.index]}`
        : ``
    }`;
  }
}
