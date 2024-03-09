import type { CreateTeamMutation, TeamsQuery } from "GQL/Types";

export interface ITeam {
  search: string;
  teams: Team[];
  myTeams: MyTeam[];
  mesh: number[][];
  log: PullRequest[];
  totalLines: number;
  trendLines: number;
  team: OverallStats[];
  trendCommits: number;
  totalCommits: number;
  standouts: IStandout[];
  memberStats: Record<string, MemberStats>;
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

export type Team = TeamsQuery["teams"][number];
export type MyTeam = CreateTeamMutation["createTeam"];
