export type Stream<T = Response> = {
  "on-data": T;
  "on-error": Error;
};

export interface Listener {
  ID: string;
  event: keyof Stream;
}
