import type { BaseOrganizationAndUserRole } from "GQL";
import type { IStandout, MemberStats, PullRequest } from "Tools/Types";

export interface IScreen {
  width: number;
  height: number;
}

export interface INavigation {
  search: string;
  pathname: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  verified: boolean;
}

export interface IUserStats {
  collaborators: string[];
  recentPullRequests: PullRequest[];
}

export interface ITeam {
  search: string;
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
  editUser: boolean;
  menuOpen: boolean;
  userCreation: boolean;
}

export interface IEditUser {
  name: string;
  email: string;
  position: string;
}

export interface IOnboarding {
  organizationName: string;
  name: string;
  email: string;
  password: string;
}

export interface IOrganizations {
  current: number;
  organizations: Record<number, BaseOrganizationAndUserRole>;
}
