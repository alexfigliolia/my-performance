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
  features: string[];
  mesh: number[][];
  lines: Record<string, number>;
  log: PullRequest[];
  standouts: IStandout[];
}
