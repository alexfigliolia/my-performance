import type { Platform, UserRole } from "GQL";

export interface IOrganization {
  id: number;
  name: string;
  installations: Platform[];
  role: UserRole;
}

export interface IOrganizations {
  current: number;
  organizations: Record<number, IOrganization>;
}
