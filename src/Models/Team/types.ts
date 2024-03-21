import type { QuickStack } from "Generics/QuickStack";
import type {
  OverallStatsPerUser,
  PullRequest,
  TrackedRepositoriesQuery,
  UserRole,
} from "GQL/Types";

export interface ITeam {
  id: number;
  name: string;
  search: string;
  loading: boolean;
  key: string[];
  mesh: number[][];
  totalLines: number;
  totalCommits: number;
  lineTrend: number;
  commitTrend: number;
  projectTrend: number;
  standouts: IStandout[];
  team: OverallStatsPerUser[];
  pullRequests: PullRequest[];
  trackedProjects: QuickStack<number, { id: number; name: string }>;
}

export interface IStandout {
  id: number;
  name: string;
  lines: number;
  increase: number;
}

export interface ICreateUser {
  name: string;
  email: string;
  role: UserRole;
}

export type Project = TrackedRepositoriesQuery["trackedRepositories"][number];
