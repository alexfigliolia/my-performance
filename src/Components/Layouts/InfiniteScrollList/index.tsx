import React, { memo, useCallback, useState } from "react";
import { MasonryList } from "Components/Layouts";
import { useInfiniteScroll } from "Hooks/InfiniteScroll";
import { useSearch } from "Hooks/useSearch";
import { useUnmount } from "Hooks/useUnmount";
import type { Options } from "./types";
import { useController } from "./useController";
import "./styles.scss";

function InfiniteScrollListRenderer<T>({ search, ...rest }: Props<T>) {
  const Controller = useController(rest);
  const [listItems, setListItems] = useState<T[]>([]);
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
  const [loaders, setLoaders] = useState<null[]>(Controller.createLoaders());

  Controller.setSearch(search);

  const onSequence = useCallback(
    (items: T[]) => {
      if (Controller.clearPreviousResults) {
        setListItems(items);
        Controller.clearPreviousResults = false;
      } else {
        setListItems(ps => [...ps, ...items]);
      }
      setLoaders([]);
      if (items.length) {
        Controller.retainListHeight(setMinHeight);
      }
    },
    [Controller],
  );

  const queryNextPage = useCallback(
    async (page: number) => {
      setLoaders(Controller.createLoaders());
      try {
        return Controller.queryNextPage(page);
      } catch (error) {
        return [];
      }
    },
    [Controller],
  );

  const InfiniteScroll = useInfiniteScroll({
    buffer: 200,
    pageSize: 30,
    currentPage: 1,
    onData: onSequence,
    loadNextSequence: queryNextPage,
  });

  useSearch(search, () => {
    InfiniteScroll.destroy();
    Controller.clearPreviousResults = true;
    InfiniteScroll.initialize();
  });

  useUnmount(() => {
    Controller.unmount();
  });

  return (
    <div className="infinite-scroll-list" style={{ minHeight }}>
      <MasonryList
        domRef={Controller.setListNode}
        renderItem={Controller.renderItems}
        list={[...listItems, ...loaders]}
      />
    </div>
  );
}

interface Props<T> extends Options<T> {
  search: string;
}

export const InfiniteScrollList = memo(
  InfiniteScrollListRenderer,
  (pp, np) => pp.search === np.search,
) as typeof InfiniteScrollListRenderer;
