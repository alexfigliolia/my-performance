import React from "react";
import { Repository, RepositorySkeleton } from "Components/Repository";
import type {
  AvailableRepositoriesQuery,
  AvailableRepositoriesQueryVariables,
  AvailableRepositoriesStreamSubscription,
  AvailableRepositoriesStreamSubscriptionVariables,
} from "GQL";
import {
  availableRepositories,
  availableRepositoriesStream,
  GQLServiceClient,
  GQLServiceSubscription,
} from "GQL";
import { Navigation } from "State/Navigation";
import { Organizations } from "State/Organizations";
import { Screen } from "State/Screen";
import type { AvailableRepository } from "./types";

export class Controller {
  private static search = "";
  private static readonly NOOP = () => {};
  public static abort = this.NOOP;
  public static clearPreviousResults = false;
  private static listNode: HTMLElement | null = null;
  private static heightRetainer: ReturnType<typeof setTimeout> | null = null;

  public static setSearch(search: string) {
    this.search = search;
  }

  public static setListNode = (node: HTMLElement) => {
    this.listNode = node;
  };

  public static unmount() {
    this.abort();
    this.clearHeightRetainer();
  }

  public static retainListHeight(cb: (height?: number) => void) {
    this.heightRetainer = setTimeout(() => {
      if (this.listNode && !this.search) {
        cb(this.listNode.getBoundingClientRect().height);
      }
      this.clearHeightRetainer();
    }, 100);
  }

  public static queryNextPage = (page = 1) => {
    const params = new URLSearchParams(location.search);
    if (params.get("stream")) {
      return this.subscriptionQuery(page);
    }
    return this.HTTPQuery(page);
  };

  public static renderItem = (
    repository: AvailableRepository | null,
    index: number,
  ) => {
    if (!repository) {
      return <RepositorySkeleton key={index} />;
    }
    const { id, name, description, html_url, language, platform } = repository;
    return (
      <Repository
        id={id}
        key={index}
        name={name}
        url={html_url}
        platform={platform}
        language={language}
        description={description}
      />
    );
  };

  public static createLoaders(): null[] {
    const { width } = Screen.getState();
    let N: number;
    if (width >= 1350) {
      N = 3;
    } else if (width >= 800) {
      N = 2;
    } else {
      N = 1;
    }
    return new Array(N).fill(null);
  }

  public static clearHeightRetainer() {
    if (this.heightRetainer) {
      clearTimeout(this.heightRetainer);
      this.heightRetainer = null;
    }
  }

  private static async HTTPQuery(page = 1) {
    const Client = new GQLServiceClient<
      AvailableRepositoriesQuery,
      AvailableRepositoriesQueryVariables
    >({
      query: availableRepositories,
      variables: this.queryVariables(page),
    });
    this.abort = () => Client.abort();
    try {
      const result = await Client.request();
      this.abort = this.NOOP;
      return result.data.availableRepositories;
    } catch (error) {
      this.abort = this.NOOP;
      throw error;
    }
  }

  private static subscriptionQuery(page = 1) {
    const subscription = new GQLServiceSubscription<
      AvailableRepositoriesStreamSubscription,
      AvailableRepositoriesStreamSubscriptionVariables
    >({
      query: availableRepositoriesStream,
      variables: this.queryVariables(page),
    });
    return new Promise<AvailableRepository[]>((resolve, reject) => {
      subscription.onData(stream => {
        if (!stream.data) {
          return reject();
        }
        subscription.closeAll();
        void Navigation.navigate("/projects", { replace: true });
        resolve(stream.data.availableRepositoriesStream);
      });
      subscription.onError(error => {
        subscription.closeAll();
        reject(error);
      });
      subscription.open();
    });
  }

  private static queryVariables(page = 1) {
    return {
      search: this.search,
      offset: (page - 1) * 30,
      organizationId: Organizations.getState().current,
    };
  }
}
