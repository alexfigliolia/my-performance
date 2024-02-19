import type { ReactNode } from "react";

export interface IColumn {
  key: string;
  className?: string;
  displayName?: string;
}

export type Columns<C extends Readonly<IColumn[]>> = {
  [I in keyof C]: C[I]["key"];
}[number];

export type IRow<C extends Readonly<IColumn[]>> = Record<Columns<C>, ReactNode>;
