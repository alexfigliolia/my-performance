import type { QuickStack } from "Generics/QuickStack";
import type { CreateTeamMutation, TeamsQuery } from "GQL/Types";

export interface ITeams {
  totalLines: number;
  totalTeams: number;
  totalCommits: number;
  totalProjects: number;
  myTeams: QuickStack<number, MyTeam>;
}

export type Team = TeamsQuery["teams"][number];
export type MyTeam = CreateTeamMutation["createTeam"];
