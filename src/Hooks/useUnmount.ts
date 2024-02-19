import { useEffect } from "react";
import type { Callback } from "Types/Generics";

export const useUnmount = (cb: Callback) => {
  useEffect(() => {
    () => {
      return cb();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
