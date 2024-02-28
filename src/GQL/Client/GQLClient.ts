import { GQLClient } from "@alexfigliolia/graphql-client";
import type { IGQLRequest } from "./types";

export class GQLServiceClient<
  T,
  V extends Record<string, any>,
> extends GQLClient<T, V> {
  constructor(options: IGQLRequest<V>) {
    super({
      url: "/graphql",
      ...options,
    });
  }
}
