import type { QuickStack } from "Generics/QuickStack";
import type { TrackedRepositoriesQuery, UserRole } from "GQL/Types";

export interface ITeam {
  id: number;
  name: string;
  search: string;
  loading: boolean;
  key: string[];
  mesh: number[][];
  totalLines: number;
  team: OverallStats[];
  totalCommits: number;
  lineTrend: number;
  commitTrend: number;
  projectTrend: number;
  standouts: IStandout[];
  pullRequests: PullRequest[];
  trackedProjects: QuickStack<number, { id: number; name: string }>;
}

export interface PullRequest {
  id: number;
  date: string;
  author: string;
  project: string;
  description: string;
}

export interface IStandout {
  id: number;
  name: string;
  lines: number;
  increase: number;
}

export interface OverallStats {
  id: number;
  name: string;
  lines: number;
  commits: number;
  pullRequests: number;
  linesPerMonth: number[];
}

export interface ICreateUser {
  name: string;
  email: string;
  role: UserRole;
}

export type Project = TrackedRepositoriesQuery["trackedRepositories"][number];
