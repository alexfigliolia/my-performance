export interface IProfile {
  id: number;
  name: string;
  lines: number;
  commits: number;
  loading: boolean;
  teams: TeamProfile[];
}

export interface TeamProfile {
  id: number;
  name: string;
  lines: number;
  commits: number;
  linesPerMonth: number[];
}

export interface IGetProfile {
  organizationId?: number;
  userId?: number;
}
