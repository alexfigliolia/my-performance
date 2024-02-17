import type { Client, ExecutionResult } from "graphql-sse";
import { createClient } from "graphql-sse";
import { HTTPClient } from "HTTP";

export class GQLSubscription<
  D,
  V extends Record<string, any> = Record<string, any>,
> extends HTTPClient<ExecutionResult<D, V>> {
  variables: V;
  query: string;
  internalUnsusbscribe?: () => void;
  private static Client?: Client<false>;
  constructor(query: string, variables: V) {
    super("/graphql");
    this.query = query;
    this.variables = variables;
  }

  public open() {
    if (!GQLSubscription.Client) {
      GQLSubscription.Client = createClient({
        url: this.destination,
        credentials: "include",
      });
    }
    this.internalUnsusbscribe = GQLSubscription.Client.subscribe<D, V>(
      {
        query: this.query,
        variables: this.variables,
      },
      this.Sink,
    );
  }

  public close() {
    if (this.internalUnsusbscribe) {
      this.internalUnsusbscribe();
    }
    this.unsubscribe();
  }

  public closeAll() {
    if (!GQLSubscription.Client) {
      return;
    }
    GQLSubscription.Client.dispose();
    GQLSubscription.Client = undefined;
  }

  private get Sink() {
    return {
      next: (data: ExecutionResult<D, V>) => {
        this.emit("on-data", data);
      },
      error: (error: unknown) => {
        this.emit(
          "on-error",
          new Error("GQL GQLSubscription Error", { cause: error }),
        );
      },
      complete: () => {},
    };
  }
}
