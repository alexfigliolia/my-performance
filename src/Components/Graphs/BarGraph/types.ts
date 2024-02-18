import type { Margins } from "Tools/Types";

export interface IUpdate {
  width: number;
  height: number;
  xData: string[];
  yData: number[];
}

export interface IScales extends IUpdate {
  id: string;
  margins?: Partial<Margins>;
}

export interface Options extends IScales {
  colors?: string | string[];
}
