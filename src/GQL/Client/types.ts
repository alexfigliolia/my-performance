export type ErrorHandling = "all" | "first";

export interface IGQL<V extends Record<string, any>> {
  query: string;
  variables: V;
}

export interface IGQLRequest<V extends Record<string, any>> extends IGQL<V> {
  errorHandling?: ErrorHandling;
}

export interface ErrorLocation {
  message: string;
  location: { column: number; line: number }[];
}
