import { useEffect } from "react";
import type { Callback } from "Types/Generics";

export const useOnMount = (cb: Callback) => {
  useEffect(() => {
    void cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
