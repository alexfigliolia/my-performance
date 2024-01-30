import { connectMulti } from "@figliolia/react-galena";
import { Team } from "./Team";
import { Project } from "./Project";

export const teamProgressConnection = connectMulti(Team, Project);
