import type { TrackedRepositoriesQuery, UserRole } from "GQL/Types";

export interface ITeam {
  id: number;
  name: string;
  search: string;
  mesh: number[][];
  log: PullRequest[];
  totalLines: number;
  team: OverallStats[];
  totalCommits: number;
  lineTrend: number;
  commitTrend: number;
  projectTrend: number;
  standouts: IStandout[];
  memberStats: Record<string, MemberStats>;
  trackedProjects: Map<number, { id: number; name: string }>;
}

export interface PullRequest {
  date: string;
  author: string;
  status: string;
  description: string;
  repository: string;
}

export interface IStandout {
  id: number;
  name: string;
  lines: number;
  increase: number;
}

export interface MemberStats {
  lines: number;
  commits: number;
  linesPerMonth: number[];
  recentPullRequests: number;
}

export interface OverallStats {
  id: number;
  name: string;
  lines: number;
  commits: number;
  linesPerMonth: number[];
}

export interface ICreateUser {
  name: string;
  email: string;
  role: UserRole;
}

export type Project = TrackedRepositoriesQuery["trackedRepositories"][number];
