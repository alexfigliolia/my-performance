import { useEffect, useRef, useState } from "react";
import { TaskQueue } from "Tools/TaskQueue";
import { useOnMount } from "./useOnMount";

export const useAnimatedTrigger = <T>(initial: T, toValue?: T) => {
  const [current, setValue] = useState(initial);
  const mount = useRef(false);
  useOnMount(() => {
    if (toValue !== undefined && toValue !== current) {
      TaskQueue.deferTask(() => setValue(toValue), 200);
    }
  });

  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
      return;
    }
    if (toValue !== undefined && toValue !== current) {
      setValue(toValue);
    }
  }, [toValue, current]);

  return current;
};
