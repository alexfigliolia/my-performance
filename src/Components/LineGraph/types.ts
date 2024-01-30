import type { LineDatum } from "Tools/Types";

export interface Margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface IUpdate {
  width: number;
  height: number;
  data: LineDatum[];
}

export interface IScale extends IUpdate {
  margins?: Margins;
}

export interface Options extends IScale {
  id: string;
  stroke: string;
}
