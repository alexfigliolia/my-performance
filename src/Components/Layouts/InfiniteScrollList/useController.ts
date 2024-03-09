import { useRef } from "react";
import { Controller } from "./Controller";
import type { Options } from "./types";

export const useController = <T>(options: Options<T>) => {
  const controller = useRef(new Controller(options));
  return controller.current;
};
