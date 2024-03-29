import { useRef } from "react";
import { useOnMount } from "Hooks/useOnMount";
import { useUnmount } from "Hooks/useUnmount";
import { InfiniteScroll } from "./InfiniteScroll";
import type { InfiniteScrollOptions } from "./types";

export const useInfiniteScroll = <T extends any[]>(
  options: InfiniteScrollOptions<T>,
) => {
  const ref = useRef(new InfiniteScroll(options));

  useOnMount(() => {
    ref.current.initialize();
  });

  useUnmount(() => {
    ref.current.destroy();
  });

  return ref.current;
};
