import React, { memo, useCallback, useState } from "react";
import { MasonryList } from "Components/Layouts";
import { useInfiniteScroll } from "Hooks/InfiniteScroll";
import { useOnMount } from "Hooks/useOnMount";
import { Controller } from "./Controller";
import type { AvailableRepository } from "./types";

export const List = memo(
  function List({ search }: Props) {
    const [loaders, setLoaders] = useState<null[]>([]);
    const [repositories, setRepositories] = useState<AvailableRepository[]>([]);

    const onSequence = useCallback((repos: AvailableRepository[]) => {
      setRepositories(ps => [...ps, ...repos]);
      setLoaders([]);
    }, []);

    const queryNextPage = useCallback((page: number) => {
      setLoaders(Controller.createLoaders());
      return Controller.queryNextPage(page);
    }, []);

    const InfiniteScroll = useInfiniteScroll({
      buffer: 200,
      onData: onSequence,
      loadNextSequence: queryNextPage,
    });

    useOnMount(async () => {
      const repositories = await queryNextPage(1);
      onSequence(repositories);
      InfiniteScroll.setLastPageSize(repositories.length);
      InfiniteScroll.setCurrentPage(2);
      setTimeout(() => {
        InfiniteScroll.initialize();
      }, 100);
    });

    if (!repositories.length && !loaders.length) {
      return null;
    }

    return (
      <MasonryList
        search={search}
        renderItem={Controller.renderItem}
        list={[...repositories, ...loaders]}
      />
    );
  },
  (pp, np) => pp.search === np.search,
);

interface Props {
  search: string;
}
