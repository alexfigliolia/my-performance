import React, { memo, useCallback, useState } from "react";
import { MasonryList } from "Components/Layouts";
import { useInfiniteScroll } from "Hooks/InfiniteScroll";
import { useOnMount } from "Hooks/useOnMount";
import { Controller } from "./Controller";
import type { AvailableRepository } from "./types";

export const List = memo(
  function List({ search }: Props) {
    const [repositories, setRepositories] = useState<AvailableRepository[]>([]);

    const onSequence = useCallback(
      (repos: AvailableRepository[]) => {
        setRepositories(ps => [...ps, ...repos]);
      },
      [setRepositories],
    );

    const InfiniteScroll = useInfiniteScroll({
      buffer: 100,
      onData: onSequence,
      loadNextSequence: Controller.queryNextPage,
    });

    useOnMount(async () => {
      const repos = await Controller.queryNextPage(1);
      onSequence(repos);
      InfiniteScroll.setLastPageSize(repositories.length);
      InfiniteScroll.setCurrentPage(2);
      setTimeout(() => {
        InfiniteScroll.initialize();
      }, 100);
    });

    if (!repositories.length) {
      return null;
    }

    return (
      <MasonryList
        search={search}
        list={repositories}
        renderItem={Controller.renderItem}
      />
    );
  },
  (pp, np) => pp.search === np.search,
);

interface Props {
  search: string;
}
