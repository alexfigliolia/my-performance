import type { LineDatum, Margins } from "Tools/Types";

export interface IUpdate {
  width: number;
  height: number;
  data: LineDatum[];
}

export interface IScale extends IUpdate {
  id: string;
  margins?: Partial<Margins>;
}

export interface Options extends IScale {
  stroke: string;
}
