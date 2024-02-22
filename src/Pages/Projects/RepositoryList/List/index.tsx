import React, { memo, useCallback, useState } from "react";
import { MasonryList } from "Components/Layouts";
import { useInfiniteScroll } from "Hooks/InfiniteScroll";
import { useSearch } from "Hooks/useSearch";
import { useUnmount } from "Hooks/useUnmount";
import { Controller } from "./Controller";
import type { AvailableRepository } from "./types";
import "./styles.scss";

export const List = memo(
  function List({ search }: Props) {
    const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
    const [loaders, setLoaders] = useState<null[]>(Controller.createLoaders());
    const [repositories, setRepositories] = useState<AvailableRepository[]>([]);
    Controller.setSearch(search);

    const onSequence = useCallback((repos: AvailableRepository[]) => {
      if (Controller.clearPreviousResults) {
        setRepositories(repos);
        Controller.clearPreviousResults = false;
      } else {
        setRepositories(ps => [...ps, ...repos]);
      }
      setLoaders([]);
      if (repos.length) {
        Controller.retainListHeight(setMinHeight);
      }
    }, []);

    const queryNextPage = useCallback(async (page: number) => {
      setLoaders(Controller.createLoaders());
      try {
        return Controller.queryNextPage(page);
      } catch (error) {
        return [];
      }
    }, []);

    const InfiniteScroll = useInfiniteScroll({
      buffer: 200,
      pageSize: 30,
      currentPage: 1,
      onData: onSequence,
      loadNextSequence: queryNextPage,
    });

    useSearch(search, () => {
      Controller.abort();
      InfiniteScroll.destroy();
      Controller.clearPreviousResults = true;
      InfiniteScroll.initialize();
    });

    useUnmount(() => {
      Controller.unmount();
    });

    return (
      <div className="repo-list" style={{ minHeight }}>
        <MasonryList
          domRef={Controller.setListNode}
          renderItem={Controller.renderItem}
          list={[...repositories, ...loaders]}
        />
      </div>
    );
  },
  (pp, np) => pp.search === np.search,
);

interface Props {
  search: string;
}
