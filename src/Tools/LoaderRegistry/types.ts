export type LoaderStream<T> = {
  execute: T;
};

export type LoadTask<T> = (data: T) => void | Promise<void>;
