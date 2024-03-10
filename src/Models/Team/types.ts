export interface ITeam {
  id: number;
  name: string;
  search: string;
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
