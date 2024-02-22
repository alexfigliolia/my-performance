import { useEffect } from "react";
import type { Callback } from "Types/Generics";

export const useOnMount = <T extends Callback>(cb: T) => {
  useEffect(() => {
    void cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
