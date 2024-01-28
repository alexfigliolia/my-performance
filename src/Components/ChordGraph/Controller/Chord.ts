import type { Chords } from "d3";
import { chord, descending } from "d3";
import { Rainbow } from "Tools/Rainbow";
import { Options } from "./Options";
import type { GroupSelection, IArc, SVGSelection } from "./types";

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
      .join("g");
    group
      .append("path")
      .attr("fill", d => Rainbow.getBase(d.index))
      // @ts-ignore
      .attr("d", Arc);
    return group as GroupSelection;
  }

  public update(SVG: SVGSelection, Arc: IArc) {
    SVG.selectAll(".chord-group path")
      .data(this.generator.groups)
      .transition()
      .duration(2000)
      // @ts-ignore
      .attr("d", Arc);
  }
}
