import { GQLSubscription } from "@alexfigliolia/graphql-client";
import type { IGQL } from "./types";

export class GQLServiceSubscription<
  D,
  V extends Record<string, any>,
> extends GQLSubscription<D, V> {
  constructor(options: IGQL<V>) {
    super({
      url: "/graphql",
      ...options,
    });
  }
}
