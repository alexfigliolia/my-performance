import { useRef } from "react";
import { TaskQueue } from "@figliolia/task-queue";
import { useUnmount } from "./useUnmount";

export const useTaskQueue = () => {
  const TQ = useRef(new TaskQueue());

  useUnmount(() => {
    TQ.current.clearPendingTasks();
  });

  return TQ.current;
};
