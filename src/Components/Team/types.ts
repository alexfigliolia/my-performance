import type { MyTeam, Team } from "Models/Teams";

export interface Props extends Team {
  role?: MyTeam["role"];
}
