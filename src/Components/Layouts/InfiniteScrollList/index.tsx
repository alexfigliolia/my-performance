import React, { memo, useCallback, useMemo, useState } from "react";
import { MasonryList } from "Components/Layouts";
import { useInfiniteScroll } from "Hooks/InfiniteScroll";
import { useController } from "Hooks/useController";
import { useSearch } from "Hooks/useSearch";
import { useUnmount } from "Hooks/useUnmount";
import { Controller } from "./Controller";
import type { Options } from "./types";
import "./styles.scss";

function InfiniteScrollListRenderer<T>({ search, ...rest }: Props<T>) {
  const controller = useController(new Controller(rest));
  const [listItems, setListItems] = useState<T[]>([]);
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
  const [loaders, setLoaders] = useState<null[]>(Controller.createLoaders());

  controller.setSearch(search);

  const onSequence = useCallback(
    (items: T[]) => {
      if (controller.clearPreviousResults) {
        setListItems(items);
        controller.clearPreviousResults = false;
      } else {
        setListItems(ps => [...ps, ...items]);
      }
      setLoaders([]);
      if (items.length) {
        controller.retainListHeight(setMinHeight);
      }
    },
    [controller],
  );

  const queryNextPage = useCallback(
    async (page: number) => {
      setLoaders(Controller.createLoaders());
      try {
        return controller.queryNextPage(page);
      } catch (error) {
        return [];
      }
    },
    [controller],
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
    controller.clearPreviousResults = true;
    InfiniteScroll.initialize();
  });

  useUnmount(() => {
    controller.unmount();
  });

  const renderableList = useMemo(
    () => [...listItems, ...loaders],
    [listItems, loaders],
  );

  return (
    <div className="infinite-scroll-list" style={{ minHeight }}>
      <MasonryList
        list={renderableList}
        domRef={controller.setListNode}
        renderItem={controller.renderItems}
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
