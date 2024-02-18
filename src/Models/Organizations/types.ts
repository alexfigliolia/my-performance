import type { InstallationType, Platform, UserRole } from "GQL";

export interface Installation {
  id: number;
  platform: Platform;
  type: InstallationType;
}

export interface InstallationTable {
  github: Installation;
  bitbucket: Installation;
}

export interface IOrganization {
  id: number;
  name: string;
  installations: InstallationTable;
  role: UserRole;
}

export interface IOrganizations {
  current: number;
  organizations: Record<number, IOrganization>;
}
