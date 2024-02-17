import type { Platform, UserRole } from "GQL";

export interface OrganizationAndRole {
  id: number;
  name: string;
  platform: Platform;
  roles: {
    role: UserRole;
  };
}

export interface IOrganizations {
  current: number;
  organizations: Record<number, BaseOrganizationAndUserRole>;
}
