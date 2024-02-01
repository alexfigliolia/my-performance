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

export interface IUser {
  name: string;
  token: string;
  memberName: string;
  role: "admin" | "user";
  collaborators: string[];
  recentPullRequests: PullRequest[];
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

export interface IModals {
  active: boolean;
  userCreation: boolean;
}
