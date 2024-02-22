import { useEffect, useRef } from "react";
import type { Callback } from "Types/Generics";

export const useOnUpdate = <C extends Callback, D extends any[]>(
  cb: C,
  dependencies: D,
) => {
  const callCount = useRef(-1);
  useEffect(() => {
    callCount.current++;
    if (callCount.current !== 0) {
      void cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
