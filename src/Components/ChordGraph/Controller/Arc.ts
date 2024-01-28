import type { Chords } from "d3";
import { arc, select } from "d3";
import CSSVars from "Styles/exports.module.scss";
import type { IArc, SVGSelection, TextSelection, PathSelection } from "./types";
import { Options } from "./Options";

export class Arc extends Options {
  generator: IArc;
  innerRadius: number;
  outerRadius: number;
  public static ARC_REGEX = /(^.+?)L/;
  constructor(
    data: number[][],
    labels: string[],
    innerRadius: number,
    outerRadius: number,
  ) {
    super(data, labels);
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;
    this.generator = arc().innerRadius(innerRadius).outerRadius(outerRadius);
  }

  public create(SVG: SVGSelection, chords: Chords) {
    const labelArcs = SVG.append("g").attr("class", "label-arcs");
    chords.groups.forEach((d, i) => {
      //@ts-ignore
      let newArc = Arc.ARC_REGEX.exec(this.generator(d, i))![1];
      newArc = newArc.replace(/,/g, " ");
      this.stylePath(labelArcs.append("path").attr("d", newArc), i);
      this.styleLabel(labelArcs.append("text"), i);
    });
  }

  public update(SVG: SVGSelection, chords: Chords) {
    const arcs = SVG.selectAll(".label-arcs path");
    const nodes = arcs.nodes();
    SVG.selectAll(".label-arcs path")
      .data(chords.groups)
      .each((d, i) => {
        // @ts-ignore
        let newArc = Arc.ARC_REGEX.exec(this.generator(d, i))![1];
        newArc = newArc.replace(/,/g, " ");
        select(nodes[i]).transition().duration(2000).attr("d", newArc);
      });
  }

  private stylePath(path: PathSelection<any, any>, index: number) {
    return path.attr("id", this.ID(index)).style("fill", "none");
  }

  private styleLabel(text: TextSelection, index: number) {
    return text
      .attr("dy", -5)
      .style("font-weight", 700)
      .style("fill", CSSVars.blackText)
      .style("font-size", "1.25em")
      .append("textPath")
      .attr("startOffset", "50%")
      .style("text-anchor", "middle")
      .attr("xlink:href", `#${this.ID(index)}`)
      .text(this.labels[index]);
  }

  public ID(index: number) {
    return `arc${this.labels[index]}`;
  }
}
