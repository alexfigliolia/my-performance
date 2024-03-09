import type { ComponentType } from "react";
import type { RenderItemFN } from "Components/Layouts/MasonryList";
import type { PropLess } from "Types/React";

export interface Options<T> {
  queryNextPage: PageQuery<T>;
  renderItem: RenderItemFN<T>;
  skeletonNode: ComponentType<PropLess>;
}

export type PageQuery<T> = (page: number) => Promise<T[]>;
