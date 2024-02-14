import { connect } from "@figliolia/react-galena";
import { TeamModel } from "Models/Team";

export const Team = new TeamModel();

export const connectTeam = connect(Team);
