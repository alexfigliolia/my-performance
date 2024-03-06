export interface ITeam {
  search: string;
  team: string[];
  truncatedNames: string[];
  mesh: number[][];
  log: PullRequest[];
  totalLines: number;
  trendLines: number;
  trendCommits: number;
  totalCommits: number;
  overallStats: OverallStats[];
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
  author: string;
  delta: number;
  lines: number;
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
}
