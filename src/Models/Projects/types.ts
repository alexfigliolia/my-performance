import type { TrackedRepositoriesQuery } from "GQL";

export interface IProjects {
  name: string;
  lines: number;
  commits: number;
  trackedProjects: IRepository[];
}

export type IRepository =
  TrackedRepositoriesQuery["trackedRepositories"][number];
