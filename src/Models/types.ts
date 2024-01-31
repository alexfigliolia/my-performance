import type { IStandout, MemberStats, PullRequest } from "Tools/Types";

export interface IScreen {
  width: number;
  height: number;
}

export interface INavigation {
  search: string;
  pathname: string;
  menuOpen: boolean;
}

export interface IAuth {
  name: string;
  token: string;
  memberName: string;
  role: "admin" | "user";
}

export interface ITeam {
  team: string[];
  mesh: number[][];
  log: PullRequest[];
  totalLines: number;
  trendLines: number;
  trendCommits: number;
  totalCommits: number;
  standouts: IStandout[];
  memberStats: Record<string, MemberStats>;
}

export interface IProject {
  name: string;
  lines: number;
  commits: number;
}
