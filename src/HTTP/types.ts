export type Stream = {
  "on-data": Response;
  "on-error": Error;
};

export interface Listener {
  ID: string;
  event: keyof Stream;
}
