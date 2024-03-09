import React, { memo } from "react";
import { InfiniteScrollList } from "Components/Layouts/InfiniteScrollList";
import { RepositorySkeleton } from "Components/Repository";
import { useUnmount } from "Hooks/useUnmount";
import { Controller } from "./Controller";

export const List = memo(
  function List({ search }: Props) {
    Controller.setSearch(search);

    useUnmount(() => {
      Controller.abort();
    });

    return (
      <InfiniteScrollList
        search={search}
        skeletonNode={RepositorySkeleton}
        renderItem={Controller.renderItem}
        queryNextPage={Controller.queryNextPage}
      />
    );
  },
  (pp, np) => pp.search === np.search,
);

interface Props {
  search: string;
}
