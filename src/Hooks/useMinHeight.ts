import { useCallback, useState } from "react";
import { Debouncer } from "Generics/Debouncer";
import { useController } from "./useController";
import { useUnmount } from "./useUnmount";

export const useMinHeight = (): [
  minHeight: number | undefined,
  setMinHeight: (_: number, height: number) => void,
] => {
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);

  const cacheHeight = useCallback(
    (_: number, height: number) => {
      if (height !== minHeight) {
        setMinHeight(height);
      }
    },
    [minHeight],
  );

  const debouncer = useController(new Debouncer(cacheHeight, 100));

  const debounceMinHeight = useCallback(
    (_: number, height: number) => {
      setMinHeight(undefined);
      debouncer.execute(0, height);
    },
    [debouncer],
  );

  useUnmount(() => {
    debouncer.clear();
  });

  return [minHeight, debounceMinHeight];
};
