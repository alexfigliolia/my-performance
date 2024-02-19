import { useRef } from "react";
import { useUnmount } from "Hooks/useUnmount";
import { InfiniteScroll } from "./InfiniteScroll";
import type { InfiniteScrollOptions } from "./types";

export const useInfiniteScroll = <T extends any[]>(
  options: InfiniteScrollOptions<T>,
) => {
  const ref = useRef(new InfiniteScroll(options));

  useUnmount(() => {
    ref.current.destroy();
  });

  return ref.current;
};
