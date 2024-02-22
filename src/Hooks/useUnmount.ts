import { useEffect } from "react";
import type { Callback } from "Types/Generics";

export const useUnmount = <T extends Callback>(cb: T) => {
  useEffect(() => {
    return () => {
      void cb();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
