export type Listener = (state: GraphState) => void;

export interface Datum {
  label: string;
  value: number;
}

export interface GraphState {
  min: number;
  max: number;
  data: Datum[];
  yAxis: number[];
  barSize: number;
  barRadius: number;
}

export interface Options {
  data: Datum[];
  zeroMin: boolean;
}
