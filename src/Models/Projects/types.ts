import type { TrackedRepositoriesQuery } from "GQL";

export interface IProjects {
  name: string;
  lines: number;
  commits: number;
  projectOrder: number[];
  trackedProjects: Record<number, IRepository>;
}

export type IRepository =
  TrackedRepositoriesQuery["trackedRepositories"][number];
