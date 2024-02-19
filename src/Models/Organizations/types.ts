import type { InstallationType, Platform, UserRole } from "GQL";
import type { IUser } from "Models/User";

export interface Installation {
  id: number;
  platform: Platform;
  type: InstallationType;
}

export interface InstallationTable {
  github: Installation;
  bitbucket: Installation;
}

export type OrganizationTable = Record<number, IOrganization>;

export interface IOrganization {
  id: number;
  name: string;
  installations: InstallationTable;
  role: UserRole;
}

export interface IOrganizations {
  current: number;
  organizations: OrganizationTable;
}

export interface UserScope {
  user: IUser;
  current: number;
  organizations: OrganizationTable;
}
