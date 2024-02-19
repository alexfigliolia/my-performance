import type { RenderItemFN } from "Components/Layouts";
import type { ListAvailableRepositoriesQuery } from "GQL/Types";

export type AvailableRepository =
  ListAvailableRepositoriesQuery["listAvailableRepositories"][number];

export type RenderArgs = Parameters<RenderItemFN<AvailableRepository>>;
