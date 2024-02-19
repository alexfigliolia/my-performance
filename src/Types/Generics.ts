export type PropertyKeys<T, M> = {
  [K in keyof T]: T[K] extends M ? K : never;
}[keyof T];

export type Callback<T = void> = () => T | Promise<T>;
