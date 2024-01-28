import type { To } from "react-router-dom";

export type PropLess = Record<string, never>;

export type MethodLike<T = any> = (...args: any[]) => T;

export type MethodKeys<T, R = any> = keyof {
  [K in keyof T as Required<T>[K] extends MethodLike<R> ? K : never]: T[K];
};

export type Navigator = (to: To) => Promise<void>;

export type Formatter = (value: number) => string;
