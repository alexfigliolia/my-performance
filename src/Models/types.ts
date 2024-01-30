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

export interface ITeam {
  team: string[];
  mesh: number[][];
  log: PullRequest[];
  totalLines: number;
  trendLines: number;
  trendCommits: number;
  totalCommits: number;
  standouts: IStandout[];
  lines: Record<string, number>;
  commits: Record<string, number>;
  linesPerMonth: Record<string, number[]>;
}

export interface IProject {
  name: string;
  lines: number;
  commits: number;
}
