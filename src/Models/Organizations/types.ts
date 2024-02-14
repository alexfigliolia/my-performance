import type { BaseOrganizationAndUserRole } from "GQL";

export interface IOrganizations {
  current: number;
  organizations: Record<number, BaseOrganizationAndUserRole>;
}
