import React from "react";
import { Repository, RepositorySkeleton } from "Components/Repository";
import {
  type ListAvailableRepositoriesQuery,
  type ListAvailableRepositoriesQueryVariables,
} from "GQL";
import { GQLClient, listAvailableRepositories } from "GQL";
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

  public static queryNextPage = async (page: number) => {
    const result = await this.query(page);
    return result.data.listAvailableRepositories;
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

  private static async query(page = 1) {
    const Client = new GQLClient<
      ListAvailableRepositoriesQuery,
      ListAvailableRepositoriesQueryVariables
    >({
      query: listAvailableRepositories,
      variables: {
        search: this.search,
        offset: (page - 1) * 30,
        organizationId: Organizations.getState().current,
      },
    });
    this.abort = () => Client.abort();
    try {
      const result = await Client.request();
      this.abort = this.NOOP;
      return result;
    } catch (error) {
      this.abort = this.NOOP;
      throw error;
    }
  }
}
