import { GQLRequest } from "@alexfigliolia/graphql-client";
import type { IGQLRequest } from "./types";

export const GQLServiceRequest = <T, V extends Record<string, any>>(
  options: IGQLRequest<V>,
) =>
  GQLRequest<T, V>({
    url: "/graphql",
    ...options,
  });
