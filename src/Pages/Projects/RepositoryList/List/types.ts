import type { ListAvailableRepositoriesQuery } from "GQL/Types";

export type AvailableRepository =
  ListAvailableRepositoriesQuery["listAvailableRepositories"][number];
