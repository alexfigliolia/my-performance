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
}

export interface IUserStats {
  collaborators: string[];
  recentPullRequests: PullRequest[];
}

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
  githubAccessWindow: boolean;
  bitbucketAccessWindow: boolean;
}

export interface IEditUser {
  name: string;
  email: string;
  position: string;
}

export interface IOnboarding {
  code: string;
  name: string;
}

export interface IOrganizations {
  current: number;
  organizations: Record<number, BaseOrganizationAndUserRole>;
}

export enum Platform {
  github = "github",
  bitbucket = "bitbucket",
}

export interface PlatformCredentials {
  id: number;
  token: string;
}

export interface IPlatform {
  github: PlatformCredentials | null;
}
