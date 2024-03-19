import type { Chords } from "d3";
import { chord, descending } from "d3";
import { Rainbow } from "Tools/Rainbow";
import type { GroupSelection, IArc, SVGSelection } from "Types/Graphs";
import { Options } from "./Options";

export class Chord extends Options {
  generator: Chords;
  arcGenerator: Chords;
  constructor(...args: ConstructorParameters<typeof Options>) {
    super(...args);
    this.generator = chord().sortSubgroups(descending)(this.data);
    this.arcGenerator = this.createDefaultArc();
  }

  public create(SVG: SVGSelection, Arc: IArc) {
    const group = SVG.append("g")
      .attr("class", "chord-group")
      .selectAll()
      .data(this.arcGenerator.groups)
      .join("g") as GroupSelection;
    group
      .append("path")
      .attr("fill", d => Rainbow.getBase(d.index))
      // @ts-ignore
      .attr("d", Arc);
    this.bindEvents(SVG, group);
    return group;
  }

  public update(SVG: SVGSelection, Arc: IArc) {
    SVG.selectAll(".chord-group path")
      .data(this.generator.groups)
      .transition()
      .duration(2000)
      // @ts-ignore
      .attr("d", Arc);
  }

  private bindEvents(SVG: SVGSelection, group: GroupSelection) {
    group
      .on("mouseenter", (_, chord) => {
        SVG.selectAll(".ribbons > path")
          .data(this.generator)
          .filter(
            d =>
              d.source.index !== chord.index && d.target.index !== chord.index,
          )
          .transition()
          .duration(500)
          .style("opacity", 0.1);
      })
      .on("mouseleave", () => {
        SVG.selectAll(".ribbons > path")
          .transition()
          .duration(500)
          .style("opacity", 0.7);
      });
  }

  private createDefaultArc() {
    if (!this.generator.groups.every(chord => chord.value === 0)) {
      return this.generator;
    }
    const { length } = this.data;
    const clone = [...this.data];
    let pointer = -1;
    for (const row of clone) {
      for (let i = 0; i < length; i++) {
        row[i] = 1;
      }
      if (length !== 1) {
        row[++pointer] = 0;
      }
    }
    return chord().sortSubgroups(descending)(clone);
  }
}
