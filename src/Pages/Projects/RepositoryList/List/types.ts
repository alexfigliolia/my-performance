import type { RenderItemFN } from "Components/Layouts";
import type { AvailableRepositoriesQuery } from "GQL/Types";

export type AvailableRepository =
  AvailableRepositoriesQuery["availableRepositories"][number];

export type RenderArgs = Parameters<RenderItemFN<AvailableRepository>>;
