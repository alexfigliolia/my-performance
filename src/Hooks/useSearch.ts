import { useRef } from "react";
import { Debouncer } from "Generics/Debouncer";
import { useUnmount } from "Hooks/useUnmount";
import type { Callback } from "Types/Generics";

export const useSearch = <T extends string>(
  search: T,
  onSearch: Callback<void, [search: T]>,
  threshold = 250,
) => {
  const previous = useRef(search);
  const debouncer = useRef(new Debouncer(onSearch, threshold));

  useUnmount(() => {
    debouncer.current.clear();
  });

  if (search !== previous.current) {
    previous.current = search;
    debouncer.current.execute(search);
  }
};
