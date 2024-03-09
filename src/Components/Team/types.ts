import type { MyTeam, Team } from "Models/Team";

export interface Props extends Team {
  role?: MyTeam["role"];
}
