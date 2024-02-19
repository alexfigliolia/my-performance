import type { Chords } from "d3";
import { chord, descending } from "d3";
import { Rainbow } from "Tools/Rainbow";
import type { GroupSelection, IArc, SVGSelection } from "Types/Graphs";
import { Options } from "./Options";

export class Chord extends Options {
  generator: Chords;
  constructor(...args: ConstructorParameters<typeof Options>) {
    super(...args);
    this.generator = chord().sortSubgroups(descending)(this.data);
  }

  public create(SVG: SVGSelection, Arc: IArc) {
    const group = SVG.append("g")
      .attr("class", "chord-group")
      .selectAll()
      .data(this.generator.groups)
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
}
