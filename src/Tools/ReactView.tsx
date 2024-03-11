import type { FC } from "react";

export interface IReactView<
  S extends Record<string, any>,
  C extends FC<any> & { Controller?: S },
> {
  Component: C;
  Controller: S;
}

export const ReactView = <
  S extends Record<string, any>,
  C extends FC<any> & { Controller?: S },
>({
  Controller,
  Component,
}: IReactView<S, C>) => {
  type Props = Parameters<C>[0];
  Component.Controller = Controller;
  return Component as FC<Props> & { Controller: S };
};
