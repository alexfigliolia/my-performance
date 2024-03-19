import { select } from "d3";
import type { SVGSelection } from "Types/Graphs";
import { Arc } from "./Arc";
import { Chord } from "./Chord";
import { Gradient } from "./Gradient";
import { Options } from "./Options";
import { Ribbon } from "./Ribbon";
import type { Options as IOptions } from "./types";

export class Controller extends Options {
  Arc: Arc;
  ID: string;
  size: number;
  Chord: Chord;
  Ribbon: Ribbon;
  Gradient: Gradient;
  SVG?: SVGSelection;
  innerRadius: number;
  outerRadius: number;
  constructor(ID: string, { size, data, labels }: IOptions) {
    super(data, labels);
    this.ID = ID;
    this.size = size;
    this.data = data;
    this.labels = labels;
    this.outerRadius = size * 0.5 - 20;
    this.innerRadius = this.outerRadius - 20;
    this.Chord = new Chord(data, labels);
    this.Gradient = new Gradient(this.innerRadius);
    this.Ribbon = new Ribbon(data, labels, this.innerRadius);
    this.Arc = new Arc(data, labels, this.innerRadius, this.outerRadius);
  }

  public create() {
    const SVG = this.sizeSVG();
    this.Gradient.create(SVG, this.Chord.generator);
    this.Chord.create(SVG, this.Arc.generator);
    this.Ribbon.create(SVG, this.Chord.generator);
    this.Arc.create(SVG, this.Chord.arcGenerator);
  }

  public update(data: number[][], labels: string[]) {
    this.data = data;
    this.labels = labels;
    this.Chord = new Chord(data, labels);
    this.Ribbon = new Ribbon(data, labels, this.innerRadius);
    this.Arc = new Arc(data, labels, this.innerRadius, this.outerRadius);
    const SVG = this.getSVG();
    this.Gradient.create(SVG, this.Chord.generator);
    this.Chord.create(SVG, this.Arc.generator);
    this.Arc.create(SVG, this.Chord.arcGenerator);
    this.Ribbon.create(SVG, this.Chord.generator);
  }

  private sizeSVG() {
    const SVG = this.getSVG();
    const radius = this.size / 2;
    return SVG.attr("width", this.size)
      .attr("height", this.size)
      .attr("viewBox", [-radius, -radius, this.size, this.size])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
  }

  private getSVG() {
    if (!this.SVG) {
      this.SVG = select(`#${this.ID}`);
    }
    return this.SVG;
  }
}
