import type { ComponentType } from "react";
import React from "react";
import type { RenderItemFN } from "Components/Layouts/MasonryList";
import { Screen } from "State/Screen";
import type { PropLess } from "Types/React";
import type { Options, PageQuery } from "./types";

export class Controller<T> {
  private search = "";
  public queryNextPage: PageQuery<T>;
  private renderItem: RenderItemFN<T>;
  public clearPreviousResults = false;
  private listNode: HTMLElement | null = null;
  private skeletonNode: ComponentType<PropLess>;
  private heightRetainer: ReturnType<typeof setTimeout> | null = null;
  constructor({ queryNextPage, renderItem, skeletonNode }: Options<T>) {
    this.renderItem = renderItem;
    this.skeletonNode = skeletonNode;
    this.queryNextPage = queryNextPage;
  }

  public setSearch(search: string) {
    this.search = search;
  }

  public setListNode = (node: HTMLElement) => {
    this.listNode = node;
  };

  public unmount() {
    this.clearHeightRetainer();
  }

  public retainListHeight(cb: (height?: number) => void) {
    this.heightRetainer = setTimeout(() => {
      if (this.listNode && !this.search) {
        cb(this.listNode.getBoundingClientRect().height);
      }
      this.clearHeightRetainer();
    }, 100);
  }

  public renderItems = (item: T | null, index: number, list: (T | null)[]) => {
    if (!item) {
      const { skeletonNode: Skeleton } = this;
      return <Skeleton key={index} />;
    }
    return this.renderItem(item, index, list as T[]);
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

  public clearHeightRetainer() {
    if (this.heightRetainer) {
      clearTimeout(this.heightRetainer);
      this.heightRetainer = null;
    }
  }
}
