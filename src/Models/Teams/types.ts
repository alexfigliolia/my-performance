import type { CreateTeamMutation, TeamsQuery } from "GQL/Types";

export interface ITeams {
  myTeams: MyTeam[];
  totalTeams: number;
}

export type Team = TeamsQuery["teams"][number];
export type MyTeam = CreateTeamMutation["createTeam"];
